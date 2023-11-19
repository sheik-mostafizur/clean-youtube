import {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import getPlaylist from "./api/get-playlist";

function App() {
  const [playlistId, setPlaylistId] = useState("");
  const [playlist, setPlaylist] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaylistId(e.target.playlistId.value);
  };
  useEffect(() => {
    getPlaylist("PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl").then((d) => {
      setPlaylist(d);
    });
  }, []);
  console.log(playlist);
  return (
    <div className="bg-[url('https://img.freepik.com/free-vector/gradient-glassmorphism-horizontal-banner_23-2149440108.jpg')] h-screen bg-no-repeat bg-cover bg-center overflow-y-auto">
      <BrowserRouter>
        <Navbar handleSubmit={handleSubmit} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
