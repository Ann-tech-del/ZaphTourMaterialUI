import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Contact from "./pages/contact";
import TripType from "./pages/tripType";
import PageNotFound from "./pages/PageNotFound";
// import Layout from "./components/layout";
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

      {/* <Layout>
      <h1>Welcome to zaph tours</h1>
     </Layout> */}
    </>
  );
}

export default App;
