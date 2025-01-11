'use client'
import Image from "next/image"
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
export default function Comment() {
  return (
    <>
      {
        Array.from(Array(10).keys()).map((_, i) => {
          return (
            <div className="flex space-x-4 mb-8" key={i}>
              <Image
                src={`/latest/${i+1}.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                className="w-9 h-9  object-center block rounded-full"
                alt="You tube like app developed by Amanuel Ferede"
              />
              <div className="flex flex-col space-y-2">
                <div className="flex space-x-3">
                  <span className="font-bold">Amanuel</span>
                  <span className="font-bold">6 months ago</span>
                </div>
                <span className="w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quos ullam autem. Eligendi, nisi? Ipsum accusamus veniam doloribus id quo aut, dolorem iure. Cumque, quasi praesentium inventore dignissimos iure quibusdam?</span>
                <div className="flex items-center space-x-3">
                  <div className="flex">
                    <FaRegThumbsUp size={20} />
                    <span className="font-semibold">1.2k</span>
                  </div>
                  <span> | </span>
                  <div className="flex">
                    <FaRegThumbsDown size={20} />
                    <span className="font-semibold"></span>
                  </div>
                  <Image
                    src={`/latest/${i+1}.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-6 h-6  object-center block rounded-full"
                    alt="You tube like app developed by Amanuel Ferede"
                  />
                  <span>Reply</span>
                  
                </div>
                <div className="ml-5 my-5">
                    <div className="flex items-center space-x-3">
                      <MdOutlineKeyboardArrowDown />
                      <Image
                        src={`/latest/${i+1}.jpg`}
                        width={0}
                        height={0}
                        sizes="100vh"
                        className="w-6 h-6  object-center block rounded-full"
                        alt="You tube like app developed by Amanuel Ferede"
                      />
                      <span>1 Reply</span>
                    </div>
                  </div>
              </div>
            </div>
          )
        })
      }
    </>

  )
}