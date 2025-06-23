
import { FaLongArrowAltRight } from "react-icons/fa";

const DeveloperSkills = () => {
    const contents = [
       { 
        buttonContent:"HACKERRANK COMMUNITY",
        headLine:"Prepare and apply for your dream job",
        videoSrc:"/dev_skill_sec_videos/job.mp4",
        mainContent:"Over 26 million developers have joined the HackerRank community to certify their skills, practice interviewing, and discover relevant jobs. An AI Mock Interviewer can help you prepare, while our QuickApply agent puts your job search on autopilot."
       },
       
       { 
        buttonContent:"HACKERRANK ENGAGE",
        headLine:"Showcase your tech brand",
        videoSrc:"/dev_skill_sec_videos/tech_brand.mp4",
        mainContent:"Attract developers with hackathons that feature real-world challenges, and preview what it's like to work at your company. Our Al Assistant helps you set up a hackathon in minutes. Host it yourself or advertise and run a campaign through our developer community."
       },

       { 
        buttonContent:"HACKERRANK SCREEN",
        headLine:"Take-home assessments that ensure fairness and integrity",
        videoSrc:"/dev_skill_sec_videos/home Assesments.mp4",
        mainContent:"Identify strong developers by administering a take-home assessment in a secure environment. Choose from a library of thousands of challenges across many roles designed by experts and validated by Industrial Psychologists for fairness."
       },

       { 
        buttonContent:"HACKERRANK INTERVIEW",
        headLine:"Pair-programming interviews on demand",
        videoSrc:"/dev_skill_sec_videos/pair_programming.mp4",
        mainContent:"Get an accurate sense for what it would be like to work together by pair programming with candidates on real-world scenarios. Review code, fix bugs, build a feature, and see the result, all within an interview setting using pre-set repos or one of your own."
       },

       { 
        buttonContent:"HACKERRANK SKILLUP",
        headLine:"Find skills inside your company",
        videoSrc:"/dev_skill_sec_videos/skill_company.mp4",
        mainContent:"Empower developers to showcase their skills, earn certifications, and gain recognition - while helping you strengthen your organization. Our Al Tutor helps developers learn as they go, while our advanced insights help you understand the skillsets of your organization."
       }
    ]

  return (
    <section className='min-h-screen w-full'>
    <div className="min-h-screen w-full flex flex-col py-10 px-10 gap-32 font-satoshi items-center justify-center">
    <h1 className="text-6xl">The Developer Skills Platform</h1>
    <div className="w-full flex flex-col gap-60 items-center justify-center">
    { contents.map((content,key)=>{
        const isEven = key%2===0
    return <div key={key} className={`w-full flex ${isEven ? '' : 'lg:flex-row-reverse'} flex-col lg:flex-row items-center`}>
    <div className='w-[50%] flex flex-col gap-2 px-10'>
        <button className="font-departure-mono bg-black rounded-3xl" id="dev-button" >{content.buttonContent}</button>
        <h2 className="text-[32px]">{content.headLine}</h2>
        <p className="text-[18px]">{content.mainContent}</p>
        <div className="flex items-center gap-2 text-[16px]"><p>Learn More</p>{" "}<FaLongArrowAltRight /></div>
    </div>
            <div className="w-[50%] px-10"><video autoPlay loop muted playsInline src={content.videoSrc} className="w-full">Your Browser doesnot support videos</video></div>
    </div>
    })
    }
    </div>
    </div>
    <div className="h-48 w-full bg-[url('/gradient3.png')] bg-cover bg-center"></div>
    </section>
  )
}

export default DeveloperSkills
