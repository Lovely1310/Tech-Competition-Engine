import React, { useState } from "react";
import pic1 from "../../../public/apply/pic1.png";
import pic2 from "../../../public/apply/pic2.png";
import pic3 from "../../../public/apply/pic3.png";

const Onboarding = () => {
  const [num, setNumber] = useState(3);

  return (
    <div className="h-[100vh] text-white bg-gradient-to-br from-[#3B0944] via-[#4F1C4C] to-[#8B104E] flex justify-center items-center">
      <div className="flex flex-row m-auto p-10 md:w-[70%] gap-12">

        <div className="flex flex-col gap-13">
          <div>
            <p className="text-[12px]">Introducing</p>
            <h2 className="text-[22px] font-bold">QuickApply</h2>
          </div>

          <div className="flex flex-col gap-7 pl-9 border-l-4">
            <div >
              <h3 className="text-[18px] font-bold mb-2">1.Set up your application profile in one easy step</h3>
              {num == 1 && (
                <p className="text-[12px]">
                  Upload your resume or link your HackerRank profile to
                  automatically populate your details. Review and apply to jobs
                  instantly with one click!
                </p>
              )}
            </div>

            <div className="text-[18px] font-bold mb-2">
              <h3>2.Get the “Tech Competition Engine” extension</h3>
              {num == 2 && (
                <p className="text-[12px]">
                  Grab our free Chrome extension from the Web Store and
                  instantly find jobs tailored to your profile!
                </p>
              )}
            </div>

            <div>
              <h3 className="text-[18px] font-bold mb-2">3.Fast-Track Your Tech Career with Autofill</h3>
              {num == 3 && (
                <p className="text-[12px]">
                  Tired of filling out endless forms? Let QuickApply do it for
                  you. Save time and effort while you apply to top tech jobs or
                  competitions with just one click.
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-5">
            <button className="btn btn-secondary">Lets do it</button>
            <button className="btn btn-outline btn-secondary">I'll do it later</button>
          </div>
        </div>

        <div className="hidden md:block flex items-center ">
          <div>
            {num == 1 && <img className="w-[100%] h-[50%]" src={pic1} alt="" />}
            {num == 2 && <img className="w-[100%] h-[50%]" src={pic2} alt="" />}
            {num == 3 && <img className="w-[100%] h-[50%]" src={pic3} alt="" />}
          </div>
          <div className="flex gap-3 w-full justify-center items-center mt-6">
            <div
            onClick={()=>setNumber(1)}
              className={
                num == 1
                  ? "w-4 h-4 bg-gray-300 rounded-2xl cursor-pointer"
                  : "w-3 h-3 bg-white rounded-2xl cursor-pointer"
              }
            ></div>
            <div
            onClick={()=>setNumber(2)}
              className={
                num == 2
                  ? "w-4 h-4 bg-gray-300 rounded-2xl cursor-pointer"
                  : "w-3 h-3 bg-white rounded-2xl cursor-pointer"
              }
            ></div>
            <div
            onClick={()=>setNumber(3)}
              className={
                num == 3
                  ? "w-4 h-4 bg-gray-300 rounded-2xl cursor-pointer"
                  : "w-3 h-3 bg-white rounded-2xl cursor-pointer"
              }
            ></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Onboarding;
