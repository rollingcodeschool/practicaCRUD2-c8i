import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'

const ItemProducto = ({producto}) => {
    const {id, nombreProducto, precio, imagen, categoria } = {...producto}

    return (
        <>
            <tr>
                {/* <td>{producto.id}</td> */}
                <td>{id}</td>
                <td>{nombreProducto}</td>
                <td>${precio}</td>
                <td>{imagen}</td>
                <td>{categoria}</td>
                <td className="text-center">
                    <Link className='btn btn-outline-warning me-1' to={`/administrar/editar/:id`}>
                        <i className="bi bi-arrow-clockwise text-warning"></i>
                    </Link>
                    <Button variant="outline-danger">
                        <i className="bi bi-x-lg text-danger"></i>
                    </Button>
                </td>
            </tr>
        </>
    );
};

export default ItemProducto;
