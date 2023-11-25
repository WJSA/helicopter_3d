import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import Navbar from './components/Navbar';
import News from './components/News';
import City from './components/City';
import Adventure from './components/Adventure';

const Model = () => {
  const mount = useRef(null);
  const scrollY = useRef(0);
  const rotationValue = useRef(0);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load('./dist/helicopter_new.glb', (gltf) => {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.material.transparent = true;
          child.material.opacity = 2;
        }
      });

      // Ajustar la escala del modelo para que ocupe más espacio en la pantalla
      gltf.scene.scale.set(2, 2, 2);

      gltf.scene.rotation.y = Math.PI;

      scene.add(gltf.scene);
    });

    // Ajustar la posición de la cámara para asegurar que el modelo completo sea visible
    camera.position.z = 5;
    camera.position.y = 3;

    mount.current.style.position = 'fixed';
    mount.current.style.top = '90px'; // Ajustar la posición para que el modelo comience desde la parte superior
    mount.current.style.left = '0';
    mount.current.style.zIndex = '1';

    const ambientLight = new THREE.AmbientLight(0xffffff, 10);
    scene.add(ambientLight);

    // Crear un objeto para representar la luz direccional
    const directionalLightContainer = new THREE.Object3D();
    scene.add(directionalLightContainer);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 15);
    directionalLight.position.set(1, 1, 1).normalize();
    directionalLightContainer.add(directionalLight);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      // Calcular la rotación en función del desplazamiento de scroll
      const targetRotation = scrollY.current * 0.0023;
      // Suavizar la transición hacia la nueva rotación
      const deltaRotation = (targetRotation - rotationValue.current) * 0.1;
      // Actualizar la rotación gradualmente
      rotationValue.current += deltaRotation;
      scene.rotation.y = rotationValue.current;

      // Actualizar la posición de la luz direccional en cada fotograma
      const lightRotation = new THREE.Euler(0, rotationValue.current, 0, 'XYZ');
      directionalLightContainer.setRotationFromEuler(lightRotation);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId.current);
      mount.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mount} className="w-full h-screen overflow-hidden" />;
};

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calcular la opacidad en función de la posición de desplazamiento
  const opacity = Math.min((scrollPosition - 850) / 250, 1);

  return (
    <div className="relative">
      <Router>
        <Navbar />
      </Router>
      <Model />
      <main className="relative">
        <div>
          <div className="fixed left-16 top-1/2 transform -translate-y-1/2 h-56 w-1 bg-gray-500 z-50"></div>
          {scrollPosition < 400 && (
            <>
              <p className="fixed left-14 top-1/4 transform -translate-y-1/2 z-50 font-bold">01</p>
              <p className="fixed left-14 top-3/4 transform -translate-y-1/2 z-50 font-bold">02</p>
            </>
          )}
          {scrollPosition >= 400 && (
            <>
              <p className="fixed left-14 top-1/4 transform -translate-y-1/2 z-50 font-bold">02</p>
              <p className="fixed left-14 top-3/4 transform -translate-y-1/2 z-50 font-bold">03</p>
            </>
          )}
          {scrollPosition >= 850 && (
            <>
              <p className="fixed left-14 top-1/4 transform -translate-y-1/2 z-50 font-bold" style={{ color: `rgba(255, 255, 255, ${opacity})` }}>02</p>
              <p className="fixed left-14 top-3/4 transform -translate-y-1/2 z-50 font-bold" style={{ color: `rgba(255, 255, 255, ${opacity})` }}>03</p>
            </>
          )}
        </div>
        
        <News />
        <div style={{ position: 'relative', zIndex: '0' }}>
          <City />
          <Adventure />
        </div>
      </main>
    </div>
  );
};

export default App;
