import React from "react";
import content from "../assets/content_creation.svg";
import copywrite from "../assets/copywriting.svg";
import digital  from "../assets/digital_marketing.svg";

const Works = ({ picture, title, about }) => {
  return (
    <div className=" my-5 mx-10 pt-2 text-center bg-[black]/50  rounded-[12px] divide-y divide-white flex-1 items-center justify-center md:mx-2 lg:mx-5 ">
      <div className="flex items-center gap-2  justify-between px-2 pb-2">
        <img src={picture} alt="" className="h-[40px]" />
        <h3 className=" ">{title}</h3>
      </div>
      <div className="flex items-center justify-center place-self-center ">
        <p className="p-2 md:text-1xl justify-center items-center place-self-center ">{about}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="font-[Crimson_Text] h-screen w-[100%] justify-items-center">
      <div className="h-[10%] bg-black md:h-[20%] w-[100%] "></div>
      <h2 className="mt-5 text-[40px]  md:mb-20">My services</h2>
      <div className="services md:place-self-center w-[80%] md:grid md:grid-cols-3 md:h-64  md:w-[80%]">
        <Works
          picture={copywrite}
          title="COPYWRITING"
          about="I provide copywriting services by crafting persuasive and engaging content tailored to your brand voice and audience"
        />
        <Works
          picture={digital}
          title="DIGITAL MARKETING"
          about="I provide digital marketing services by creating strategies that increase visibility, engage the right audience, and drive measurable growth across platforms."
        />
        <Works
          picture={content}
          title="CONTENT CREATION"
          about="I create engaging content that builds brand awareness and connects with your audience across social media, blogs, and digital platforms."
        />
      </div>
    </div>
  );
};

export default Services;
