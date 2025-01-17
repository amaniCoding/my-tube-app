'use client'

import { FaHome, FaMusic, FaRegStar, FaRegThumbsUp, FaTv } from "react-icons/fa"
import Subs from "./subs"
import WatchList from "./watch"
import { FaEarListen } from "react-icons/fa6"
import { MdOutlineWatchLater, MdSubscriptions } from "react-icons/md"

export default function Main() {
  return (
    <section>
      <div className="max-w-screen-2xl mx-auto md:p-2 p-3">
        <div className="grid grid-cols-12 gap-3">
          <div className="md:col-span-2 pl-4 md:block hidden col-span-12 h-screen sticky top-1 overflow-y-auto socrollabar">
            <p className="mb-4 text-lg font-bold">Explore</p>
            <div className="flex space-x-5 mb-3">
              <FaHome size={20} />
              <span>
                video
              </span>
            </div>
            <div className="flex space-x-5 mb-3">
              <FaTv size={20} />
              <span>
                video
              </span>
            </div>
            <div className="flex space-x-5 mb-3">
              <FaMusic size={20} />
              <span>Music</span>
            </div>
            <div className="flex space-x-5 mb-3">
              <MdSubscriptions size={20} />
              <span>Subscriptions</span>
            </div>


            <p className=" mb-4 text-lg font-bold">Play list</p>

            <div className="flex space-x-5 mb-3">
              <FaTv size={20} />
              <span>Watched</span>
            </div>
            <div className="flex space-x-5 mb-3">
              <FaEarListen size={20} />
              <span>Listened</span>
            </div>
            <div className="flex space-x-5 mb-3">
              <FaRegStar size={20} />
              <span>Bookmarked</span>
            </div>
            <div className="flex space-x-5 mb-3">
              <MdOutlineWatchLater size={20} />
              <span>Watch Later</span>
            </div>

            <div className="flex space-x-5 mb-3">
              <FaRegThumbsUp size={20} />
              <span>Liked Videos</span>
            </div>

            <p className=" mb-4 text-lg font-bold">Subscriptions</p>
            <Subs />
          </div>
          <div className="md:col-span-10 col-span-12">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
              <WatchList />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}