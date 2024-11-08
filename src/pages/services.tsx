
import { Link } from "react-router-dom"
import GJH from "/images/GJH.webp"
import baker from "/images/baker.webp"
import gt    from "/images/gtaudio.webp"
import github from "../assets/git.svg"

const Services = () => {
  return (
    <div className="pb-16">
        <h1 className="title">Services</h1>
        <p className="p2 mt-2">I craft unique websites, web apps, and engaging landing pages with HTML, CSS, JavaScript, React, and Next.js,  delivering standout digital experiences tailored to your unique business needs.</p>
        <Link 
        target="_blank" to={`mailto:contact@samjs.me
        ?subject=Interested in Your Web Dev Services
        &body=Hi sam.js, I'm [Your Name] from [Your Company/Website]. hope you are available for a quick call to discuss about my project? Let me know your availability.`}
        className="btn btn-primary">Schedule free call</Link>
        <div className="bg1card mt-16">
          <h3 className="text-[20px] text-[#f6f6f6] mb-4 font-medium">Landing Pages</h3>
          <p className="text-[#f6f6f6] font-normal">building performant, seo friendly websites that supplements user journey and conversion. bug free web application that satisfy your requirements</p>
          <ul className=" text-[#bababa] list-disc list-outside p-4 my-0 mb-4">
            <li>Unique and tailored custom site to reflect your brand.</li>
            <li>Responsive layouts that look great on any device.</li>
            <li>Building dynamic and interactive web apps.</li>
            <li>Modern React and Next.js applications.</li>
          </ul>
          <h3 className="p-2 mt-8 mb-4 text-lg font-semibold">previous projects</h3>
          <div className="flex flex-col  md:flex-row gap-8  pb-4 mb-4">
            <Link target="_blank" to={"https://gjhconsulting.net"}>
              <div className="card min-h-[200px] md:min-h-[298px] bg-[#2c2c2c]">
                <div className="overflow-hidden">
                  <img src={GJH} alt="project" className=" hover:scale-110 transition-all" />
                </div>
                <div className="p-4 relative">
                  <h3>GJH consulting INC</h3>
                  <p className="text-[#bababa] font-extralight">built an landing page for GJH consulting INC</p>
                  
                </div>
              </div>
            </Link>
          </div>
          <Link 
          target="_blank" to={`mailto:contact@samjs.me
          ?subject=Interested in Your Web Dev Services
          &body=Hi sam.js, I'm [Your Name] from [Your Company/Website]. I came across your portfolio /n We're looking for a developer to help us with [briefly describe project scope and goals]. Could we schedule a brief call to discuss this further? Let me know your availability.`}
          className="btn btn-primary ">Let's start</Link>
        </div>
        <div className="bg1card mt-8">
          <h3 className="text-[20px] text-[#f6f6f6] mb-4 font-medium">Portfolio</h3>
          <p className="text-[#f6f6f6] font-normal">Invest in a portfolio that works as hard as you do. I'll create a digital showcase that generates leads, attracts clients, and propels you forward</p>
          <ul className=" text-[#bababa] list-disc list-outside p-4 my-0 mb-4">
            <li><b>Tailor it:</b> Customize your pitch based on the specific client or project.</li>
            <li><b>Be specific:</b> Highlight your unique skills and experience.</li>
            <li><b>Showcase examples:</b> Share links to previous portfolios you've created.</li>
            <li><b>Call to action:</b> Encourage potential clients to get in touch to discuss their needs.</li>
          </ul>
          <h3 className="p-2 mt-8 mb-4 text-lg font-semibold">Freelance works</h3>
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
          <Link 
        target="_blank" to={`mailto:contact@samjs.me
        ?subject=Interested in Your Web Dev Services
        &body=Hi sam.js, I'm [Your Name] from [Your Company/Website]. I came across your portfolio /n We're looking for a developer to help us with [briefly describe project scope and goals]. Could we schedule a brief call to discuss this further? Let me know your availability.`}
        className="btn btn-primary">Let's start</Link>
        </div>
        

        <div className="bg1card mt-8">
          <h3 className="text-[20px] text-[#f6f6f6] mb-4 font-medium">Consulting and Support</h3>
          <p className="text-[#f6f6f6] font-normal">I fix website problems and help you build a better online presence. Get the support you need to succeed</p>
          <ul className=" text-[#bababa] list-disc list-outside p-4 my-0 mb-4">
            <li>Bug fixes and troubleshooting</li>
            <li>Performance optimization</li>
            <li>Security audits and enhancements</li>
            <li>Technical consultation and advice</li>
            <li>Ongoing website maintenance and support</li>
          </ul>
          <Link 
        target="_blank" to={`mailto:contact@samjs.me
        ?subject=Interested in Your Web Dev Services
        &body=Hi sam.js, I'm [Your Name] from [Your Company/Website]. I came across your portfolio /n We're looking for a developer to help us with [briefly describe project scope and goals]. Could we schedule a brief call to discuss this further? Let me know your availability.`}
        className="btn btn-primary">Let's start</Link>
        </div>
    </div>
  )
}

export default Services
