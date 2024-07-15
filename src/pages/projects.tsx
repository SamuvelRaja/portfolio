
import project from "../assets/project.avif"

const Projects = () => {
  return (
    <div>
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
    </div>
  )
}

export default Projects
