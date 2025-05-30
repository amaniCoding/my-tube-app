'use client'

import { IoIosNotificationsOutline } from "react-icons/io"
import Image from "next/image"
import { GoPlus } from "react-icons/go"
import { HiBars3, HiMiniMagnifyingGlass } from "react-icons/hi2"

import { BsCollectionPlayFill } from "react-icons/bs"
import Link from "next/link"
export default function NavBar() {
  return (
    <nav className=" fixed top-0 left-0 right-0 bg-white z-10 md:px-4 px-1">
      <div className="max-w-screen-2xl mx-auto p-3">
        <div className="flex items-center justify-between space-x-3">
          <div className="flex space-x-3 items-center">
            <HiBars3 size={27} />

            <Link href={`/`} className="flex items-center space-x-3">
              <BsCollectionPlayFill size={27} color="red" />
              <span className="font-bold">MyTube</span>
            </Link>

          </div>
          <div className="flex w-1/2 items-center parent border-[1.7px] border-transparent">

            <input className="p-1.5 border-r-0 focus:rounded-l-none focus:border-0 focus:border-transparent rounded-r-none pl-3 child w-full border-[1.7px] peer order-2 rounded-3xl  outline-none border-gray-300 focus:outline-none md:block hidden" placeholder="Serach on MyTube"></input>
            <button className="invisible peer-focus:visible order-1 px-4 pr-0 p-1.5 "><HiMiniMagnifyingGlass size={22} /></button>

            <button className="outline-none peer-focus:border-transparent order-3 rounded-r-3xl border-[1.7px] border-gray-300 px-4 p-1.5 bg-gray-100 items-center justify-center md:flex hidden"><HiMiniMagnifyingGlass size={24} /></button>

          </div>
          <div className="flex items-center space-x-3">
            <HiMiniMagnifyingGlass className="md:hidden block" size={70} />
            <div className="md:flex hidden space-x items-center py-1 px-3 bg-gray-100 rounded-3xl">
              <GoPlus size={27} />
              <span className="font-semibold">Create</span>
            </div>


            <div className="relative md:block hidden">
              <IoIosNotificationsOutline size={30} />
              <div className="absolute -top-1.5 -right-2 rounded-full text-sm bg-red-600 flex items-center justify-between text-white px-1">21</div>
            </div>
            <Image
              src={`/tube/46.jpg`}
              width={0}
              height={0}
              sizes="100vh"
              className="w-9 h-9 object-cover block rounded-full"
              alt="You tube like app developed by Amanuel Ferede"
            />

          </div>

        </div>
      </div>
    </nav>
  )
}