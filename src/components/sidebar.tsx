import { Link, useLocation } from "react-router-dom"


const Sidebar = () => {
    const location=useLocation()
    console.log(location,"")
    return (
        <nav className='p-4 float-left flex-col flex bg-[#1c1c1c] lg:w-[240px] lg:h-screen sticky border-r-[#252525] border-r-[1px]'>
            <div className="flex profile gap-2 ml-2">
                <img  className="rounded-full w-[40px] h-[40px]" src="/public/images/sam-profile.jpeg" alt="samjs picture" title='samjs picture' />
                <div>
                    <h2 className='text-[#fff] font-semibold text-sm '>Samuvel Raja</h2>
                    <p className=' font-extralight text-sm text-[#858585]'>FrontEnd Developer</p>
                </div>
            </div>
            <div className="nav-1 mt-4 flex-col">
                <Link to="/">
                    <div className={`navlinks  ${location.pathname=="/"?'active':'npg'}  `}>
                        <div className="flex gap-2 items-center">
                            <img className="w-[24px] h-[24px]" src="/src/assets/explore.svg" alt="explore icon" />
                            <p>Explore</p>
                        </div>
                        <span className="px-1 rounded-sm border border-[#252525]">1</span>
                    </div>
                </Link>
                <Link to="/projects">
                    <div className={`navlinks ${location.pathname=="/projects"?'active':'npg'}   `}>
                        <div className="flex gap-2 items-center">
                            <img className="w-[24px] h-[24px]" src="/src/assets/projects.svg" alt="projects icon" />
                            <p>Projects</p>
                        </div>
                        <span className="px-1 rounded-sm border border-[#252525]">1</span>
                    </div>
                </Link>
                <Link to="/services">
                    <div className={`navlinks ${location.pathname=="/services"?'active':'npg'}   `}>
                        <div className="flex gap-2 items-center">
                            <img className="w-[24px] h-[24px]" src="/src/assets/services.svg" alt="services icon" />
                            <p>Services</p>
                        </div>
                        <span className="px-1 rounded-sm border border-[#252525]">1</span>
                    </div>
                </Link>
                <Link to="/about">
                    <div className={`navlinks ${location.pathname=="/about"?'active':'npg'}   `}>
                        <div className="flex gap-2 items-center">
                            <img className="w-[24px] h-[24px]" src="/src/assets/about.svg" alt="about icon" />
                            <p>About</p>
                        </div>
                        <span className="px-1 rounded-sm border border-[#252525]">1</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Sidebar