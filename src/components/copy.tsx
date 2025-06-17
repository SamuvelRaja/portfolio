import { useRef } from "react"
import copyImage from "../assets/copy.svg";

const Copy = () => {
    const copyRef =useRef<HTMLButtonElement>(null)
  const copyEmail = async() => {
    const email = "josephsamuvel001@gmail.com";
    navigator.clipboard.writeText(email);
    copyRef.current?copyRef.current.innerText="Copied":"";
  };
  return (
    <button ref={copyRef} className="btn btn-secondary inline-flex gap-2" onClick={copyEmail}>
            <img  className="w-[18px]" src={copyImage} alt="Copy" /> E-mail
          </button>
  )
}

export default Copy
