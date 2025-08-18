import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homes from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
const App = () => {
  const isOwner = useLocation().pathname.includes("owner");
  return (
    <>
      <div>
        {!isOwner && <Navbar />}
        <div className="min-h-[70vh]">
          <Routes>
            <Route path="/" element={<Homes />} />
            <Route path="/rooms" element={<AllRooms />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
