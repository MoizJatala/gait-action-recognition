import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserProfile from '../Userprofile/profile';
import Upload from '../Upload/Upload';
import Result from '../Result/result';
import Recorder from '../VideoRecorder/Recorder';
import './Home.css';

const Home = () => {
  const location = useLocation();
  const user = location.state.user;
  const [showResult, setShowResult] = useState(false);
  const [isUploadView, setIsUploadView] = useState(true);

  useEffect(() => {
    const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('open-sidebar');

    const toggleSidebar = (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('-translate-x-full');
    };

    openSidebarButton.addEventListener('click', toggleSidebar);

    // Close the sidebar when clicking outside of it
    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
        sidebar.classList.add('-translate-x-full');
      }
    });

    // Cleanup event listener on component unmount
    return () => {
      openSidebarButton.removeEventListener('click', toggleSidebar);
      document.removeEventListener('click', toggleSidebar);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  const handleUploadStatus = (status) => {
    if (status === 'Upload successful') {
      setShowResult(true);

      // Reset the result after 10 seconds
    } else {
      setShowResult(false);
    }
  };

  const handleRecordedStatus = (status) => {
    if (status === 'Upload successful') {
      console.log(status);
      setShowResult(true);

      // Reset the result after 10 seconds
    } else {
      setShowResult(false);
      console.log(status);
    }
  };

  return (
    <div className="bg-grey-300">
      <div className="h-screen flex overflow-hidden bg-gray-200">
        <div
          className="absolute bg-gray-100 text-white w-56 min-h-screen overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300"
          id="sidebar"
        >
          <div className="p-4">
            <ul className="mt-8">
              <UserProfile
                status={user.status}
                name={user.name}
                password={user.password}
                email={user.email}
              />
              <h4 className="block text-l font-semibold text-indigo-500">{user.name}</h4>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <div className="bg-blue-500 shadow">
            <div className="container mx-auto">
              <div className="flex justify-between items-center py-4 px-2">
                <a href="/" className="text-indigo-900 z-5">
                  <img
                    src="https://www.svgrepo.com/show/489282/brand.svg"
                    className="w-24 py-0 md:py-0 g-image"
                  />
                </a>

                <div className="flex space-x-4">
                  <button
                    className={`text-gray-500 hover:text-gray-600 ${
                      isUploadView ? 'bold' : ''
                    }`}
                    onClick={() => setIsUploadView(true)}
                  >
                    Upload
                  </button>
                  <button
                    className={`text-gray-500 hover:text-gray-600 ${
                      !isUploadView ? 'bold' : ''
                    }`}
                    onClick={() => setIsUploadView(false)}
                  >
                    Record
                  </button>
                </div>

                <button className="text-gray-500 hover:text-gray-600" id="open-sidebar">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Content Body */}
          <div className="flex-1 overflow-auto p-4">
            {showResult ? (
              <div className="flex-1 overflow-auto p-4 flex">
                <div className="w-2/3 pr-2">
                  {isUploadView ? (
                    <Upload onUploadStatus={handleUploadStatus} />
                  ) : (
                    <Recorder onRecordStatus={handleRecordedStatus} />
                  )}
                </div>
                <div className="w-1/3 pl-2">{showResult && <Result />}</div>
              </div>
            ) : (
              <div className="w-full">{isUploadView ? <Upload onUploadStatus={handleUploadStatus} /> : <Recorder onRecordStatus={handleRecordedStatus} />}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
