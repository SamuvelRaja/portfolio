import { Link, useLocation } from "react-router-dom";
import exploreIcon from "/src/assets/explore.svg";
import projectsIcon from "/src/assets/projects.svg";
import stackIcon from "/src/assets/stacks.svg";
import servicesIcon from "/src/assets/services.svg";
import aboutIcon from "/src/assets/about.svg";
import feedIcon from "/src/assets/feed.svg";
import thoughtIcon from "/src/assets/thought.svg";
import contactIcon from "/src/assets/contact.svg";
import githubIcon from "/src/assets/git.svg";
import linkedinIcon from "/src/assets/linkedin.svg";
import xIcon from "/src/assets/x.svg";

const Sidebar = () => {
    const location=useLocation()
    console.log(location,"")
    return (
        <nav className='p-4 float-left flex-col flex bg-[#1c1c1c] lg:w-[240px] lg:h-screen fixed top-0 border-r-[#252525] border-r-[1px]'>
            <div className="flex profile gap-2 ml-2 mt-2">
                <img  className="rounded-full w-[40px] h-[40px]" src="/public/images/sam-profile.jpeg" alt="samjs picture" title='samjs picture' />
                <div>
                    <h2 className='text-[#fff] font-semibold text-sm '>Samuvel Raja</h2>
                    <p className=' font-extralight text-sm text-[#858585]'>FrontEnd Developer</p>
                </div>
            </div>
            <div className="nav-1 mt-8 flex-col">
                <Link to="/">
                    <div className={`navlinks  ${location.pathname=="/"?'active':'npg'}  `}>
                        <div className="flex gap-2 items-center">
                            <img className="w-[24px] h-[24px]" src={exploreIcon} alt="explore icon" />
                            <p>Explore</p>
                        </div>
                        <span className="px-1 rounded-sm border border-[#252525]">1</span>
                    </div>
                </Link>
                <Link to="/projects">
                    <div className={`navlinks ${location.pathname=="/projects"?'active':'npg'}   `}>
                        <div className="flex gap-2 items-center">
                            <img className="w-[24px] h-[24px]" src={projectsIcon} alt="projects icon" />
                            <p>Projects</p>
                        </div>
                        <span className="px-1 rounded-sm border border-[#252525]">2</span>
                    </div>
                </Link>
                <Link to="/stack">
                    <div className={`navlinks ${location.pathname=="/stack"?'active':'npg'}   `}>
                        <div className="flex gap-2 items-center">
                            <img className="w-[24px] h-[24px]" src={stackIcon} alt="stack icon" />
                            <p>Stack</p>
                        </div>
                        <span className="px-1 rounded-sm border border-[#252525]">3</span>
                    </div>
                </Link>
                <Link to="/services">
                    <div className={`navlinks ${location.pathname=="/services"?'active':'npg'}   `}>
                        <div className="flex gap-2 items-center">
                            <img className="w-[24px] h-[24px]" src={servicesIcon} alt="services icon" />
                            <p>Services</p>
                        </div>
                        <span className="px-1 rounded-sm border border-[#252525]">4</span>
                    </div>
                </Link>
                <Link to="/aboutme">
                    <div className={`navlinks ${location.pathname=="/aboutme"?'active':'npg'}   `}>
                        <div className="flex gap-2 items-center">
                            <img className="w-[24px] h-[24px]" src={aboutIcon} alt="about icon" />
                            <p>About me</p>
                        </div>
                        <span className="px-1 rounded-sm border border-[#252525]">5</span>
                    </div>
                </Link>
            </div>
            <div className="nav-1 mt-4 flex-col">
                <p  className="font-light text-[12px] p-3 text-[#858585]">Goodreads</p>
                <Link to="/blogs">
                    <div className={`navlinks  ${location.pathname=="/blogs"?'active':'npg'}  `}>
                        <div className="flex gap-2 items-center">
                            <img className="w-[24px] h-[24px]" src={feedIcon} alt="blog icon" />
                            <p>Blogs</p>
                        </div>
                        <span className="px-1 rounded-sm border border-[#252525]">6</span>
                    </div>
                </Link>
                <Link to="/resources">
                    <div className={`navlinks ${location.pathname=="/resources"?'active':'npg'}   `}>
                        <div className="flex gap-2 items-center">
                            <img className="w-[24px] h-[24px]" src={thoughtIcon} alt="resources icon" />
                            <p>Resources</p>
                        </div>
                        <span className="px-1 rounded-sm border border-[#252525]">7</span>
                    </div>
                </Link>
            </div>
            <div className="nav-1 mt-4 flex-col">
                <p className="font-light text-[12px] p-3 text-[#858585]">connect</p>
                <Link to="/contact">
                    <div className={`navlinks  ${location.pathname=="/contact"?'active':'npg'}  `}>
                        <div className="flex gap-2 items-center">
                            <img className="w-[24px] h-[24px]" src={contactIcon} alt="contact icon" />
                            <p>Contact</p>
                        </div>
                        <span className="px-1 rounded-sm border border-[#252525]">8</span>
                    </div>
                </Link>
                <Link to="https://github.com/SamuvelRaja">
                    <div className={`navlinks npg `}>
                        <div className="flex gap-2 items-center">
                            <img className="w-[24px] h-[24px]" src={githubIcon} alt="github icon" />
                            <p>Github</p>
                        </div>
                        <span className="px-1 rounded-sm border border-[#252525]">
                            &#8599;
                        </span>
                    </div>
                </Link>
                <Link to="https://www.linkedin.com/in/samuvel-raja-10321a220/">
                    <div className={`navlinks npg `}>
                        <div className="flex gap-2 items-center">
                            <img className="w-[24px] h-[24px]" src={linkedinIcon} alt="linkedin icon" />
                            <p>Linkedin</p>
                        </div>
                        <span className="px-1 rounded-sm border border-[#252525]">
                            &#8599;
                        </span>
                    </div>
                </Link>
                <Link to="https://x.com/the_sam_js">
                    <div className={`navlinks npg `}>
                        <div className="flex gap-2 items-center">
                            <img className="w-[20px] h-[20px]" src={xIcon} alt="x icon" />
                            <p>Twitter</p>
                        </div>
                        <span className="px-1 rounded-sm border border-[#252525]">
                            &#8599;
                        </span>
                    </div>
                </Link>
                
            </div>
        </nav>
    )
}

export default Sidebar
