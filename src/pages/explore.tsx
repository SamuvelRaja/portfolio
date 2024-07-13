import { Link } from "react-router-dom"
import copyImage from "../assets/copy.svg";
import Blinker from "@/components/blinker";
import { useRef } from "react";

const Explore = () => {
  const copyRef =useRef<HTMLButtonElement>(null)
  const copyEmail = async() => {
    const email = "josephsamuvel001@gmail.com";
    navigator.clipboard.writeText(email);
    copyRef.current.innerText="Copied"
  };
  return (
    <>
      <div>
        <h1 className="text-5xl pt-20 text-white font-semibold leading-[1.20]">
          Hey, I'm Sam.js, <br /> I code <Blinker texts={["FrontEnd", "Backend", "Middlewares"]} />
          <br /> with <span className="text-[#858585]">javaScript</span></h1>
        <p className="text-[#858585] text-[18px] my-6">
          I'm a Frontend Developer, I can build webapps with good looking user interfaces and awesome functionalities,
          i can also work on backend technologies like nodejs and expressjs
          worked on various products of different domains, take a look on my <Link className="plinks" to={"/projects"}>projects &#8599;</Link> and
          reach out to me <Link className="plinks" to={"/contact"}>here &#8599;</Link>
        </p>
        <div className="flex gap-6">
          <Link className="btn btn-primary" to={"/about"}>About</Link>

          <button ref={copyRef} className="btn btn-secondary inline-flex gap-2" onClick={copyEmail}>
            <img  className="w-[18px]" src={copyImage} alt="Copy" /> E-mail
          </button>
        </div>
      </div>
      <div>
        
      </div>
    </>
   
  )
}

export default Explore
