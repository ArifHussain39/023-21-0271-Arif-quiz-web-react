import { MyNavbar } from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./components/welcome";
import Footer from "./components/Footer";
import About from './components/Aboutus';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div >
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
