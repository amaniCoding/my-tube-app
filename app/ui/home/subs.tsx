'use client'
import { subs } from "@/app/libs/placehoder"
import Image from "next/image"
export default function Subs() {
  return (
    <div className="border-b border-gray-300">
      {
        subs.map((el, i) => {
          return (

            <div key={i} className="cursor-pointer flex space-x-5 px-4 py-2 hover:bg-gray-100 rounded-xl mx-3">
              <Image
                src={el.photo}
                width={0}
                height={0}
                sizes="100vh"
                className="w-6 h-6 block rounded-full object-cover"
                alt="You tube like app developed by Amanuel Ferede"
              />

              <p>{el.name}</p>

            </div>
          )
        })
      }
    </div>

  )
}