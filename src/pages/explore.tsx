import { Link } from "react-router-dom"
import Blinker from "@/components/blinker"
import reactImg from "../assets/react.svg"
import nodeImg from "../assets/node.svg"
import nextImg from "../assets/nextjs.svg"
import jsImg from "../assets/js.svg"
import tailwindImg from "../assets/tailwind.svg"
import threeImg from "../assets/three.svg"
import github from "../assets/git.svg"
import Copy from "@/components/copy"
import apple from "/images/project3.webp"
import vibe from "/images/project1.webp"
import proYT from "/images/project2.webp"

const Explore = () => {
  
  return (
    <>
      <div>
        <h1 className="title ">
          Hey, I'm Sam.js, <br /> I code <Blinker texts={["FrontEnd", "Backend", "Middlewares", "Whatever..."]} />
          with <span className="text-[#bababa]">javaScript</span></h1>
        <p className="p2">
          I'm a Frontend Developer, I can build webapps with good looking user interfaces and awesome functionalities,
          i can also work on backend technologies like nodejs and expressjs
          worked on various products of different domains, take a look on my <Link className="plinks" to={"/projects"}>projects &#8599;</Link> and
          reach out to me.
        </p>
        <div className="flex gap-6">
          <Link className="btn btn-primary" to={"/contact"}>Connect</Link>
          <Copy/>
        </div>
      </div>
      {/* projects */}
      <div>
        <h2 className="mt-10 mb-4 text-xl font-medium">Projects</h2>
        <p className="p2 mb-4">
          These are my projects that deployed to ubuntu server by me, I configured the custom domain, SSL and done subdomain integration with help of Nginx
        </p>
        <div className=" p-4  mt-8">
        <div className="flex flex-col lg:flex-row flex-wrap gap-8 ">
          <Link target="_blank" to={"https://vibe.samjs.me"} className="lg:w-[calc(50%-16px)]">
            <div className="card min-h-[298px]  bg-[#2c2c2c]">
              <div className="overflow-hidden">
                <img src={vibe} alt="project" className=" hover:scale-110 transition-all " />
              </div>
              <div className="px-4 py-5 relative">
                <h3 className="text-base font-semibold mb-2">spotified(vibe)</h3>
                <p className="text-[#bababa] font-extralight">used spotify's web API with react redux & node to build a fully functional music App</p>
                <Link target="_blank" className=" absolute top-3 right-2 hover:scale-110" to={"https://github.com/SamuvelRaja/spotified"}>
                  <img
                  className="w-[26px] h-[26px] "
                  src={github}
                  alt="github icon"
                />
                </Link>
              </div>
            </div>
          </Link>
          <Link target="_blank" to={"https://github.com/SamuvelRaja/proyt"} className="lg:w-[calc(50%-16px)]">
            <div className="card min-h-[298px]  bg-[#2c2c2c]">
              <div className="overflow-hidden">
                <img src={proYT} alt="project" className=" hover:scale-110 transition-all " />
              </div>
              <div className="px-4 py-5 relative">
                <h3 className="text-base font-semibold mb-2">ProYT (chrome extension)</h3>
                <p className="text-[#bababa] font-extralight">An chrome extension that detoxifies YouTube by filtering the feed</p>
                <Link target="_blank" className=" absolute top-3 right-2 hover:scale-110" to={"https://github.com/SamuvelRaja/proyt"}>
                  <img
                  className="w-[26px] h-[26px] "
                  src={github}
                  alt="github icon"
                />
                </Link>
              </div>
            </div>
          </Link>
          <Link target="_blank" to={"https://iphone.samjs.me"} className="lg:w-[calc(50%-16px)]">
            <div className="card min-h-[298px]  bg-[#2c2c2c]">
              <div className="overflow-hidden">
                <img src={apple} alt="project" className=" hover:scale-110 transition-all " />
              </div>
              <div className="px-4 py-5 relative">
                <h3 className="text-base font-semibold mb-2">iphone 3d and animation replica</h3>
                <p className="text-[#bababa] font-extralight">This project is a iphone landing page replica mainly focusing on recreating animations and iphone 3d model</p>
                <Link target="_blank" className=" absolute top-3 right-2 hover:scale-110" to={"https://github.com/SamuvelRaja/passionfruit-appleclone-"}>
                  <img
                  className="w-[26px] h-[26px] "
                  src={github}
                  alt="github icon"
                />
                </Link>
              </div>
            </div>
          </Link>
          
        </div>
        <Link to={"/projects"} className="btn btn-primary hover:underline p-2 mt-4 text-center block">View All</Link>
        </div>
      </div>
      {/* stack section */}
      <div>
        <div className="card p-6 mt-10 ">
          <h2 className="mt-2 text-xl font-medium">Stack</h2>
          <p className="text-[#bababa] my-4">Tools and technologies that i work on</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
              <img className="w-[40px]" src={jsImg} alt="js icon" />
              <div className="ml-2">
                <h3 className="font-normal">JavaScript</h3>
                <p className="text-[#bababa] font-extralight">
                  programming Language
                </p>
              </div>
            </div>
            <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
              <img className="w-[40px]" src={reactImg} alt="react icon" />
              <div className="ml-2">
                <h3 className="font-normal">React.js</h3>
                <p className="text-[#bababa] font-extralight">
                  a Front-End library
                </p>
              </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px]" src={nextImg} alt="next icon" />
                <div className="ml-2">
                  <h3 className="font-normal">Next.js</h3>
                  <p className="text-[#bababa] font-extralight">
                    a react framework
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px]" src={nodeImg} alt="node icon" />
                <div className="ml-2">
                  <h3 className="font-normal">Node.js</h3>
                  <p className="text-[#bababa] font-extralight">
                    backend javaScript runtime
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px]" src={tailwindImg} alt="tailwind icon" />
                <div className="ml-2">
                  <h3 className="font-normal">Tailwind</h3>
                  <p className="text-[#bababa] font-extralight">
                    a css library
                  </p>
                </div>
              </div>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent rounded-sm hover:bg-[#2c2c2c]">
                <img className="w-[40px]" src={threeImg} alt="threejs icon" />
                <div className="ml-2">
                  <h3 className="font-normal">Three.js</h3>
                  <p className="text-[#bababa] font-extralight">
                    a 3d graphics library
                  </p>
                </div>
              </div>
          </div>
          <Link to={"/stack"} className="btn btn-primary w-full block text-center mt-6">
            See All
          </Link>
        </div>
      </div>
      
      {/* experience */}
      <div className="exp pb-16">
        <h2 className="mt-10  text-xl font-medium">Experiences</h2>
         <div className="bg1card ">
          <h3 className="text-[16px] mb-4 font-medium">Fullstack Engineer - GJH INC, San Francisco <span className="plinks">Jun 2024 - present</span></h3>
          <ul className="p1 list-outside p-4 my-0">
            <li><strong>Enterprise Contract Management Platform:</strong> Developed comprehensive internal consulting platform using Next.js and Supabase, featuring multi-tier user roles (Super Admin/User), partner onboarding workflows, lifecycle management.</li>
            <li>Developed and optimized web scraping infrastructure using Node.js and Puppeteer, automated deployment pipeline workflows with GitHub Actions resulting in 10x efficiency gains over legacy systems.</li>
            <li><strong>Payment Infrastructure:</strong> Implemented secure Stripe payment processing with webhook architecture and robust server-side event handling for transaction management.</li>
            <li><strong>Marketing Automation System:</strong> Engineered email marketing platform using Resend and Brevo APIs with CI/CD automation via GitHub Actions; implemented email deliverability best practices resulting in 5x improvement in lead generation and conversion rates.</li>
          </ul>
        </div>
        
        <div className="bg1card ">
          <h3 className="text-[16px] mb-4 font-medium">Frontend Developer Lead - Zemuria.inc <span className="plinks">2023-2024</span></h3>
          <ul className="p1 list-outside p-4 my-0">
            <li>Led and mentored a team of 6 front-end developers, fostering a collaborative and high-performing environment.</li>
            <li>Collaborated with the backend teams on the implementation of robust security measures, including JWT authentication and secure session handling.</li>
            <li><strong>Internal Blog Engine:</strong> Developed a feature-rich blog engine with a modern text editor and implemented a polling mechanism and debouncing on the editor.</li>
            <li><strong>Next.js E-commerce Platform Re-architecture:</strong> implementing a scalable multi-tenant architecture and handled server-side logic such as middleware, API design and architecture, route handlers and managing JWT session single-handedly.</li>
            <li><strong>Implemented Google SSO:</strong> Successfully integrated Google Single Sign-On (SSO) into a Next.js application, significantly streamlining user authentication and enhancing security.</li>
          </ul>
        </div>
        <div className="bg1card">
          <h3 className="text-[16px] mb-4 font-medium">Frontend Developer - Zemuria.inc <span className="plinks">2022-2023</span></h3>
          <ul className="p1 list-outside p-4 my-0">
            <li>Successfully trained and upskilled 4 junior developers, empowering them to become proficient contributors.</li>
            <li><strong>E-commerce Performance Optimization:</strong> Spearheaded a complete redesign and codebase migration, resulting in a 5x improvement in loading speed and enhanced user experience.</li>
            <li><strong>High-Performance E-commerce Theme Development:</strong> Built a new theme from scratch, achieving exceptional PageSpeed scores and contributing to increased organic sales for clients.</li>
          </ul>
        </div>
      </div>
    </>
   
  )
}

export default Explore
