import React from "react";

const Connect = () => {
  return (
    <div className="h-screen font-[Crimson-Text] flex flex-col ">
      <div className="upper  flex-[8] pl-10 ml-5 md:flex mr-5">
        <div className="connect-text md:w-[50%]">
          <h2 className=" text-6xl mt-5 mb-10  md:text-[64px] md:mt-10 md:mb-10 md:ml-10  lg:ml-40 sm:text-green-700 md:text-blue-700 lg:text-black">Let's <br /> Connect...</h2>
          <h3 className="text-2xl mb-4  md:text-[48px] md:mb-20 md:ml-10 lg:ml-40">
            Reach out and let’s make ideas happen.
          </h3>
          <p className="contact">Email: olamidemaryam07@gmail.com</p>
          <p className="mb-5 contact text-3xl ">Phone Number: +234-703-770-9512</p>
        </div>
        <div className="form bg-[#0E0E0E]/50 rounded-[12px] mr-4 md:h-[60%] md:w-[40%] md:m-20 md:place-self-center ">
          <form
            name="input"
            action="html_form_submit.asp"
            method="get"
            className="mx-10 flex flex-col"
            netlify
          >
            <div className=" mt-5 flex-1">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <br />
              <input
                type="text"
                className="form-input h-10 font-[Crimson-Text]"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-3 flex-2">
              <label htmlFor="email" className="form-label ">
                Email
              </label>
              <br />
              <input
                type="email"
                className="form-input h-10  font-[Crimson-Text]"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="flex-5">
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                rows="4"
                cols="10"
                id="message"
                name="message"
                className="form-input w-[100%]"
                required
              ></textarea>
            </div>
            <div className="flex-1">
              <button
                type="submit"
                className="bg-black px-7 py-3 mb-5 rounded-[4px] font-[Oleo_Script]"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="social-media lower bg-black flex-[2] pl-5 pt-3 mt-5">
        <ul>
          <li className="m-1 mt-2 ">
            <a href="https://www.linkedin.com/in/maryam-olamide-b044b5290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              Linkedin
            </a>
          </li>
          <li className="m-1">
            <a href="https://vt.tiktok.com/ZSDsdfD4H/">Tiktok</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Connect;
