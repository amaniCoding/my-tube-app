'use client'
import Image from "next/image"
import Link from "next/link"
import { IoMdMore } from "react-icons/io"
export default function Related() {
  return (
    <>
      {
        Array.from(Array(10).keys()).map((_, i) => {
          return (

            <div className="grid grid-cols-12 gap-5 mb-5" key={i}>
              <div className="md:col-span-5 col-span-12">
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
              <div className="md:col-span-7 col-span-12">
                <div className="flex">
                  <div className="flex flex-col">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <span>Amani Tube</span>
                    <div className="flex space-x-2">
                      <span>147k Views</span>
                      <span>10 days ago</span>
                    </div>
                  </div>
                  <IoMdMore size={47} />
                </div>
              </div>
            </div>


          )
        })
      }
    </>
  )
}