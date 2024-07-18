
import { Link } from "react-router-dom"
import apple from "/images/apple.webp"
import earth from "/images/earth.webp"
import baker from "/images/baker.webp"
import github from "../assets/git.svg"

const Projects = () => {
  return (
    <div className="pb-16">
        <div>
        <h2 className="title">Projects</h2>
        <h3 className="p-2 mt-8 mb-4">Personal projects</h3>
        <div className="flex flex-col md:flex-row gap-8 ">
          <Link target="_blank" to={"https://iphone.samjs.me"}>
            <div className="card min-h-[200px] md:min-h-[298px] bg-[#2c2c2c]">
              <div className="overflow-hidden">
                <img src={apple} alt="project" className=" hover:scale-110 transition-all" />
              </div>
              <div className="p-4 relative">
                <h3>iphone 3d and animation replica</h3>
                <p className="text-[#858585] font-extralight">This project is a iphone landing page replica mainly focusing on recreating animations and iphone 3d model</p>
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
          <Link target="_blank" to={"https://threescenes.samjs.me"}>
            <div className="card min-h-[200px] md:min-h-[298px] bg-[#2c2c2c] ">
              <div className="overflow-hidden">
                <img src={earth} alt="project" className=" hover:scale-110 transition-all" />
              </div>
              <div className="p-4 relative">
                <h3>Three scenes</h3>
                <p className="text-[#858585] font-extralight">here i implemented 3 threejs 3d scenes</p>
                <Link target="_blank" className=" absolute top-3 right-2 hover:scale-110" to={"https://github.com/SamuvelRaja/threescenes"}>
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
        <h3 className="p-2 mt-8 mb-4">Freelance projects</h3>
        <div className="flex flex-col  md:flex-row gap-8  pb-4">
          <Link target="_blank" to={"https://abakersconfession.co.uk/"}>
            <div className="card min-h-[200px] md:min-h-[298px] bg-[#2c2c2c] max-w-[414px] mx-auto mb-8">
              <div className="overflow-hidden">
                <img src={baker} alt="project" className=" hover:scale-110 transition-all" />
              </div>
              <div className="p-4 relative">
                <h3>Baker's Portfolio </h3>
                <p className="text-[#858585] font-extralight">This is the portfolio website of my client from UK</p>
                <Link target="_blank" className=" absolute top-3 right-2 hover:scale-110" to={"https://github.com/SamuvelRaja/threescenes"}>
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
      </div>
    </div>
  )
}

export default Projects
