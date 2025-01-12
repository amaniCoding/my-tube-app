'use client'
import Image from "next/image"
import { IoMdMore } from "react-icons/io"
import { MdSort } from "react-icons/md"
import Comment from "../comment/comment"
import Related from "../related/related"
import { PiThumbsDownLight, PiThumbsUpLight } from "react-icons/pi"
export default function Watch() {
  return (
    <section>
      <div className="max-w-[1100px] mx-auto md:p-2 p-3">

        <div className="grid grid-cols-12 gap-10">
          <div className="md:col-span-7 col-span-12">
          <div>
            <div className="p-1">
              <Image
                src={`/latest/4.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full object-cover"
                alt="You tube like app developed by Amanuel Ferede"
              />
            </div>
            <div>
              <p className="text-xl font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis cupiditate ex nulla nam nemo rem corrupti.</p>
            </div>
            <div className="flex items-center space-x-3 my-2">
              <Image
                src={`/latest/6.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                className="w-12 h-12 object-center block rounded-full"
                alt="You tube like app developed by Amanuel Ferede"
              />
              <span className="w-full font-semibold text-lg">Amani Tube</span>
              <button className="px-3 py-2 bg-black text-white rounded-xl">Subscribe</button>
              <div className="flex items-center space-x-3 rounded-xl">
                <div className="flex items-center space-x-1">
                  <PiThumbsUpLight  size={25} />
                  <span className="font-semibold">1.2k</span>
                </div>
                <span> | </span>
                <div className="flex items-center">
                  <PiThumbsDownLight  size={25} />
                  <span className="font-semibold"></span>
                </div>
              </div>
              <button className="px-3 py-2 bg-gray-200 rounded-xl text-black">Share</button>

              <IoMdMore size={87} />
            </div>
            <div className="rounded-lg bg-gray-100 p-3 my-2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde vero temporibus modi harum, saepe doloribus at, esse nesciunt, laborum dolor beatae repellat repellendus? Architecto, assumenda! Reprehenderit quae voluptatum eum.</p>
            </div>

            <div className="flex items-center space-x-4 my-2">
              <span className="font-bold text-lg">152 Comments</span>
              <MdSort size={30} />
            </div>
            <div className="flex items-center space-x-3 my-2">
              <Image
                src={`/latest/7.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                className="w-10 h-10  object-center block rounded-full"
                alt="You tube like app developed by Amanuel Ferede"
              />
              <input className="block w-full p-3 border-b-[1.8px] border-gray-300" placeholder="Write a comment "></input>
            </div>
            <div className="my-5">
              <Comment />
            </div>
          </div>
          </div>
          <div className="md:col-span-5 col-span-12">
          <Related/>
          </div>
        </div>
      </div>
    </section>
  )
}