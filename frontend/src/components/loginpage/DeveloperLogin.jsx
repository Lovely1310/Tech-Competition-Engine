import React from 'react';

function DeveloperLogin() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div
        className="w-full bg-cover bg-center h-48 md:h-full md:flex flex-2"
         style={{ backgroundImage: "url('/Developerlogin_images/Earth.jpg')" }} //,backgroundPosition: 'right 20% center'
      >
        <div className="text-white text-center p-4 md:p-8 flex flex-col items-center justify-center h-full space-y-4 ml-16">
          <h2 className="text-xl md:text-4xl font-semibold">
            Welcome to Tech competition Engine Community
          </h2>
          <p className="text-sm md:text-xl">Home to 20 Million developers worldwide</p>
          <a
            href="#"
            className="text-white underline text-sm md:text-lg hover:text-black transition duration-300"
          >
            Know more
          </a>
        </div>
      </div>
      <div className="flex-1 w-full h-full md:h-full flex items-center justify-center p-4 bg-black">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-md space-y-3 md:space-y-6">
          <h3 className="text-black text-center text-2xl md:text-3xl font-bold">Welcome back!</h3>
          <h4 className="text-base md:text-xl text-center text-gray-600">Login to your account</h4>
          <p className="text-black text-base md:text-base">It's nice to see you again. Ready to code?</p>
          <form className="space-y-4 md:space-y-4 w-full">
            <input
              type="text"
              placeholder="Your username or email"
              className="w-full p-3 md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-black"
            />
            <input
              type="password"
              placeholder="Your password"
              className="w-full p-3 md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-black"
            />
            <button
              type="submit"
              className="w-full p-3 md:p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Log in
            </button>
            <div className="flex items-center justify-between text-sm md:text-sm">
              <label className="flex items-center text-black">
                <input type="checkbox" className="mr-2 md:mr-2" /> Remember me
              </label>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                Forgot password?
              </a>
            </div>
          </form>
          <div className="mt-6 md:mt-6 w-full space-y-3 md:space-y-3">
            <button
              className="w-full p-3 md:p-3 border border-gray-300 rounded-lg flex items-center justify-center space-x-3 md:space-x-3 hover:bg-gray-50 transition duration-300 text-black"
            >
              <img
                className="w-6 h-6 md:w-6 md:h-6"
                src="/Developerlogin_images/Google logo.png"
                alt="Google logo"
              />
              <span>Continue with Google</span>
            </button>
            <div className="flex flex-row md:flex-col space-x-3 md:space-y-3 md:space-x-0">
              <button
                className="w-1/3 md:w-full p-2 md:p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300 text-black"
              >
                <img
                  className="w-5 h-5 md:w-6 md:h-6 inline-block mr-1 md:mr-2"
                  src="/Developerlogin_images/LinkedIn_logo.png"
                  alt="LinkedIn logo"
                />
                LinkedIn
              </button>
              <button
                className="w-1/3 md:w-full p-2 md:p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300 text-black"
              >
                <img
                  className="w-5 h-5 md:w-6 md:h-6 inline-block mr-1 md:mr-2"
                  src="/Developerlogin_images/GitHub_Logo.png"
                  alt="GitHub logo"
                />
                GitHub
              </button>
              <button
                className="w-1/3 md:w-full p-2 md:p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300 text-black"
              >
                <img
                  className="w-5 h-5 md:w-6 md:h-6 inline-block mr-1 md:mr-2"
                  src="/Developerlogin_images/Facebook_logo.png"
                  alt="Facebook logo"
                />
                Facebook
              </button>
            </div>
          </div>
          <p className="mt-6 md:mt-6 text-sm text-gray-600 text-center">
            Don't have an account?{' '}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeveloperLogin;