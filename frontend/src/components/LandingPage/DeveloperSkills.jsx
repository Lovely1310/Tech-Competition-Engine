import { FaLongArrowAltRight } from "react-icons/fa";

const DeveloperSkills = () => {
  return (
    <section className='min-h-screen w-full flex flex-col px-10 gap-20 font-satoshi items-center justify-center'>
    <h1 className="text-5xl">The Developer Skills Platform</h1>
    <div className='w-full flex'>
    <div className='w-[50%] flex flex-col gap-2'>
        <button className="font-departure-mono bg-black rounded-3xl text-white w-[250px] dev-button" >HACKERRANK COMMUNITY</button>
        <h2 className="text-[32px]">Prepare and apply for your dream job</h2>
        <p className="text-[18px]">Over 26 million developers have joined the HackerRank community to certify their skills, practice interviewing, and discover relevant jobs. An AI Mock Interviewer can help you prepare, while our QuickApply agent puts your job search on autopilot.</p>
        <div className="flex items-center gap-2 text-[16px]"><p>Learn More</p>{" "}<FaLongArrowAltRight /></div>
    </div>
    <div className="w-[50%] px-10"><video autoPlay loop muted playsInline src="/dev_skill_sec_videos/job.mp4" className="w-full">Your Browser doesnot support videos</video></div>
    </div>
    </section>
  )
}

export default DeveloperSkills
