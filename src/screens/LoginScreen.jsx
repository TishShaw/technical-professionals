import React, { useState } from 'react';
import video from '../images/video.mp4';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation (add proper validation as needed)
    if (!email || !password) {
      setErrorMessage('Both fields are required.');
    } else {
      setErrorMessage('');
      // Handle login logic here (for example, send the credentials to your server)
      console.log('Logged in successfully');
    }
  };

  return (
    <div className='h-screen w-screen'>
      <div className='w-full h-screen bg-gray-900/50 absolute z-20' />
      <div className="h-full w-full flex justify-center align-center">
        <div className="h-[100px] w-screen relative">
          <video
            src={video}
            className='w-full absolute h-[400px] md:h-[905px] md:object-cover object-top z-10'
            autoPlay
            loop
            muted
          />
          <h2 className='text-4xl font-bold  h-[100px] mt-10 z-20 top-0 text-white'>
            Contact Us
          </h2>
        </div>
        <div className="bg-white z-30 absolute flex justify-center mt-20 items-center h-[600px] w-[800px] rounded-lg">
          <div className="px-6 h-full text-gray-800">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6 w-full">
              <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <form onSubmit={handleLogin}>
                  <div className="flex flex-row items-center justify-center lg:justify-start">
                    <p className="text-lg mb-0 mr-4">Sign in with</p>
                    <button
                      type="button"
                      className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out mx-1"
                    >
                      {/* Google icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                        <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center my-4">
                    <p className="text-center font-semibold mx-4 mb-0">Or</p>
                  </div>

                  {/* Email Field */}
                  <div className="mb-6">
                    <input
                      type="email"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Password Field */}
                  <div className="mb-6">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  {/* Error Message */}
                  {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

                  <div className="flex justify-between items-center mb-6">
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      />
                      <label className="form-check-label inline-block text-gray-800">Remember me</label>
                    </div>
                    <a href="#!" className="text-gray-800">Forgot password?</a>
                  </div>

                  <div className="text-center lg:text-left">
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
                    >
                      Login
                    </button>
                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                      Don't have an account?
                      <a
                        href="#!"
                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                      >
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learn More Section */}
      <div className="bg-blue-600 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Learn More About Our Services</h2>
        <p className="text-lg mb-4">We offer a wide range of tech solutions tailored to your needs. Our services are designed to help businesses grow and stay competitive in today's market.</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-gray-200">
          Explore Our Services
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
