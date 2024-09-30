import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import Link from "next/link";

export const Footer = () => {

    let iconList = `rounded-full mx-8 flex justify-center items-center border border-l_grey w-12 h-12`
  let quickLink = `mx-8 text-l_grey`
    return (
        <>
            <footer style={{ backgroundColor: "rgb(31,41,55)"}} className="py-3 w-full"  >

                <ul className="flex justify-center" >
                <Link href="https://www.linkedin.com/in/khulood-maqbool-b45aa3255/" target="blank">
                    <li className={`${iconList}`} style={{ color: "lightgray"}} ><FaLinkedinIn /></li>
                  </Link>


                  <Link href="https://github.com/khuloodmaqbool" target="blank">
                    <li className={`${iconList}`}  style={{ color: "lightgray"}} ><TbBrandGithubFilled /></li>
                  </Link>
                  
                   <Link href="https://github.com/khuloodmaqbool" target="blank">
                   <li className={`${iconList}`}  style={{ color: "lightgray"}} ><FaFacebookF /></li>
                  </Link>  

                </ul>
                <ul className="flex justify-center mt-3" >
                    <li className={`${quickLink}`} >Home</li>
                    <li className={`${quickLink}`} >How its Work</li>
                    <li className={`${quickLink}`} >About us</li>
                             </ul>
            </footer>
        </>
    )
}