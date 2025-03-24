'use client'
import Image from "next/image"
import { MdSort } from "react-icons/md"
import Comment from "../comment/comment"
import Related from "../related/related"
import { PiShareFat, PiThumbsDownLight, PiThumbsUpLight } from "react-icons/pi"
import { AiOutlineMore } from "react-icons/ai"

export default function Watch() {
  return (
    <section>
      <div className="max-w-[1300px] mt-[70px] mx-auto md:p-2 p-0">

        <div className="grid grid-cols-12 gap-5">
          <div className="md:col-span-8 col-span-12">
      
              <div className="p-1">
                <Image
                  src={`/tube/4.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full md:rounded-xl"
                  alt="You tube like app developed by Amanuel Ferede"
                />
              </div>
            
                <p className="text-xl font-bold md:pl-0 pl-4">Ultimate Ambient Chillout: Relax, Work, Study ✨ Unwind Your Mind ✨ Lounge Vibes for Relaxation.</p>
          
              <div className="flex px-3 py-2 my-2 justify-between">
                <div className="flex space-x-2 ">
                  <Image
                    src={`/tube/46.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-10 h-10 object-cover rounded-full flex-none"
                    alt="You tube like app developed by Amanuel Ferede"
                  />
                  <div className="flex flex-col">
                    <p className="w-full font-semibold text-lg">Amani Tube</p>
                    <p>174K subscribers</p>
                  </div>
                  <button className="px-4 py-1.5 h-10  bg-black text-white rounded-3xl">Subscribe</button>
                  <AiOutlineMore className="md:hidden block rounded-full flex-none p-2 bg-gray-200" size={42} />

                </div>

                <div className="md:flex hidden space-x-4 h-10 md:mt-0 mt-4">

                  <div className="flex items-center space-x-3 rounded-3xl py-1.5 px-4 bg-gray-200">
                    <div className="flex items-center space-x-1 ">
                      <PiThumbsUpLight size={25} />
                      <span className="font-semibold">1.2k</span>
                    </div>
                    <span> | </span>
                    <div className="flex items-center">
                      <PiThumbsDownLight size={25} />
                      <span className="font-semibold"></span>
                    </div>


                  </div>

                  <button className="px-3 h-10  bg-gray-200  rounded-3xl text-black"><span className="flex items-center space-x-1"><PiShareFat size={25} /><span>Share</span></span></button>
                  <button className="px-3 h-10 bg-gray-200  rounded-3xl text-black">Download</button>

                  <AiOutlineMore className=" rounded-full flex-none p-2 bg-gray-200" size={42} />

                </div>

              </div>
              <div className="rounded-lg bg-gray-100 p-3 my-2">
                <p>969,221 views  Apr 2, 2023  #relaxchilloutmusic #músicarelajante #relaxmusic</p>
                <p>Ultimate Ambient Chillout: Relax, Work, Study ✨ Unwind Your Mind ✨ Lounge Vibes for Relaxation Welcome to our chillout lounge, where you can escape from the chaos of the world and find inner peace. Our deep house music ...<span className="font-semibold">More</span></p>
              </div>

              <div className="flex items-center space-x-4 my-2 md:px-0 px-4">
                <span className="font-bold text-lg">152 Comments</span>
                <MdSort size={30} />
              </div>
              <div className="flex items-center space-x-3 my-2">
                <Image
                  src={`/tube/7.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-9 h-9  object-center block rounded-full"
                  alt="You tube like app developed by Amanuel Ferede"
                />
                <input className="block w-full p-3 border-b-2 border-gray-300 focus:border-b-2 focus:outline-none focus:border-b-black" placeholder="Write a comment "></input>
              </div>
              <div className="my-5 md:px-0 px-2">
                <Comment />
              </div>

          </div>
          <div className="md:col-span-4 col-span-12">
            <Related />
          </div>
        </div>
      </div>
    </section>
  )
}