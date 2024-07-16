import { Link } from "react-router-dom"
import reactImg from "../assets/react.svg"
import nodeImg from "../assets/node.svg"
import nextImg from "../assets/nextjs.svg"
import jsImg from "../assets/js.svg"
import tailwindImg from "../assets/tailwind.svg"
import threeImg from "../assets/three.svg"

const Stacks = () => {
  return (
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
  )
}

export default Stacks
