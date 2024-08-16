import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <div className='min-h-[70vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
