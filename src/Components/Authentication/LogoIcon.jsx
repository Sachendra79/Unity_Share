import { useNavigate } from "react-router-dom"
export default function Logo(){
  const Navigation = useNavigate()
    return(
        <>
             <div className="logoHeading btn" >
        Unity<span className="logoHeadingEnd text-[#5A911F]">Share</span>
      </div>
        </>
    )
}