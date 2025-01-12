'use client'
import Image from "next/image"
import Link from "next/link"
import { IoMdMore } from "react-icons/io"
export default function WatchList() {
  return (
    <>
      {
        Array.from(Array(10).keys()).map((_, i) => {
          return (
            <div className="p-1" key={i}>
              <div>
                <Link href={`/watch/2349873`}>
                  <Image
                    src={`/latest/${i + 1}.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-full h-full object-center"
                    alt="You tube like app developed by Amanuel Ferede"
                  />
                </Link>
              </div>
              <div>
                <div className="flex items-center space-x-2 my-1">

                  <Image
                    src={`/latest/${i + 1}.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-10 h-10  object-center block rounded-full"
                    alt="You tube like app developed by Amanuel Ferede"
                  />

                  <span className="w-full">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                  <IoMdMore size={40}/>
                </div>
                <p className="font-bold text-gray-700">Amani Tube</p>
                <div className="flex space-x-1">
                  <span className="font-semibold text-gray-800">237426 views</span>
                  <span>2 hours ago</span>
                </div>
              </div>
            </div>
          )
        })
      }
    </>

  )
}