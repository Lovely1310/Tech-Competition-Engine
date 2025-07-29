import React from 'react';

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9] relative overflow-hidden">
      {/* Shining background effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-blue-300 via-purple-200 to-pink-200 opacity-40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-green-200 via-blue-100 to-purple-200 opacity-30 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto p-8 gap-12">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center md:text-left">Start your free trial</h1>
          <p className="text-gray-600 mb-6 text-center md:text-left">No credit card required. Sign up with your work email.</p>
          <form className="w-full max-w-md space-y-4">
            <div className="flex gap-2">
              <input type="text" placeholder="First name" className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 bg-white" />
              <input type="text" placeholder="Last name" className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 bg-white" />
            </div>
            <input type="email" placeholder="Work email address" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 bg-white" />
            <button type="submit" className="w-full py-3 rounded-lg bg-[#c7cbe6] text-gray-600 font-semibold text-lg cursor-not-allowed transition-all duration-200 hover:bg-[#b0b4d6] hover:text-gray-800" disabled>Sign up</button>
          </form>
          <a href="/login/developerlogin" className="w-full block mt-3">
            <button type="button" className="w-full py-3 rounded-lg text-blue-700 font-semibold text-lg bg-white hover:bg-blue-100 hover:text-blue-900 transition-all duration-200">Login</button>
          </a>
          <div className="my-6 w-full flex items-center justify-center">
            <span className="text-gray-400 text-sm">Or sign up with...</span>
          </div>
          <div className="flex gap-4 w-full max-w-md">
            <button className="flex-1 flex items-center justify-center border border-gray-300 rounded-lg py-3 bg-white hover:bg-blue-50 hover:border-blue-400 hover:shadow-md transition-all duration-200">
              <img src="https://hrcdn.net/fcore/assets/signup/google-1ce6cf8a69.svg" alt="Google" className="w-5 h-5 mr-2" />
              <span className="font-medium text-gray-700">Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center border border-gray-300 rounded-lg py-3 bg-white hover:bg-blue-50 hover:border-blue-400 hover:shadow-md transition-all duration-200">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="w-5 h-5 mr-2" />
              <span className="font-medium text-gray-700">Microsoft</span>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-6 text-center md:text-left">
            By signing up, you agree to our <a href="#" className="text-green-700 underline">master subscription agreement</a> and <a href="#" className="text-green-700 underline">privacy policy</a>.
          </p>
        </div>
        {/* Right: Illustration */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src="https://thumbs.dreamstime.com/b/african-american-happy-boy-learning-coding-cute-sitting-laptop-vector-illustration-isolated-white-background-design-136584654.jpg" alt="Happy boy learning coding" className="w-96 max-w-full rounded-xl shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default SignUp; 