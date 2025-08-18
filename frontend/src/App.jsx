import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Hero";
const App = () => {
  const isOwner = useLocation().pathname.includes('owner')
  return (
    <>
    
         { !isOwner && <Navbar />}

         <Routes>
          <Route path="/" element={ <Home /> }/>
         </Routes>
    </>
  );
};

export default App;
