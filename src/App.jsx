import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administrador from "./components/views/Administrador";
import Inicio from "./components/views/Inicio";
import Error from "./components/views/Error";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";

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
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
