'use client'
import { FaPlus } from "react-icons/fa"
import { IoIosNotifications } from "react-icons/io"
import Image from "next/image"
export default function NavBar() {
  return (
    <nav className="shadow-md">
      <div className="max-w-screen-xl mx-auto p-3">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">MyTube</span>
          <input className="p-2 w-1/2 border-[1.7px] rounded-3xl border-gray-300" placeholder="Serach on MyTube"></input>

          <div className="flex items-center space-x-3">
            <FaPlus size={30} />
            <IoIosNotifications size={30} />
            <Image
              src={`/latest/3.jpg`}
              width={0}
              height={0}
              sizes="100vh"
              className="w-10 h-10  object-center block rounded-full"
              alt="You tube like app developed by Amanuel Ferede"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}