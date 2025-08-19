import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homes from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";
import HotelRegistration from "./components/HotelRegistration";
import Layout from "./pages/hotelOwner/Layout";
import Dashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/hotelOwner/AddRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";
const App = () => {
  const isOwner = useLocation().pathname.includes("owner");
  return (
    <>
      <div>
        {!isOwner && <Navbar />}
        {false && <HotelRegistration />}
        <div className="min-h-[70vh]">
          <Routes>
            <Route path="/" element={<Homes />} />
            <Route path="/rooms" element={<AllRooms />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/my-bookings" element={<MyBookings />} />

            <Route path="/owner" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route index element={<AddRoom />} />
              <Route path="add-room" element={<AddRoom />} />
              <Route path="list-room" element={<ListRoom />} />
            </Route>
          </Routes>
        </div>
      {isOwner ? "" :  <Footer />}

      </div>
    </>
  );
};

export default App;
