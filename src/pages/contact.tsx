import Copy from "@/components/copy"
import { Link } from "react-router-dom"
import tweet from "../assets/twitter.svg"
import mail from "../assets/mail.svg"
import whatsapp from "../assets/whatsapp.svg"
import linked from "../assets/linked.svg"

const Contact = () => {
  return (
    <div>
      <h1 className="title">Contact</h1>
      <p className="p2 mt-2 mb-12">
        Need a hand in any web dev related stuffs feel free to contact me
      </p>
      <div className="flex gap-4">
         <Link 
        target="_blank" to={`mailto:josephsamuvel001@gmail.com
        ?subject=Interested in Your Web Dev Services
        &body=Hi sam.js, I'm [Your Name] from [Your Company/Website]. hope you are available for a quick call to discuss about my project? Let me know your availability.`}
        className="btn btn-primary">Schedule free call</Link>
        <Copy/>
      </div>
      <div className="card p-6 my-10 ">
          <h2 className="mb-2 text-lg font-medium">Contact Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Link target="_blank" to={"mailto:josephsamuvel001@gmail.com"}>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent items-center gap-2 rounded-sm hover:bg-[#2c2c2c]">
              <img className="w-[40px] h-[40px]" src={mail} alt="mail icon" />
              <div className="ml-2">
                <h3 className="font-normal">Mail</h3>
              </div>
            </div>
            </Link>
            <Link target="_blank" to={"https://x.com/the_sam_js"}>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent items-center gap-2 rounded-sm hover:bg-[#2c2c2c]">
              <img className="w-[40px] h-[40px]" src={tweet} alt="twitter icon" />
              <div className="ml-2">
                <h3 className="font-normal">Twitter</h3>
              </div>
            </div>
            </Link>
            <Link target="_blank" to={"https://www.linkedin.com/in/samuvel-raja-10321a220/"}>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent items-center gap-2 rounded-sm hover:bg-[#2c2c2c]">
              <img className="w-[40px] h-[40px]" src={linked} alt="linkedin icon" />
              <div className="ml-2">
                <h3 className="font-normal">Linkedin</h3>
              </div>
            </div>
            </Link>
            <Link target="_blank" to={"https://wa.me/919344232035"}>
              <div className="flex p-[6px] border hover:border-[#393939] border-transparent items-center gap-2 rounded-sm hover:bg-[#2c2c2c]">
              <img className="w-[40px] h-[40px]" src={whatsapp} alt="whatsapp icon" />
              <div className="ml-2">
                <h3 className="font-normal">Whatsapp</h3>
              </div>
            </div>
            </Link>
          </div>
        </div>     
    </div>
  )
}

export default Contact
