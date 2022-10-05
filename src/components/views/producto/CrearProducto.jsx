import { Form, Button, Container } from "react-bootstrap";
import {useForm} from 'react-hook-form';


const CrearProducto = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data)=>{
        console.log(data)
    }

    return (
        <Container className="mainSection">
            <section className="container my-3">
                <h3 className="display-4">Nuevo Producto</h3>
                <hr />
            </section>
            <section className="container my-3">
                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre producto*</Form.Label>
                        <Form.Control required 
                        type="text" 
                        placeholder="Ej:cafe" 
                        {...register('nombreProducto',{
                            required:true
                        } )}
                         />
                        <Form.Text className="text-danger">algun error</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Precio*</Form.Label>
                        <Form.Control required type="number" placeholder="Ej:50" />
                        <Form.Text className="text-danger">algun error</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Imagen URL*</Form.Label>
                        <Form.Control required type="text" placeholder="Ej:'https://....'" />
                        <Form.Text className="text-danger">algun error</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Select aria-label="Default select example">
                            <option value="">Seleccione una opción...</option>
                            <option value="1">Calientes</option>
                            <option value="2">Frios</option>
                            <option value="3">Dulces</option>
                            <option value="4">Salados</option>
                        </Form.Select>
                        <Form.Text className="text-danger">algun error</Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                </Form>
            </section>
        </Container>
    );
};

export default CrearProducto;
