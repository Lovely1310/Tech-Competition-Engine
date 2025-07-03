import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Loginmiddle = () => {
    const navigate = useNavigate();
  return (
    <div className='flex items-center justify-center w-full  p-17'>
      <div className=' w-full flex items-center justify-center flex-col md:flex-row '>

        <div className='p-10 flex flex-col gap-8 items-center justify-center md-w-1/2 lg-w-1/3 '>

          <p className='p-3 bg-black text-base text-white rounded-2xl '>Organisation</p>
          <h2 className='text-[2rem] font-bold'>For Business</h2>
          <p>Thousands of forward-thinking companies use our platform to recruit top talent and continuously grow their tech teams.</p>
          <button className="btn btn-neutral" onClick={()=>navigate("/work/login")}>Log In</button>

          <div className='flex flex-col text-sm items-center justify-center'>
            <p>Don't have an account ?</p>
            <div className='flex gap-3'>
              <Link className='text-green-700 font-semibold' to="#">Contact sales</Link>
              <p>Or</p>
              <Link className='text-green-700 font-semibold' to='#'>Get free trial</Link>
            </div>
          </div>
        </div>

       <div className="hidden md:block h-[300px] w-px bg-gray-300 mx-6"></div>
       <div className=" md:block h-[1px] w-[80%] bg-gray-300 mx-6 md:hidden lg:hidden"></div>
        
        <div className=' flex flex-col  gap-7 items-center justify-center p-5 pt-22 lg-w-1/2  lg-w-1/2'>
          <h2 className='text-[2rem] font-bold'>For Coders</h2>
          <p className=' w-[70%]'>Connect with a global community of 26+ million developers. Sharpen your coding skills, ace technical interviews, and unlock new career opportunities.
          </p>
          <button className="btn btn-neutral btn-outline">Log In</button>
          <div className='flex flex-col text-sm items-center justify-center'>
            <p>Don't have an account?</p>
            <Link className='text-green-700 font-semibold' to='#'>Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginmiddle
