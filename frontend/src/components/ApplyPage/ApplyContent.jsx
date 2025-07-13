import { IoIosArrowDown } from "react-icons/io";
import { IoSparklesSharp } from "react-icons/io5";
import { Data } from "./Data";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const ApplyContent = () => {
  const [data,setData] = useState(Data);
  const [page, setPage] = useState(1);
  const [company, setCompany] = useState([...new Set(Data.map((item) => item.companyName))]);
  const [experience, setExprience] = useState([...new Set(Data.map((item) => item.experience))]);
  const [location, setLocation] = useState([...new Set(Data.map((item) => item.location))]);
  const [role, setRole] = useState([...new Set(Data.map((item) => item.jobRole))]);
  const [value, setValue] = useState([]);
  const [card, setCard] = useState([]);

  function handelPage(prop) {
    if (page < 4 && prop == "+") {
      setPage((pre) => pre + 1);
    } else if (page > 1 && prop == "-") {
      setPage((pre) => pre - 1);
    }
  }

  function handelGetItem(key,value){
    setValue([key,value]);
  }

  

  useEffect(()=>{
    if(value.length == 0) return;

    const[key , val] = value;

    let copy = [...data];
    copy = copy.filter(item => item[key] == val);
    setCard(copy);

    let id = setTimeout(() => {
      setValue([]);
    }, 500);

    return ()=> clearTimeout(id);

  },[value]);

  console.log(card);

  return (
    <div className="flex flex-col p-10 gap-8 lg:px-[180px]">
      <div className="flex flex-col md:flex-row justify-between  gap-4 bg-gradient-to-r from-[#FBCB0A] to-[#FF6500] p-7 rounded-2xl">
        <div>
          <p className="text-[14px] flex items-center gap-4 font-semibold">
            Applying to jobs has never been easier{" "}
            <IoSparklesSharp color="white" size={18} />
          </p>
          <p className="text-[12px]">
            Use HackerRank QuickApply & autofill your way to your dream job
          </p>
        </div>
        <div>
          <button className="btn btn-neutral">See how it </button>
        </div>
      </div>

      <div>
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1  bg-black text-white">
            Role <IoIosArrowDown />
          </div>
          <ul
          
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            {role.map((item, idx) => {
              return (
                <li key={idx} className="text-[13px]">
                  <a onClick={()=>handelGetItem("jobRole",item)}>{item}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1 bg-black text-white">
            Experience <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            {experience.map((item, idx) => {
              return (
                <li key={idx} className="text-[13px]">
                  <a onClick={()=>handelGetItem("experience",item)}>{item}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1 bg-black text-white">
            Location <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
             {location.map((item, idx) => {
              return (
                <li key={idx} className="text-[13px]">
                  <a onClick={()=>handelGetItem("location",item)}>{item}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="dropdown dropdown-start">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-black text-white"
          >
            Company <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
             {company.map((item, idx) => {
              return (
                <li key={idx} className="text-[13px]">
                  <a onClick={()=>handelGetItem("companyName",item)}>{item}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 text-white">
        {(card.length > 0 ? card : data).slice(page * 12 - 12, page * 12).map((item, idx) => {
          return (
            <div
              key={idx}
              className="bg-[linear-gradient(90deg,rgba(173,216,230,0.3),rgba(221,160,221,0.5))] p-6 rounded-2xl flex flex-col gap-3 transform transition duration-300 hover:scale-105"
            >
              <div className="w-full flex justify-between">
                <div className="flex align-center gap-3">
                  <img src={item.companyLogo} className="h-5" />
                  <p className="text-[11px]">{item.companyName}</p>
                </div>

                <div>
                  <FaRegHeart size={20} />
                </div>
              </div>

              <div>
                <h2 className="text-[16px]">{item.jobRole}</h2>
                <p className="text-[10px]">{item.techStack.join(" • ")}</p>
              </div>

              <div className="text-[10px] ">
                <button className="bg-[linear-gradient(90deg,rgba(255,216,230,.5),rgba(221,160,221,0.4))] p-1 pl-2 pr-2 rounded-2xl text-white font-semibold">
                  {item.location}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <div className="flex gap-5 justify-center align-center">
          <IoIosArrowDropleftCircle
            color="white"
            size={35}
            onClick={() => handelPage("-")}
          />
          <div className="flex flex-row text-white gap-5 items-center">
            {[1, 2, 3, 4].map((no, idx) => (
              <span
                key={idx}
                onClick={() => setPage(no)}
                className={
                  page == no &&
                  "bg-[linear-gradient(90deg,rgba(255,216,230,.5),rgba(221,160,221,0.4))] p-1 pl-2 pr-2 rounded-3xl cursor-pointer"
                }
              >
                {no}
              </span>
            ))}
          </div>
          <IoIosArrowDroprightCircle
            color="white"
            size={35}
            onClick={() => handelPage("+")}
          />
        </div>
      </div>
    </div>
  );
};

export default ApplyContent;
