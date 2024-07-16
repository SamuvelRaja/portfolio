import { Link } from "react-router-dom"
import copyImage from "../assets/copy.svg";
import Blinker from "@/components/blinker";
import { useRef } from "react";
import reactImg from "../assets/react.svg"
import nodeImg from "../assets/node.svg"
import nextImg from "../assets/nextjs.svg"
import jsImg from "../assets/js.svg"
import tailwindImg from "../assets/tailwind.svg"
import threeImg from "../assets/three.svg"
import project from "../assets/project.avif"


const Explore = () => {
  const copyRef =useRef<HTMLButtonElement>(null)
  const copyEmail = async() => {
    const email = "josephsamuvel001@gmail.com";
    navigator.clipboard.writeText(email);
    copyRef.current?copyRef.current.innerText="Copied":"";
  };
  return (
    <>
      <div>
        <h1 className="text-5xl pt-20 text-white font-semibold leading-[1.20]">
          Hey, I'm Sam.js, <br /> I code <Blinker texts={["FrontEnd", "Backend", "Middlewares", "Whatever..."]} />
          <br /> with <span className="text-[#858585]">javaScript</span></h1>
        <p className="p2">
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
      {/* stack section */}
      <div>
        <div className="card p-6 mt-10 ">
          <h2 className="mt-2 text-lg font-medium">Stack</h2>
          <p className="text-[#858585] my-4">Tools and technologies that i work on</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
              <img className="w-[40px]" src={jsImg} alt="js icon" />
              <div className="ml-2">
                <h3 className="font-normal">JavaScript</h3>
                <p className="text-[#858585] font-extralight">
                  programming Language
                </p>
              </div>
            </div>
            <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
              <img className="w-[40px]" src={reactImg} alt="react icon" />
              <div className="ml-2">
                <h3 className="font-normal">React.js</h3>
                <p className="text-[#858585] font-extralight">
                  a Front-End library
                </p>
              </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px]" src={nextImg} alt="next icon" />
                <div className="ml-2">
                  <h3 className="font-normal">Next.js</h3>
                  <p className="text-[#858585] font-extralight">
                    a react framework
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px]" src={nodeImg} alt="node icon" />
                <div className="ml-2">
                  <h3 className="font-normal">Node.js</h3>
                  <p className="text-[#858585] font-extralight">
                    backend javaScript runtime
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px]" src={tailwindImg} alt="tailwind icon" />
                <div className="ml-2">
                  <h3 className="font-normal">Tailwind</h3>
                  <p className="text-[#858585] font-extralight">
                    a css library
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px]" src={threeImg} alt="threejs icon" />
                <div className="ml-2">
                  <h3 className="font-normal">Three.js</h3>
                  <p className="text-[#858585] font-extralight">
                    a 3d graphics library
                  </p>
                </div>
              </div>
          </div>
          <Link to={"/Stack"} className="btn btn-primary w-full block text-center mt-6">
            See All
          </Link>
        </div>
      </div>
      {/* projects */}
      <div>
        <h2 className="mt-10 mb-4 text-lg font-medium">Projects</h2>
        <div className="flex gap-8">
          <div className="card  bg-[#2c2c2c]">
            <div className="overflow-hidden">
              <img src={project} alt="project" className=" hover:scale-110 transition-all" />
            </div>
            <div className="p-4">
              <h3>Billify</h3>
              <p className="text-[#858585] font-extralight">A digital invoice template for designers</p>
            </div>
          </div>
          <div className="card  bg-[#2c2c2c]">
            <div className="overflow-hidden">
              <img src={project} alt="project" className=" hover:scale-110 transition-all" />
            </div>
            <div className="p-4">
              <h3>Billify</h3>
              <p className="text-[#858585] font-extralight">A digital invoice template for designers</p>
            </div>
          </div>
        </div>
      </div>
      {/* experience */}
      <div>
        <h2 className="mt-10  text-lg font-medium">Experiences</h2>
        <div className="card mt-6 p-6 bg-[#1c1c1c]">
          <h3 className="text-[16px] mb-4 font-medium">Frontend Developer Lead - Zemuria.inc <span className="plinks">2023-2024</span></h3>
          <ul className="p1 list-outside p-4 my-0">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio vitae tempore consectetur aut tempora. Perspiciatis fugiat deserunt fugit soluta, nobis iste, fuga sed eos ab numquam laudantium. Non, inventore.</li>
            <li>Asperiores modi, alias inventore cum molestiae doloribus accusamus ad recusandae autem fuga. Dignissimos magni, perspiciatis, soluta excepturi et enim obcaecati tempore corrupti dolor eius dolorem, maiores aliquam reprehenderit itaque placeat?</li>
            <li>Eum voluptate laboriosam quasi qui ad quas voluptas, praesentium voluptatem, reiciendis sed a amet, sit iusto in minus magnam fugit quis libero commodi ipsum sequi temporibus. Veniam rem alias quaerat?</li>
            <li>Quis cumque ratione enim dolores maxime quibusdam vitae quas corporis maiores aut eos dignissimos nihil quae aliquam rem blanditiis alias quaerat, natus, libero, itaque temporibus? Nisi consequatur iure ea et?</li>
          </ul>
        </div>
        <div className="card mt-6 mb-12 p-6 bg-[#1c1c1c]">
          <h3 className="text-[16px] mb-4 font-medium">Frontend Developer - Zemuria.inc <span className="plinks">2022-2023</span></h3>
          <ul className="p1 list-outside p-4 my-0">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio vitae tempore consectetur aut tempora. Perspiciatis fugiat deserunt fugit soluta, nobis iste, fuga sed eos ab numquam laudantium. Non, inventore.</li>
            <li>Asperiores modi, alias inventore cum molestiae doloribus accusamus ad recusandae autem fuga. Dignissimos magni, perspiciatis, soluta excepturi et enim obcaecati tempore corrupti dolor eius dolorem, maiores aliquam reprehenderit itaque placeat?</li>
            <li>Eum voluptate laboriosam quasi qui ad quas voluptas, praesentium voluptatem, reiciendis sed a amet, sit iusto in minus magnam fugit quis libero commodi ipsum sequi temporibus. Veniam rem alias quaerat?</li>
            <li>Quis cumque ratione enim dolores maxime quibusdam vitae quas corporis maiores aut eos dignissimos nihil quae aliquam rem blanditiis alias quaerat, natus, libero, itaque temporibus? Nisi consequatur iure ea et?</li>
          </ul>
        </div>
      </div>
    </>
   
  )
}

export default Explore
