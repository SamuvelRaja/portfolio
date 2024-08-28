
import reactImg from "../assets/react.svg"
import nodeImg from "../assets/node.svg"
import nextImg from "../assets/nextjs.svg"
import jsImg from "../assets/js.svg"
import tailwindImg from "../assets/tailwind.svg"
import threeImg from "../assets/three.svg"
import bootstrap from "../assets/bootstrap.svg"
import brave from "../assets/brave.svg"
import chatgpt from "../assets/chatgpt.svg"
import copilot from "../assets/copilot.svg"
import express from "../assets/express.svg"
import firefox from "../assets/firefox.svg"
import gemini  from "../assets/gemini.svg"
import gsap from "../assets/gsap.png"
import jwt from "../assets/jwt1.svg"
import linux from "../assets/linux.svg"
import nginx from "../assets/nginx.svg"
import postman from "../assets/postman.svg"
import r3f from "../assets/r3f.png"
import recoil from "../assets/recoil.svg"
import redis from "../assets/redis.svg"
import reduximg from "../assets/redux.svg"
import ts from "../assets/ts.svg"
import vscode from "../assets/vscode.svg"
import cssimg from "../assets/css.svg"
import zod from "../assets/zod.svg"

const Stacks = () => {
  return (
    <div className="pb-16">
      <h1 className="title">Stack</h1>
        <p className="p2 mt-1">Tools and technologies that i work on</p>
        <div className="card p-6 mt-10 ">
          <h2 className="mb-2 text-lg font-medium">Frontend</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
              <img className="w-[40px] h-[40px]" src={jsImg} alt="js icon" />
              <div className="ml-2">
                <h3 className="font-normal">JavaScript</h3>
                <p className="text-[#bababa] font-extralight">
                  programming Language
                </p>
              </div>
            </div>
            <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
              <img className="w-[40px] h-[40px]" src={reactImg} alt="react icon" />
              <div className="ml-2">
                <h3 className="font-normal">React.js</h3>
                <p className="text-[#bababa] font-extralight">
                  a Front-End library
                </p>
              </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px] h-[40px]" src={nextImg} alt="next icon" />
                <div className="ml-2">
                  <h3 className="font-normal">Next.js</h3>
                  <p className="text-[#bababa] font-extralight">
                    a react framework
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px] h-[40px]" src={cssimg} alt="css icon" />
                <div className="ml-2">
                  <h3 className="font-normal">CSS</h3>
                  <p className="text-[#bababa] font-extralight">
                    vanila css 
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px]" src={bootstrap} alt="bootstrap icon" />
                <div className="ml-2">
                  <h3 className="font-normal">bootstrap</h3>
                  <p className="text-[#bababa] font-extralight">
                    a css framework
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px] h-[40px]" src={tailwindImg} alt="tailwind icon" />
                <div className="ml-2">
                  <h3 className="font-normal">Tailwind</h3>
                  <p className="text-[#bababa] font-extralight">
                    a css library
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px] h-[40px]" src={ts} alt="ts icon" />
                <div className="ml-2">
                  <h3 className="font-normal">Typescript</h3>
                  <p className="text-[#bababa] font-extralight">
                    programming language
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px] h-[40px]" src={threeImg} alt="threejs icon" />
                <div className="ml-2">
                  <h3 className="font-normal">Three.js</h3>
                  <p className="text-[#bababa] font-extralight">
                    a 3d graphics library
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px] h-[40px]" src={r3f} alt="r3f icon" />
                <div className="ml-2">
                  <h3 className="font-normal">React three fiber</h3>
                  <p className="text-[#bababa] font-extralight">
                    a three js library for react
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px] h-[40px]" src={gsap} alt="gsap icon" />
                <div className="ml-2">
                  <h3 className="font-normal">gsap</h3>
                  <p className="text-[#bababa] font-extralight">
                    an animation library 
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px] h-[40px]" src={recoil} alt="recoil icon" />
                <div className="ml-2">
                  <h3 className="font-normal">recoil</h3>
                  <p className="text-[#bababa] font-extralight">
                    a state management library for react
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px] h-[40px]" src={reduximg} alt="redux icon" />
                <div className="ml-2">
                  <h3 className="font-normal">redux</h3>
                  <p className="text-[#bababa] font-extralight">
                    a state management library for react
                  </p>
                </div>
              </div>
          </div>
        </div>
        {/* backend */}
        <div className="card p-6 mt-10 ">
          <h2 className="mb-2 text-lg font-medium">Backend</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
              <img className="w-[40px] h-[40px]" src={nodeImg} alt="nodejs icon" />
              <div className="ml-2">
                <h3 className="font-normal">Node</h3>
                <p className="text-[#bababa] font-extralight">
                  a javaScript runtime
                </p>
              </div>
            </div>
            <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
              <img className="w-[40px] h-[40px]" src={express} alt="express icon" />
              <div className="ml-2">
                <h3 className="font-normal">express</h3>
                <p className="text-[#bababa] font-extralight">
                  a framework for nodejs
                </p>
              </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px] h-[40px]" src={nginx} alt="nginx icon" />
                <div className="ml-2">
                  <h3 className="font-normal">nginx</h3>
                  <p className="text-[#bababa] font-extralight">
                    a web server
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px] h-[40px]" src={linux} alt="linux icon" />
                <div className="ml-2">
                  <h3 className="font-normal">linux</h3>
                  <p className="text-[#bababa] font-extralight">
                    operating system that runs 96% of server
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px] h-[40px]" src={redis} alt="redis icon" />
                <div className="ml-2">
                  <h3 className="font-normal">Redis</h3>
                  <p className="text-[#bababa] font-extralight">
                    in memory DB that used as caching solution
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px] h-[40px]" src={jwt} alt="jwt icon" />
                <div className="ml-2">
                  <h3 className="font-normal">JWT</h3>
                  <p className="text-[#bababa] font-extralight">
                    JSON web token
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px] h-[40px]" src={zod} alt="zod icon" />
                <div className="ml-2">
                  <h3 className="font-normal">Zod</h3>
                  <p className="text-[#bababa] font-extralight">
                    a validation library
                  </p>
                </div>
              </div>
          </div>
        </div>
          {/* soft tools  */}
        <div className="card p-6 mt-10 ">
          <h2 className="mb-2 text-lg font-medium">Softwares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
              <img className="w-[40px] h-[40px]" src={vscode} alt="vscode icon" />
              <div className="ml-2">
                <h3 className="font-normal">vscode</h3>
                <p className="text-[#bababa] font-extralight">
                  code editor
                </p>
              </div>
            </div>
            <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
              <img className="w-[40px] h-[40px]" src={brave} alt="brave icon" />
              <div className="ml-2">
                <h3 className="font-normal">brave browser</h3>
                <p className="text-[#bababa] font-extralight">
                  chromium based browser with powerfull adblocker
                </p>
              </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px] h-[40px]" src={firefox} alt="firefox icon" />
                <div className="ml-2">
                  <h3 className="font-normal">Firefox</h3>
                  <p className="text-[#bababa] font-extralight">
                    a browser with good devtools
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px] h-[40px]" src={postman} alt="postman icon" />
                <div className="ml-2">
                  <h3 className="font-normal">postman</h3>
                  <p className="text-[#bababa] font-extralight">
                    for testing API's
                  </p>
                </div>
              </div>
          </div>
        </div>
        {/* ai tools */}
        <div className="card p-6 my-10 ">
          <h2 className="mb-2 text-lg font-medium">AI Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
              <img className="w-[40px] h-[40px]" src={chatgpt} alt="chatgpt icon" />
              <div className="ml-2">
                <h3 className="font-normal">chatgpt</h3>
                <p className="text-[#bababa] font-extralight">
                  virtual assistant
                </p>
              </div>
            </div>
            <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
              <img className="w-[40px] h-[40px]" src={gemini} alt="gemini icon" />
              <div className="ml-2">
                <h3 className="font-normal">gemini</h3>
                <p className="text-[#bababa] font-extralight">
                  virtual assistant
                </p>
              </div>
            </div>
            <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
              <img className="w-[40px] h-[40px]" src={copilot} alt="copilot icon" />
              <div className="ml-2">
                <h3 className="font-normal">copilot</h3>
                <p className="text-[#bababa] font-extralight">
                  AI coding assistant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
  }

export default Stacks;
