import { Route, Routes } from "react-router-dom";
//pages
import Getir from "./pages/Getir";
import GetirBuyuk from "./pages/GetirBuyuk";
import GetirYemek from "./pages/GetirYemek";
import GetirSu from "./pages/GetirSu";
import GetirCarsi from "./pages/GetirCarsi";
//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Getir />} />
        <Route path="/getiryemek" element={<GetirYemek />} />
        <Route path="/getirbuyuk" element={<GetirBuyuk />} />
        <Route path="/getirsu" element={<GetirSu />} />
        <Route path="/getircarsi" element={<GetirCarsi />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
