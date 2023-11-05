import {useState} from "react";

const Navbar = ({handleSubmit}) => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  return (
    <div className="mb-24">
      <div className="fixed top-0 z-10 w-full bg-primary-100/50 backdrop-blur hover:backdrop-blur-lg shadow">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-4">
          <div className="flex justify-between w-full md:w-auto">
            <h2 className="font-bold text-2xl md:text-3xl text-primary-950">
              CleanYouTube
            </h2>
            <svg
              onClick={() => setIsOpenForm(!isOpenForm)}
              className="w-6 md:hidden cursor-pointer"
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="m21 17.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <form
            onSubmit={handleSubmit}
            className={`${
              isOpenForm ? "" : "hidden md:grid"
            } w-full md:w-auto grid-cols-1 md:grid-cols-4 items-center justify-center md:gap-4`}>
            <input
              type="text"
              placeholder="Enter Playlist ID"
              name="playlistId"
              className="my-4 md:my-0 bg-primary-50/50 backdrop-blur shadow col-span-3 border border-primary-300 text-primary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-primary-700 dark:border-primary-600 dark:placeholder-primary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
            <button
              type="submit"
              className="w-full md:w-auto text-white bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800 shadow-lg shadow-primary-500/50 dark:shadow-lg dark:shadow-primary-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
              Add Playlist
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
