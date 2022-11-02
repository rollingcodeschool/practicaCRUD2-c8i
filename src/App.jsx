import "bootstrap/dist/css/bootstrap.min.css";
import './app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administrador from "./components/views/Administrador";
import Inicio from "./components/views/Inicio";
import Error from "./components/views/Error";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import DetalleProducto from "./components/views/producto/DetalleProducto";
import CrearProducto from "./components/views/producto/CrearProducto";
import EditarProducto from "./components/views/producto/EditarProducto";

function App() {
    return (
        //administrar las rutas;
        <BrowserRouter>
            <Menu />
            <Routes>
                {/* dominio + path */}
                <Route exact path="/" element={<Inicio />} />
                <Route exact path="/administrar" element={<Administrador />} />
                <Route path="*" element={<Error />} />
                <Route exact path="/administrar/detalle/:id" element={<DetalleProducto />} />
                <Route exact path="/administrar/crear" element={<CrearProducto />} />
                <Route exact path="/administrar/editar/:id" element={<EditarProducto />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
