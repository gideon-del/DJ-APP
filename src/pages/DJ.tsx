import React from "react";
import dj from "../assets/dj.webp";
import album from "../assets/album.webp";
import { BiSearch } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
const PlaylistCard: React.FC = () => {
  return (
    <div>
      <img
        width={150}
        height={200}
        className="aspect-square rounded-xl w-full"
        src={album}
        alt="DJ"
      />
      <h2 className="flex flex-col">
        Starboy <span className="text-lg text-slate-300">The Weekend</span>
      </h2>
    </div>
  );
};
const DJ: React.FC = () => {
  return (
    <>
      <div className="bg-primaryBlack flex flex-col min-h-screen">
        <header className="sticky top-0 bg-primaryBlack p-4 flex flex-col md:flex-row justify-between md:items-center gap-2 mx-auto container">
          <form className="max-w-2xl flex items-center gap-5 flex-1">
            <input
              type={"text"}
              name="Search"
              placeholder="Search for music"
              className="w-full bg-transparent border border-secondaryBlack px-4 py-2 rounded-xl"
            />
            <button
              aria-label="Search"
              className="md:text-xl text-white bg-secondaryBlack rounded-md shadow-md px-4 py-2"
            >
              Search
            </button>
          </form>
          <button className="flex items-center gap-4 bg-red-600 text-white px-4 py-2 rounded-xl self-start">
            Log out
          </button>
        </header>
        <main className="flex-1">
          <div className="dj-bg"></div>
          <section className="dj-grid">
            <section className="dj-playlist gap-6 text-white">
              <PlaylistCard />
              <PlaylistCard />
              <PlaylistCard />
              <PlaylistCard />
              <PlaylistCard />
              <PlaylistCard />
              <PlaylistCard />
              <PlaylistCard />
            </section>
            <section className="p-5 bg-secondaryBlack shadow-2xl shadow-primaryBlack rounded-xl max-h-96 overflow-y-scroll  ">
              <ol className="">
                <li className="flex gap-4">
                  <img
                    src={dj}
                    alt="DJ"
                    width={50}
                    className="aspect-square rounded-xl"
                  />
                  <p className="flex flex-col text-sky-500">
                    Dusk Till Dawn (Feat. Sia){" "}
                    <span className="text-gray"> ZAYN</span>
                  </p>
                </li>
                <li className="flex gap-4">
                  <p className="flex flex-col text-sky-500 gap-2pnp">
                    Dusk Till Dawn (Feat. Sia){" "}
                    <span className="text-gray"> ZAYN</span>
                  </p>
                </li>
                <li className="flex gap-4">
                  <p className="flex flex-col text-sky-500 gap-2pnp">
                    Dusk Till Dawn (Feat. Sia){" "}
                    <span className="text-gray"> ZAYN</span>
                  </p>
                </li>
                <li className="flex gap-4">
                  <p className="flex flex-col text-sky-500 gap-2pnp">
                    Dusk Till Dawn (Feat. Sia){" "}
                    <span className="text-gray"> ZAYN</span>
                  </p>
                </li>
                <li className="flex gap-4">
                  <p className="flex flex-col text-sky-500 gap-2pnp">
                    Dusk Till Dawn (Feat. Sia){" "}
                    <span className="text-gray"> ZAYN</span>
                  </p>
                </li>
                <li className="flex gap-4">
                  <p className="flex flex-col text-sky-500 gap-2pnp">
                    Dusk Till Dawn (Feat. Sia){" "}
                    <span className="text-gray"> ZAYN</span>
                  </p>
                </li>
                <li className="flex gap-4">
                  <p className="flex flex-col text-sky-500 gap-2pnp">
                    Dusk Till Dawn (Feat. Sia){" "}
                    <span className="text-gray"> ZAYN</span>
                  </p>
                </li>
                <li className="flex gap-4">
                  <p className="flex flex-col text-sky-500 gap-2pnp">
                    Dusk Till Dawn (Feat. Sia){" "}
                    <span className="text-gray"> ZAYN</span>
                  </p>
                </li>
                <li className="flex gap-4">
                  <p className="flex flex-col text-sky-500 gap-2pnp">
                    Dusk Till Dawn (Feat. Sia){" "}
                    <span className="text-gray"> ZAYN</span>
                  </p>
                </li>
                <li className="flex gap-4">
                  <p className="flex flex-col text-sky-500 gap-2pnp">
                    Dusk Till Dawn (Feat. Sia){" "}
                    <span className="text-gray"> ZAYN</span>
                  </p>
                </li>
              </ol>
            </section>
          </section>
        </main>
      </div>
    </>
  );
};

export default DJ;
