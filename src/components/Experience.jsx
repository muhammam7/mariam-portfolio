import React from "react";

const Experience = () => {
  return (
    <div className="h-screen pt-10 font-[Crimson_Text] text-center divide-y-5 divide-black  mx-5 md:flex md:pt-30 md:divide-x-5 justify-items-center md:divide-y-0 md:pb-40">
      <div className="experience p-6 md:flex-1 ">
        <h2 className="font-[Open_Sans] text-[50px] mb-5 ">Experience</h2>

        <p className="text-1xl m-3 md:text-2xl lg:text-3xl ">
          <span className="font-bold text-2xl md:text-3xl lg:text-4xl">Assistant CEO</span><br/> — Zaimam
          Ventures
        </p>
        <p className="text-1xl m-3 md:text-2xl lg:text-3xl">
          <span className="font-bold text-2xl md:text-3xl lg:text-4xl">Realestate Advisor</span> <br/>  — BRIT Properties
        </p>
        <p className="text-1xl m-3 md:text-2xl lg:text-3xl">
          <span className="font-bold text-2xl md:text-3xl lg:text-4xl">FMCG Distribution Manager</span> <br/>  — Hammy & Temmy Ventures
        </p>
        <p className="text-1xl m-3 md:text-2xl lg:text-3xl">
          <span className="font-bold text-2xl md:text-3xl lg:text-4xl">Freelancer</span> <br/>  — Copwywriting and digital Marketing
        </p>
      </div>
      <div className="education py-6 text-2xl md:flex-1 md:text-2xl lg:text-4xl">
        <h2 className="font-[Open_Sans] text-[50px] mb-5 ">Education</h2>
        <p className="m-3 font-bold md:self-center">BSC. <br /> Business & Entrepeneurship</p>
        <p className="m-3 font-bold">ND. <br /> Marketing</p>
      </div>
    </div>
  );
};

export default Experience;
