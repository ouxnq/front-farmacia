import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import ListaCategorias from "./components/Categorias/listaCategorias/ListaCategorias";
import FormularioCategorias from "./components/Categorias/formularioCategorias/FormularioCategorias";
import DeletarCategoria from "./components/Categorias/deletarCategoria/DeletarCategoria";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className='min-h-[70vh]'>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastroCategoria" element={<FormularioCategorias />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategorias />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
