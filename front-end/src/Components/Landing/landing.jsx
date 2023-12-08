import React from 'react';
import {Link, useNavigate} from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-screen'>
    <div className="flex flex-wrap">
      <div className="w-full sm:w-8/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">
          <nav className="flex px-4 justify-between items-center">
          <a href="/" class="text-indigo-900 z-10 active">
        <img src="https://www.svgrepo.com/show/489282/brand.svg" class="w-24 py-8 md:py-0 g-image"/>
    </a>
            <div>
              <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8" />
            </div>
          </nav>
          <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div className="w-full">
              <h1 className="text-4xl lg:text-6xl font-bold">Person<span className="text-blue-700">Identifier</span> </h1>
              <div className="w-20 h-2 bg-blue-700 my-8"></div>
              <p className="text-xl mb-10">Explore the unique rhythm of each person's walk through advanced gait recognition technology. We leverage the power of computer vision and deep learning to identify individuals with unparalleled accuracy.</p>
              <Link to="/login" className="bg-indigo-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">Get Started </Link>
            </div>
          </header>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Leafs" className="w-full h-48 object-cover sm:h-screen sm:w-4/12" />
    </div>
    </div>
  );
};

export default Header;
