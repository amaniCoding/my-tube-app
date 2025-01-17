'use client'
import { subs } from "@/app/libs/placehoder"
import Image from "next/image"
export default function Subs() {
  return (
    <>
      {
        subs.map((el, i) => {
          return (
            <div key={i}>
              <div className="flex items-center space-x-5 my-1 mb-2">
                <Image
                  src={el.photo}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-7 h-7 block rounded-full"
                  alt="You tube like app developed by Amanuel Ferede"
                />

                <span>{el.name}</span>
              </div>
            </div>
          )
        })
      }
    </>

  )
}