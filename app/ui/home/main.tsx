'use client'

import { FaHome, FaMusic, FaRegStar, FaRegThumbsUp, FaTv } from "react-icons/fa"
import Subs from "./subs"
import WatchList from "./watch"
import { FaEarListen } from "react-icons/fa6"
import { MdOutlineWatchLater, MdSubscriptions } from "react-icons/md"
import { useState } from "react"

export default function Main() {
  const [showScrollBar, setShowScrollBar] = useState<boolean>(false);


  return (
    <section>
      <div className="max-w-screen-2xl mx-auto md:p-3 p-0 mt-[70px]">
        <div className="flex w-full ">
          <div className={`mt-16 w-[18%] md:block pt-[70px]  hidden h-screen fixed left-0 bottom-0 overflow-y-scroll ${showScrollBar ? 'socrollabar' : 'socrollabar-hidden'}`} onMouseOver={() => setShowScrollBar(true)} onMouseOut={() => { setShowScrollBar(false) }}>
            <div className="border-b border-b-gray-300 py-3">
              <p className="mb-4 text-lg font-bold pl-6">Explore</p>
              <div className="cursor-pointer bg-gray-100 flex space-x-5 px-4 py-2 hover:bg-gray-100 rounded-xl mx-3">
                <FaHome size={20} />
                <span>
                  Home
                </span>
              </div>
              <div className="cursor-pointer flex space-x-5 px-4 py-2 hover:bg-gray-100 rounded-xl mx-3">
                <FaTv size={20} />
                <span>
                  video
                </span>
              </div>
              <div className="cursor-pointer flex space-x-5 px-4 py-2 hover:bg-gray-100 rounded-xl mx-3">
                <FaMusic size={20} />
                <span>Music</span>
              </div>

              <div className="cursor-pointer flex space-x-5 px-4 py-2 hover:bg-gray-100 rounded-xl mx-3">
                <MdSubscriptions size={20} />
                <span>Subscriptions</span>
              </div>
            </div>

            <div className="border-b border-b-gray-300 py-3">
              <p className="mb-4 text-lg font-bold pl-6">Explore</p>

              <div className="cursor-pointer flex space-x-5 px-4 py-2 hover:bg-gray-100 rounded-xl mx-3">
                <FaTv size={20} />
                <span>Watched</span>
              </div>
              <div className="cursor-pointer flex space-x-5 px-4 py-2 hover:bg-gray-100 rounded-xl mx-3">
                <FaEarListen size={20} />
                <span>Listened</span>
              </div>
              <div className="cursor-pointer flex space-x-5 px-4 py-2 hover:bg-gray-100 rounded-xl mx-3">
                <FaRegStar size={20} />
                <span>Bookmarked</span>
              </div>
              <div className="cursor-pointer flex space-x-5 px-4 py-2 hover:bg-gray-100 rounded-xl mx-3">
                <MdOutlineWatchLater size={20} />
                <span>Watch Later</span>
              </div>

              <div className="cursor-pointer flex space-x-5 px-4 py-2 hover:bg-gray-100 rounded-xl mx-3">
                <FaRegThumbsUp size={20} />
                <span>Liked Videos</span>
              </div>
            </div>
            <div className="border-b border-b-gray-300 py-3">
              <p className="mb-4 text-lg font-bold pl-6">Explore</p>
              <Subs />
            </div>
          </div>
          <div className="md:w-[82%] w-full md:ml-[18%] ml-0">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-0 md:p-4 p-0">
              <WatchList />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}