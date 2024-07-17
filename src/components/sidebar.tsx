import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { useEffect } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    function pushto(e: KeyboardEvent) {
      if (e.ctrlKey) {
        switch (e.key) {
          case "1":
            navigate("/");
            break;
          case "2":
            navigate("/projects");
            break;
          case "3":
            navigate("/stack");
            break;
          case "4":
            navigate("/services");
            break;
          case "5":
            navigate("/aboutme");
            break;
          case "6":
            navigate("/resources");
            break;
          case "7":
            navigate("/blogs");
            break;
          case "8":
            navigate("/contact");
            break;
          default:
            break;
        }
      }
    }
    document.addEventListener("keydown", (e: KeyboardEvent) => pushto(e));
    return () => {
      document.removeEventListener("keydown", (e: KeyboardEvent) => pushto(e));
    };
  }, []);
  return (
    <nav className=" w-full overflow-x-scroll float-left md:flex-col flex bg-[#1c1c1c] md:p-4 md:w-[240px] lg:h-screen fixed bottom-0 md:top-0 border-r-[#252525] border-r-[1px]">
      <div className="flex items-center profile gap-2  md:mt-2 fixed top-0 left-0 bg-[#1c1c1c] w-full  p-3 md:relative md:bg-inherit ">
        <img
          className="rounded-full w-[40px] h-[40px]"
          src="/public/images/sam-profile.jpeg"
          alt="samjs picture"
          title="samjs picture"
        />
        <div>
          <h2 className="text-[#fff] font-semibold text-sm mt-1">Samuvel Raja</h2>
          <p className=" font-extralight text-sm text-[#858585]">
            FrontEnd Developer
          </p>
        </div>
      </div>
      <div className="nav-1 whitespace-nowrap py-2  gap-2 md:gap-0  md:mt-8 flex md:flex-col">
        <Link to="/">
          <div
            className={`navlinks ml-2 md:ml-0 ${
              location.pathname == "/" ? "active" : "npg"
            }  `}
          >
            <div className="flex-col flex md:flex-row items-center ">
              <img
                className="w-[24px] h-[24px]"
                src={exploreIcon}
                alt="explore icon"
              />
              <p>Explore</p>
            </div>
            <span className="px-1 rounded-sm border border-[#252525] hidden md:block" title="ctrl+1 to navigate">1</span>
          </div>
        </Link>
        <Link to="/projects">
          <div
            className={`navlinks ${
              location.pathname == "/projects" ? "active" : "npg"
            }   `}
          >
            <div className="flex-col flex md:flex-row items-center">
              <img
                className="w-[24px] h-[24px]"
                src={projectsIcon}
                alt="projects icon"
              />
              <p>Projects</p>
            </div>
            <span className="px-1 rounded-sm border border-[#252525] hidden md:block" title="ctrl+2 to navigate">2</span>
          </div>
        </Link>
        <Link to="/stack">
          <div
            className={`navlinks ${
              location.pathname == "/stack" ? "active" : "npg"
            }   `}
          >
            <div className="flex-col flex md:flex-row items-center">
              <img
                className="w-[24px] h-[24px]"
                src={stackIcon}
                alt="stack icon"
              />
              <p>Stack</p>
            </div>
            <span className="px-1 rounded-sm border border-[#252525] hidden md:block" title="ctrl+3 to navigate">3</span>
          </div>
        </Link>
        <Link to="/services">
          <div
            className={`navlinks ${
              location.pathname == "/services" ? "active" : "npg"
            }   `}
          >
            <div className="flex-col flex md:flex-row items-center">
              <img
                className="w-[24px] h-[24px]"
                src={servicesIcon}
                alt="services icon"
              />
              <p>Services</p>
            </div>
            <span className="px-1 rounded-sm border border-[#252525] hidden md:block" title="ctrl+4 to navigate">4</span>
          </div>
        </Link>
        <Link to="/aboutme">
          <div
            className={`navlinks ${
              location.pathname == "/aboutme" ? "active" : "npg"
            }   `}
          >
            <div className="flex-col flex md:flex-row items-center">
              <img
                className="w-[24px] h-[24px]"
                src={aboutIcon}
                alt="about icon"
              />
              <p>About me</p>
            </div>
            <span className="px-1 rounded-sm border border-[#252525] hidden md:block" title="ctrl+5 to navigate">5</span>
          </div>
        </Link>
      </div>
      <div className="nav-1 whitespace-nowrap py-2  gap-2 md:gap-0 md:mt-4 flex md:flex-col">
        <p className="font-light text-[12px] p-3 text-[#858585] hidden md:block">Goodreads</p>
        <Link to="/resources">
          <div
            className={`navlinks ${
              location.pathname == "/resources" ? "active" : "npg"
            }   `}
          >
            <div className="flex-col flex md:flex-row items-center">
              <img
                className="w-[24px] h-[24px]"
                src={thoughtIcon}
                alt="resources icon"
              />
              <p>Resources</p>
            </div>
            <span className="px-1 rounded-sm border border-[#252525] hidden md:block" title="ctrl+6 to navigate">6</span>
          </div>
        </Link>
        <Link to="/blogs">
          <div
            className={`navlinks  ${
              location.pathname == "/blogs" ? "active" : "npg"
            }  `}
          >
            <div className="flex-col flex md:flex-row items-center">
              <img
                className="w-[24px] h-[24px]"
                src={feedIcon}
                alt="blog icon"
              />
              <p>Blogs</p>
            </div>
            <span className="px-1 rounded-sm border border-[#252525] hidden md:block" title="ctrl+7 to navigate">7</span>
          </div>
        </Link>
      </div>
      <div className="nav-1 whitespace-nowrap py-2  gap-2 md:gap-0 md:mt-4 flex md:flex-col">
        <p className="font-light text-[12px] p-3 text-[#858585] hidden md:block">connect</p>
        <Link to="/contact">
          <div
            className={`navlinks  ${
              location.pathname == "/contact" ? "active" : "npg"
            }  `}
          >
            <div className="flex-col flex md:flex-row items-center">
              <img
                className="w-[24px] h-[24px]"
                src={contactIcon}
                alt="contact icon"
              />
              <p>Contact</p>
            </div>
            <span className="px-1 rounded-sm border border-[#252525] hidden md:block" title="ctrl+8 to navigate">8</span>
          </div>
        </Link>
        <Link target="_blank" to="https://github.com/SamuvelRaja">
          <div className={`navlinks npg `}>
            <div className="flex-col flex md:flex-row items-center">
              <img
                className="w-[26px] h-[26px] "
                src={githubIcon}
                alt="github icon"
              />
              <p>Github</p>
            </div>
            <span className="px-1 rounded-sm border border-[#252525] hidden md:block">
              &#8599;
            </span>
          </div>
        </Link>
        <Link target="_blank" to="https://www.linkedin.com/in/samuvel-raja-10321a220/">
          <div className={`navlinks npg `}>
            <div className="flex-col flex md:flex-row items-center">
              <img
                className="w-[24px] h-[24px] "
                src={linkedinIcon}
                alt="linkedin icon"
              />
              <p>Linkedin</p>
            </div>
            <span className="px-1 rounded-sm border border-[#252525] hidden md:block">
              &#8599;
            </span>
          </div>
        </Link>
        <Link target="_blank" to="https://x.com/the_sam_js">
          <div className={`navlinks npg `}>
            <div className="flex-col flex md:flex-row items-center">
              <img className="w-[20px] h-[20px] mb-1" src={xIcon} alt="x icon" />
              <p>Twitter</p>
            </div>
            <span className="px-1 rounded-sm border border-[#252525] hidden md:block">
              &#8599;
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
