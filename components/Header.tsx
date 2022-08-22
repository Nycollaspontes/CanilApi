import Image from "next/image"
import { BreedsLogo } from "./BreedsLogo"
import { Navbar } from "./Navbar"
import { SearchBar } from "./SearchBar"

export function Header() {
  return (
    <div className="bg-gray-900 h-20 flex items-center justify-between px-10 ">
      {/* <p><Image src={}/></p> */}
      <Navbar />
      <SearchBar />
      <BreedsLogo />

    </div>
  )
}