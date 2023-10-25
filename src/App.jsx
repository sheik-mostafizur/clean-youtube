function App() {
  return (
    <div className="bg-primary-50 shadow">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        <h2 className="font-bold text-3xl text-primary-950">CleanYouTube</h2>
        <form className="grid grid-cols-4 items-center justify-center gap-4">
          <input
            type="text"
            id="default-input"
            className="shadow col-span-3 bg-primary-50 border border-primary-300 text-primary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-primary-700 dark:border-primary-600 dark:placeholder-primary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          />
          <button
            type="submit"
            className=" text-white bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800 shadow-lg shadow-primary-500/50 dark:shadow-lg dark:shadow-primary-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
            Add Playlist
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
