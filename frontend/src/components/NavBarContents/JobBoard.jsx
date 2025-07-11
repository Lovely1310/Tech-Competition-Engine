import React from 'react'
import Navigation from '../LandingPage/Navigation'

const JobBoard = () => {
  return (
    <>
      <Navigation />
      <div className='flex flex-row min-h-screen bg-gray-50 pt-16'>
        {/* Left Section - User Profile */}
        <div className='flex flex-col w-[40%] bg-gray-50 p-8 min-h-screen'>
          <div className='bg-white border border-gray-200 rounded-lg shadow-sm p-8 mt-8'>
            <div className='flex flex-col items-center justify-start'>
              {/* Profile Picture */}
              <div className='w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-6'>
                <span className='text-3xl font-bold text-gray-600'>H</span>
              </div>
              
              {/* Name and Handle */}
              <div className='text-center mb-6'>
                <h1 className='text-2xl font-bold text-gray-800 mb-1'>Rome Moore 🇺🇸</h1>
                <p className='text-gray-600'>@apply</p>
              </div>
              
              {/* Action Buttons */}
              <div className='flex gap-4 mb-8'>
                <button className='bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors'>
                  Unfollow
                </button>
                <button className='border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors'>
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section - Profile Details */}
        <div className='flex flex-col w-[60%] bg-white p-8 overflow-y-auto min-h-screen'>
          {/* Badges Section */}
          <div className='mb-8 pt-8'>
            <div className='flex items-center gap-2 mb-4'>
              <span className='text-xl'>🏆</span>
              <h2 className='text-xl font-semibold text-gray-800'>Badges</h2>
            </div>
            
            <div className='flex justify-center mb-8'>
              <div className='relative'>
                <div className='w-32 h-32 bg-orange-200 rounded-full flex flex-col items-center justify-center border-4 border-orange-300'>
                  <div className='w-8 h-8 bg-gray-600 rounded mb-2 flex items-center justify-center'>
                    <span className='text-white text-sm'>📦</span>
                  </div>
                  <div className='text-center'>
                    <div className='text-sm font-medium text-gray-700'>Problem Solving</div>
                    <div className='text-yellow-500 text-lg'>★</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications Section */}
          <div className='mb-8'>
            <div className='flex items-center gap-2 mb-4'>
              <span className='text-xl'>📜</span>
              <h2 className='text-xl font-semibold text-gray-800'>Certifications</h2>
            </div>
            <p className='text-gray-600'>apply has not earned any certificates yet.</p>
          </div>
          
          {/* Work Experience Section */}
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <span className='text-xl'>💼</span>
              <h2 className='text-xl font-semibold text-gray-800'>Work Experience</h2>
            </div>
            {/* Work experience content would go here */}
          </div>
        </div>
      </div>
    </>
  )
}

export default JobBoard
