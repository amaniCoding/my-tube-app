'use client'
import Image from "next/image"
import Link from "next/link"
import { IoMdMore } from "react-icons/io"
export default function WatchList() {
  return (
    <>
      {
        Array.from(Array(14).keys()).map((_, i) => {
          return (
            <div className="p-1" key={i}>

              <Link href={`/watch/2349873`}>
                <Image
                  src={`/latest/${i + 1}.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full object-fill"
                  alt="You tube like app developed by Amanuel Ferede"
                />
              </Link>

              <div>
                <div className="flex space-x-2 my-2">

                  <Image
                    src={`/latest/${i + 1}.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-8 h-8 rounded-full flex-none"
                    alt="You tube like app developed by Amanuel Ferede"
                  />

                  <div className="grow">
                    <p className="w-full">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p className="font-bold text-gray-700">Amani Tube</p>
                    <div className="flex space-x-1">
                      <p className="text-gray-500">237426 views</p>
                      <p>2 hours ago</p>
                    </div>
                  </div>
                  <IoMdMore size={35} />

                </div>

              </div>
            </div>
          )
        })
      }
    </>

  )
}