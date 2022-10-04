import { Card, Badge } from "react-bootstrap";
const DetalleProducto = () => {
    return (
        <>
            <Card className="container border rounded my-3 flex-row">
                <Card.Img
                    className="anchoFotoProducto"
                    variant="start"
                    src="https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <Card.Body>
                    <div className="anchoDetalleProducto">
                        <Card.Title>Brownie</Card.Title>
                        <hr />
                        <Badge bg="success">Success</Badge>
                        <Card.Text className="mt-3 fw-bold">Precio: $300</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default DetalleProducto;
