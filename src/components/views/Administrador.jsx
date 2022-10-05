import { Button, Container, Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { Link } from "react-router-dom";
const Administrador = () => {
  return (
    <Container className="mainSection">
      <article className="d-flex justify-content-between align-items-center ">
        <h1 className="display-3 mt-3">Productos disponibles</h1>
        <Link className="h-100 btn btn-primary" to="/administrar/crear">
          Agregar
        </Link>
        <hr />
      </article>
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
    </Container>
  );
};

export default Administrador;
