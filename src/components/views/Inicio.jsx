import { Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import "./inicio.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Inicio = () => {
    return (
        <main className="container">
            <h1 className="display-3 text-center">Bienvenidos</h1>
            <hr />
            <Row>
                <CardProducto />
            </Row>
        </main>
    );
};

export default Inicio;
