import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Contact from "./pages/Contact";
import TripType from "./pages/TripType";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/TripType" element={<TripType />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

     
    
    </>
  );
}

export default App;
