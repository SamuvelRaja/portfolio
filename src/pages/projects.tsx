
import { Link } from "react-router-dom"
import apple from "/public/images/apple.webp"
import earth from "/public/images/earth.webp"
import github from "../assets/git.svg"

const Projects = () => {
  return (
    <div>
        <div>
        <h2 className="title">Projects</h2>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <Link target="_blank" to={"https://iphone.samjs.me"}>
            <div className="card min-h-[298px] bg-[#2c2c2c]">
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
            <div className="card min-h-[298px] bg-[#2c2c2c]">
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
      </div>
    </div>
  )
}

export default Projects
