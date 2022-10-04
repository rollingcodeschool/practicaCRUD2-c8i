import { Button, Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
const Administrador = () => {
    return (
        <>
            <section className="container">
                <article className="d-flex justify-content-between align-items-center ">
                    <h1 className="display-3 mt-3">Productos disponibles</h1>
                    <Button variant="primary" className="h-100">
                        Agregar
                    </Button>
                </article>
                <hr />
            </section>
            <section className="container">
                <Table responsive striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Cod</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>URL de imagen</th>
                            <th>Cat</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <ItemProducto />
                    </tbody>
                </Table>
            </section>
        </>
    );
};

export default Administrador;
