import Image from "next/image"
import { Navbar } from "./Navbar"

export function Header(){
  return(
        <div className="bg-gray-600 h-20 flex">
            {/* <p><Image src={}/></p> */}
            <Navbar />
        </div>
  )
}