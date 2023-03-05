import React from "react";
import { BiUser } from "react-icons/bi";
import { BsFillDiscFill, BsThreeDots } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import album from "../assets/album.webp";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
const RequestSongs = () => {
  return (
    <div className="flex  justify-between ">
      <div className=" overflow-hidden flex items-center gap-3">
        <img
          src={album}
          alt="album"
          width={200}
          height={250}
          className="object-cover rounded-lg aspect-square max-w-[80px] w-full max-w"
        />
        <p>
          Starboy <br />
          <span>The weekend</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <p>3:40</p>
        <p className="text-yellow-400 flex items-center">
          5 <AiFillStar />
        </p>
        {/* <button className="bg-green-600 rounded-full px-3 py-2">
          Request music
        </button> */}
      </div>
    </div>
  );
};
const Playlist = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src={album} width={60} className="aspect-square rounded-full" />
      </div>

      <h2 className="flex flex-col">
        The Weekend<span className="text-secondaryBlack">Starboy</span>
      </h2>

      <BsThreeDots />
    </div>
  );
};
const ClubRoom = () => {
  return (
    <li className="cursor-pointer pr-4 hover:border-r-2 hover:border-r-white transition-all duration-300 ease-in-out">
      <BsFillDiscFill />
    </li>
  );
};
const User = () => {
  const dispatch = useDispatch();
  return (
    <>
      <main className="userpage">
        <header className="p-7 text-2xl flex flex-col justify-center gap-16 h-screen md:sticky left-0  fixed inset-y-0 -translate-x-full md:translate-x-0  md:bg-transparent bg-black z-40 ">
          <div className="cursor-pointer">
            <BiUser />
          </div>
          <nav className="">
            <ul className="flex flex-col gap-5 items-start">
              <ClubRoom />
              <ClubRoom />
              <ClubRoom />
              <ClubRoom />
            </ul>
          </nav>
          <div
            className="text-red-500 text-2xl cursor-pointer"
            onClick={() => dispatch(logout())}
          >
            {" "}
            <ImExit />{" "}
          </div>
        </header>
        <section className="py-7 w-full">
          <form className="flex items-center mb-3 max-w-2xl mx-auto md:mx-0">
            <div className="text-gray text-lg -mr-7 ">
              <FiSearch />
            </div>
            <input
              type="text"
              className="w-full rounded-full bg-transparent px-8 py-2 border border-gray   focus-visible:outline-none focus-visible:border"
              placeholder="Search music"
            />
          </form>
          <div className="music-container">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-bold uppercase">Request Songs</h1>
              <div className="   gap-10 grid playlist  ">
                <RequestSongs />
                <RequestSongs />
                <RequestSongs />
                <RequestSongs />
                <RequestSongs />
                <RequestSongs />
                <RequestSongs />
              </div>
            </div>
            <div className="md:pr-7 md:w-fit w-full flex flex-col px-6 mx-auto">
              <div className="mb-3 self-center ">
                <h2 className="uppercase font-bold text-2xl">Now Playing</h2>
                <img
                  src={album}
                  alt="album"
                  width={300}
                  className="aspect-square rounded-lg"
                />
                <p className="text-lg text-gray">Starboy by The Weekend</p>
              </div>
              <div className="playlist gap-10">
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default User;
