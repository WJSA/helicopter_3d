import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='flex justify-between items-center sm:px-16 px-5 py-4 max-w-5xl mx-auto absolute top-5 bg-transparent z-10 right-0 left-0 text-2xl'>
      <NavLink to='/' className='flex items-center justify-start'>
        <svg width="92" height="23" viewBox="0 0 92 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.68 0.5C23.88 0.5 24.9067 0.926666 25.76 1.78C26.64 2.63333 27.08 3.67333 27.08 4.9V22.5H19.72V15.18H8V22.5H0.68V4.9C0.68 3.67333 1.10667 2.63333 1.96 1.78C2.81333 0.926666 3.85333 0.5 5.08 0.5H22.68ZM19.72 9.3V6.38H8V9.3H19.72ZM54.7922 0.5C56.0189 0.5 57.0589 0.926666 57.9122 1.78C58.7655 2.63333 59.1922 3.67333 59.1922 4.9V9.42C59.1922 9.84667 59.0455 10.2733 58.7522 10.7C58.4855 11.1 58.1389 11.3667 57.7122 11.5C58.1389 11.6333 58.4855 11.9133 58.7522 12.34C59.0455 12.74 59.1922 13.1533 59.1922 13.58V18.1C59.1922 19.3267 58.7655 20.3667 57.9122 21.22C57.0589 22.0733 56.0189 22.5 54.7922 22.5H32.7922V0.5H54.7922ZM51.8722 16.62V14.42H40.1122V16.62H51.8722ZM51.8722 8.58V6.38H40.1122V8.58H51.8722ZM72.1044 6.38V16.62H91.1844V22.5H69.1844C67.9577 22.5 66.9177 22.0733 66.0644 21.22C65.211 20.3667 64.7844 19.3267 64.7844 18.1V4.9C64.7844 3.67333 65.211 2.63333 66.0644 1.78C66.9177 0.926666 67.9577 0.5 69.1844 0.5H91.1844V6.38H72.1044Z" fill="black"/>
        </svg>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium  justify-center text-2xl'>
        <NavLink to='/' className=''>
          Home
        </NavLink>
        <NavLink to='/' className={"text-black "}>
          About
        </NavLink>
        <NavLink to='/' className={"text-black "}>
          Services
        </NavLink>
        <NavLink to='/' className={"text-black "}>
          Location
        </NavLink>
      </nav>
      <NavLink to='/' className='flex items-center justify-end text-lg text-black'>
        <button className="px-4 py-2 text-white bg-black rounded-xl hover:bg-gray-800 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 text-2xl ">
          CONTACT
        </button>
      </NavLink>
    </header>
  );
};

export default Navbar;
