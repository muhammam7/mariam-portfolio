import React from "react";
import person from "../assets/main_person.png";

const Home = () => {
  return (
    <div className="flex font-[Open_Sans] h-screen ">
      <div className="left pl-20 pt-15 md:w-[50%] md:pl-10 md:pt-25">
        <h3 className="text-[30px] md:text-[40px] md:ml-10 ">Hi, I'm</h3>
        <h2 className="text-[50px] mb-5 md:text-[70px] md:mb-10 md:ml-20 lg:ml-30  ">
          OLAMIDE <br />
          MARYAM
        </h2>
        <h3 className=" font-[Oleo_Script] mb-5 mt-0 text-[15px] md:ml-10  lg:ml-20 md:mb-20 m:mt-0 md:text-[30px]">
          Marketing Chic
        </h3>
        <p className="font-[Crimson-Text] w-[100%] text-center md:w-[80%] lg:w-[60%] md:ml-10">
          I’m a passionate copywriter and digital marketer skilled in email
          campaigns, landing pages, and sales copy. With experience as an
          Assistant CEO, Real Estate Advisor, and General Manager, I bring both
          creativity and business strategy to the table. My goal is simple: to
          help brands connect, engage, and grow.
        </p>
      </div>
      <div className="right  w-[100%] place-self-end md:place-self-auto md:w-[50%]  ">
        <img src={person} alt="" className="mb-0 h-[100%]" />
      </div>
    </div>
  );
};

export default Home;
