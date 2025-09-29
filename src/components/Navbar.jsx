import { useRef, useState, useEffect } from "react";
import { Link } from "react-scroll";

 

const Navbar = () => {

  const navRef = useRef(null);
  const [offset, setOffset] = useState(0);

  // Measure navbar height once it mounts
  useEffect(() => {
    if (navRef.current) {
      setOffset(-navRef.current.offsetHeight);
    }
  }, []);

  return (
    <> 
    <nav className="fixed bg-white/20  backdrop-blur-sm rounded-[12px] font-[Crimson_Text] flex top-7 place-self-center  text-[20px]">
      <div className=" container mx-auto flex justify-center items-center place-self-center p-0 ">
         <Link
        to="home"
        smooth={true}
        spy={true}
        offset={offset}
        duration={200}
        activeClass="underline decoration-2 underline-offset-4 decoration-black"
        className="cursor-pointer mx-5 "
      >
        Home
      </Link>
      <Link
        to="services"
        smooth={true}
        spy={true}
        offset={offset}
        duration={200}
        activeClass="underline decoration-2 underline-offset-4 decoration-black"
        className="cursor-pointer mx-5"
      >
        Services
      </Link>
      <Link
        to="experience"
        smooth={true}
        spy={true}
        offset={offset}
        duration={200}
        activeClass="underline decoration-2 underline-offset-4 decoration-black"
        className="cursor-pointer mx-5 "
      >
        Experiences
      </Link>
      <Link
        to="connect"
        smooth={true}
        spy={true}
        offset={offset}
        duration={200}
        activeClass="underline decoration-2 underline-offset-4 decoration-black"
        className="cursor-pointer mx-5"
      >
        Connect
      </Link>


      </div>
    </nav>
  </>
  )
}

export default Navbar

{/* <ul className="hidden md:flex space-x-6 ">
          <li className="py-1"><a href="#home" className="mx-5  nav ">Home</a></li>
          <li className="py-1"><a href="#services" className="mx-5 nav ">Services</a></li>
          <li className="py-1"><a href="#experience" className="mx-5 nav  ">Experience</a></li>
          <li className="py-1"><a href="#connect" className="mx-5 nav">Connect</a></li>
        </ul> */}

