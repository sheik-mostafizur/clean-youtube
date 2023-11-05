import {useState} from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [playlistId, setPlaylistId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaylistId(e.target.value);
  };
  return (
    <div className="bg-[url('https://img.freepik.com/free-vector/gradient-glassmorphism-horizontal-banner_23-2149440108.jpg')] h-screen bg-no-repeat bg-cover bg-center overflow-y-auto">
      <Navbar handleSubmit={handleSubmit} />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
          {Array(15)
            .fill("card")
            .map((item) => (
              <Card />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
