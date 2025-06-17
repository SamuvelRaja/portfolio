import { Link } from "react-router-dom";
import GJH from "../../images/GJH.webp";
import baker from "../../images/baker.webp";
import gt from "../../images/gtaudio.webp";
import alar from "../../images/alar.webp";
import ananth from "../../images/ananth.webp";
import dodo from "../../images/dodo.webp";
import gjhinc from "../../images/gjh-inc.webp";
import rumble from "../../images/rumble.webp";
import "./service.css";

const Services = () => {
  return (
    <div className="pb-16 container max-w-[720px] mx-auto pt-[175px] px-4">
      <h1 className="title text-4xl font-bold text-[#f6f6f6] mb-4">Services</h1>
      <p className="p2 mt-2 text-base text-[#bababa]">
        I craft unique websites, web apps, and engaging landing pages with HTML,
        CSS, JavaScript, React, and Next.js, delivering standout digital
        experiences tailored to your unique business needs.
      </p>
      <Link
        target="_blank"
        to={`mailto:josephsamuvel001@gmail.com
        ?subject=Interested in Your Web Dev Services
        &body=Hi sam.js, I'm [Your Name] from [Your Company/Website]. hope you are available for a quick call to discuss about my project? Let me know your availability.`}
        className="btn btn-primary mt-6 text-base"
      >
        Schedule free call
      </Link>

      <div className="bg1card mt-16 p-6 rounded-lg">
        <h3 className="text-2xl text-[#f6f6f6] mb-4 font-semibold">
          Landing Pages
        </h3>
        <p className="text-[#bababa] font-normal text-base mb-2">
          Building performant, SEO-friendly websites that supplement user
          journey and conversion. Bug-free web applications that satisfy your
          requirements.
        </p>
        <ul className="text-[#bababa] list-disc list-outside pl-6 my-0 mb-4 text-base">
          <li>Unique and tailored custom site to reflect your brand.</li>
          <li>Responsive layouts that look great on any device.</li>
          <li>Building dynamic and interactive web apps.</li>
          <li>Modern React and Next.js applications.</li>
        </ul>
        <h3 className="p-2 mt-8 mb-4 text-lg font-semibold text-[#f6f6f6]">
          Previous Projects
        </h3>
        <div className="flex flex-col gap-8 pb-4 mb-4">
          <Link target="_blank" to={"https://gjh-inc.com"}>
            <div className="card rounded-lg shadow-lg project-card">
              <div className="overflow-hidden rounded-t-lg">
                {/* Add appropriate image if available */}
                <img
                  src={gjhinc}
                  alt="GJH INC"
                  className="hover:scale-110 transition-all w-full"
                />
              </div>
              <div className="p-4 relative">
                <h3 className="text-lg font-semibold text-[#f6f6f6]">
                  GJH INC
                </h3>
                <p className="text-[#bababa] font-extralight text-sm">
                  Corporate website for GJH INC
                </p>
              </div>
            </div>
          </Link>
          <Link target="_blank" to={"https://rumblehauz.com"}>
            <div className="card rounded-lg shadow-lg project-card">
              <div className="overflow-hidden rounded-t-lg">
                {/* Add appropriate image if available */}
                <img
                  src={rumble}
                  alt="Rumblehauz"
                  className="hover:scale-110 transition-all w-full"
                />
              </div>
              <div className="p-4 relative">
                <h3 className="text-lg font-semibold text-[#f6f6f6]">
                  Rumblehauz
                </h3>
                <p className="text-[#bababa] font-extralight text-sm">
                  Website for Rumblehauz
                </p>
              </div>
            </div>
          </Link>
          <Link target="_blank" to={"https://dodobooks.in"}>
            <div className="card rounded-lg shadow-lg project-card">
              <div className="overflow-hidden rounded-t-lg">
                {/* Add appropriate image if available */}
                <img
                  src={dodo}
                  alt="Dodobooks"
                  className="hover:scale-110 transition-all w-full"
                />
              </div>
              <div className="p-4 relative">
                <h3 className="text-lg font-semibold text-[#f6f6f6]">
                  Dodobooks
                </h3>
                <p className="text-[#bababa] font-extralight text-sm">
                  ecommerce site for Dodobooks
                </p>
              </div>
            </div>
          </Link>
          <Link target="_blank" to={"https://alarveliyeedu.com"}>
            <div className="card rounded-lg shadow-lg project-card">
              <div className="overflow-hidden rounded-t-lg">
                {/* Add appropriate image if available */}
                <img
                  src={alar}
                  alt="Alarveliyeedu"
                  className="hover:scale-110 transition-all w-full"
                />
              </div>
              <div className="p-4 relative">
                <h3 className="text-lg font-semibold text-[#f6f6f6]">
                  Alarveliyeedu
                </h3>
                <p className="text-[#bababa] font-extralight text-sm">
                  Website for Alarveliyeedu
                </p>
              </div>
            </div>
          </Link>
          <Link target="_blank" to={"https://gjhconsulting.net"}>
            <div className="card rounded-lg shadow-lg project-card">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={GJH}
                  alt="project"
                  className="hover:scale-110 transition-all w-full"
                />
              </div>
              <div className="p-4 relative">
                <h3 className="text-lg font-semibold text-[#f6f6f6]">
                  GJH Consulting 
                </h3>
                <p className="text-[#bababa] font-extralight text-sm">
                  Built a landing page for GJH Consulting 
                </p>
              </div>
            </div>
          </Link>
        </div>
        <Link
          target="_blank"
          to={`mailto:josephsamuvel001@gmail.com
            ?subject=Interested in Your Web Dev Services
            &body=Hi sam.js, I'm [Your Name] from [Your Company/Website]. I came across your portfolio /n We're looking for a developer to help us with [briefly describe project scope and goals]. Could we schedule a brief call to discuss this further? Let me know your availability.`}
          className="btn btn-primary text-base"
        >
          Let's start
        </Link>
      </div>

      {/* Portfolio Section */}
      <div className="bg1card mt-8 p-6 rounded-lg">
        <h3 className="text-2xl text-[#f6f6f6] mb-4 font-semibold">
          Portfolio
        </h3>
        <p className="text-[#bababa] font-normal text-base mb-2">
          Invest in a portfolio that works as hard as you do. I'll create a
          digital showcase that generates leads, attracts clients, and propels
          you forward.
        </p>
        <ul className="text-[#bababa] list-disc list-outside pl-6 my-0 mb-4 text-base">
          <li>
            <b>Tailor it:</b> Customize your pitch based on the specific client
            or project.
          </li>
          <li>
            <b>Be specific:</b> Highlight your unique skills and experience.
          </li>
          <li>
            <b>Showcase examples:</b> Share links to previous portfolios you've
            created.
          </li>
          <li>
            <b>Call to action:</b> Encourage potential clients to get in touch
            to discuss their needs.
          </li>
        </ul>
        <h3 className="p-2 mt-8 mb-4 text-lg font-semibold text-[#f6f6f6]">
          Freelance Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-4">
          <Link target="_blank" to={"https://abakersconfession.co.uk/"}>
            <div className="card project-card min-h-[200px] md:min-h-[298px] bg-[#232323] max-w-[414px] mx-auto mb-8 rounded-lg shadow-lg">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={baker}
                  alt="project"
                  className="scale-[1.02] hover:scale-110 transition-all w-full"
                />
              </div>
              <div className="p-4 relative">
                <h3 className="text-lg font-semibold text-[#f6f6f6]">
                  Baker's Portfolio
                </h3>
                <p className="text-[#bababa] font-extralight text-sm">
                  This is the portfolio website of my client from UK
                </p>
              </div>
            </div>
          </Link>
          <Link target="_blank" to={"https://gtaudioevents.in/"}>
            <div className="card project-card min-h-[200px] md:min-h-[298px] bg-[#232323] max-w-[414px] mx-auto mb-8 rounded-lg shadow-lg">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={gt}
                  alt="project"
                  className="hover:scale-110 transition-all w-full"
                />
              </div>
              <div className="p-4 relative">
                <h3 className="text-lg font-semibold text-[#f6f6f6]">
                  GT Portfolio
                </h3>
                <p className="text-[#bababa] font-extralight text-sm">
                  This is the portfolio website of an event host
                </p>
              </div>
            </div>
          </Link>
          <Link target="_blank" to={"https://ananthdesignstudio.com"}>
            <div className="card project-card min-h-[200px] md:min-h-[298px] bg-[#232323] max-w-[414px] mx-auto mb-8 rounded-lg shadow-lg">
              <div className="overflow-hidden rounded-t-lg">
                {/* Add appropriate image if available */}
                <img
                  src={ananth}
                  alt="Ananth Design Studio"
                  className="hover:scale-110 transition-all w-full"
                />
              </div>
              <div className="p-4 relative">
                <h3 className="text-lg font-semibold text-[#f6f6f6]">
                  Ananth Design Studio
                </h3>
                <p className="text-[#bababa] font-extralight text-sm">
                  Portfolio for Ananth Design Studio
                </p>
              </div>
            </div>
          </Link>
        </div>
        <Link
          target="_blank"
          to={`mailto:josephsamuvel001@gmail.com
        ?subject=Interested in Your Web Dev Services
        &body=Hi sam.js, I'm [Your Name] from [Your Company/Website]. I came across your portfolio /n We're looking for a developer to help us with [briefly describe project scope and goals]. Could we schedule a brief call to discuss this further? Let me know your availability.`}
          className="btn btn-primary text-base"
        >
          Let's start
        </Link>
      </div>

      {/* Consulting and Support Section */}
      <div className="bg1card mt-8 p-6 rounded-lg">
        <h3 className="text-2xl text-[#f6f6f6] mb-4 font-semibold">
          Consulting and Support
        </h3>
        <p className="text-[#bababa] font-normal text-base mb-2">
          I fix website problems and help you build a better online presence.
          Get the support you need to succeed.
        </p>
        <ul className="text-[#bababa] list-disc list-outside pl-6 my-0 mb-4 text-base">
          <li>Bug fixes and troubleshooting</li>
          <li>Performance optimization</li>
          <li>Security audits and enhancements</li>
          <li>Technical consultation and advice</li>
          <li>Ongoing website maintenance and support</li>
        </ul>
        <Link
          target="_blank"
          to={`mailto:josephsamuvel001@gmail.com
        ?subject=Interested in Your Web Dev Services
        &body=Hi sam.js, I'm [Your Name] from [Your Company/Website]. I came across your portfolio /n We're looking for a developer to help us with [briefly describe project scope and goals]. Could we schedule a brief call to discuss this further? Let me know your availability.`}
          className="btn btn-primary text-base"
        >
          Let's start
        </Link>
      </div>
    </div>
  );
};

export default Services;
