import {useState} from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [playlistId, setPlaylistId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaylistId(e.target.value);
  };
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
