
import { Link } from "react-router-dom"
import apple from "/images/project3.webp"
import vibe from "/images/project1.webp"
import earth from "/images/project4.webp"
import baker from "/images/baker.webp"
import proYT from "/images/project2.webp"
import gt    from "/images/gtaudio.webp"
import github from "../assets/git.svg"

const Projects = () => {
  return (
    <div className="pb-16">
        <div>
        <h2 className="title">Projects</h2>
        <h3 className="p-2 mt-8 mb-4 text-lg font-semibold">Personal projects</h3>
        <div className="grid lg:grid-cols-2 flex-wrap gap-8 mb-8">
          <Link target="_blank" to={"https://vibe.samjs.me"} >
            <div className="card min-h-[298px]  bg-[#2c2c2c]">
              <div className="overflow-hidden">
                <img src={vibe} alt="project" className=" hover:scale-110 transition-all " />
              </div>
              <div className="p-4 relative">
                <h3>spotified(vibe)</h3>
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
          <Link target="_blank" to={"https://github.com/SamuvelRaja/proyt"} >
            <div className="card min-h-[298px]   bg-[#2c2c2c]">
              <div className="overflow-hidden">
                <img src={proYT} alt="project" className=" hover:scale-110 transition-all " />
              </div>
              <div className="p-4 relative">
                <h3>ProYT (chrome extension)</h3>
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
          <Link target="_blank" to={"https://iphone.samjs.me"}>
            <div className="card min-h-[200px] md:min-h-[298px] bg-[#2c2c2c]">
              <div className="overflow-hidden">
                <img src={apple} alt="project" className=" hover:scale-110 transition-all" />
              </div>
              <div className="p-4 relative">
                <h3>iphone 3d and animation replica</h3>
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
          <Link target="_blank" to={"https://threescenes.samjs.me"}>
            <div className="card min-h-[200px] md:min-h-[298px] bg-[#2c2c2c] ">
              <div className="overflow-hidden">
                <img src={earth} alt="project" className=" hover:scale-110 transition-all" />
              </div>
              <div className="p-4 relative">
                <h3>Three scenes</h3>
                <p className="text-[#bababa] font-extralight">here i implemented 3 interactive 3d designs with threejs 3d scenes</p>
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
        <h3 className="p-2 mt-8 mb-4 text-lg font-semibold">Freelance projects</h3>
        <div className="flex flex-col  md:flex-row gap-8  pb-4">
          <Link target="_blank" to={"https://abakersconfession.co.uk/"}>
            <div className="card min-h-[200px] md:min-h-[298px] bg-[#2c2c2c] max-w-[414px] mx-auto mb-8">
              <div className="overflow-hidden">
                <img src={baker} alt="project" className="scale-[1.02] hover:scale-110 transition-all" />
              </div>
              <div className="p-4 relative">
                <h3>Baker's Portfolio </h3>
                <p className="text-[#bababa] font-extralight">This is the portfolio website of my client from UK</p>
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
           <Link target="_blank" to={"https://gtaudioevents.in/"}>
            <div className="card min-h-[200px] md:min-h-[298px] bg-[#2c2c2c] max-w-[414px] mx-auto mb-8">
              <div className="overflow-hidden">
                <img src={gt} alt="project" className=" hover:scale-110 transition-all" />
              </div>
              <div className="p-4 relative">
                <h3>GT Portfolio </h3>
                <p className="text-[#bababa] font-extralight">This is the portfolio website of a event host</p>
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
