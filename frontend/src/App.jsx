import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
const App = () => {
  const isOwner = useLocation().pathname.includes('owner')
  return (
    <>
    
         { !isOwner && <Navbar />}
    </>
  );
};

export default App;
