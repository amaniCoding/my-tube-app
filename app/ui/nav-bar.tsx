'use client'
import { FaBars } from "react-icons/fa"
import { IoIosNotifications } from "react-icons/io"
import Image from "next/image"
import { GoPlus } from "react-icons/go"
import Link from "next/link"
export default function NavBar() {
  return (
    <nav className="shadow-md">
      <div className="max-w-screen-xl mx-auto p-3">
        <div className="flex items-center justify-between space-x-3">
          <Link href={`/`} className="text-xl font-bold">MyTube</Link>
          <input className="p-2 w-1/2 border-[1.7px] rounded-2xl border-gray-300" placeholder="Serach on MyTube"></input>

          <div className="flex items-center space-x-3">
            <GoPlus size={34} />
            <IoIosNotifications size={34} />
            <Image
              src={`/latest/3.jpg`}
              width={0}
              height={0}
              sizes="100vh"
              className="w-10 h-10  object-center block rounded-full"
              alt="You tube like app developed by Amanuel Ferede"
            />
            <FaBars size={34} className="md:hidden block" />
          </div>
          
        </div>
      </div>
    </nav>
  )
}