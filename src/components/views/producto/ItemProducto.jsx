import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'

const ItemProducto = () => {
    return (
        <>
            <tr>
                <td>1</td>
                <td>Brownie</td>
                <td>$300</td>
                <td>https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1</td>
                <td>Dulce</td>
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
