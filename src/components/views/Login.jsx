import { Form, Button, Container, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../helpers/queries";
import Swal from "sweetalert2";

const Login = ({ setUsuarioLogueado }) => {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    login(data).then((respuesta) => {
      console.log(respuesta);
      if (respuesta) {
        //almaceno el usuario en el state y localstorage
        localStorage.setItem("tokenUsuario", JSON.stringify(respuesta));
        setUsuarioLogueado(respuesta);
        // si el usuario es correcto entonces redirecciono al inicio
        //redireccionar al home
        navigate("/administrar");
      } else {
        Swal.fire(
          "El usuario no existe",
          "error en el nombre de usuario o password",
          "error"
        );
      }
    });
  };

  return (
    <Container className="mainSection">
      <Card className="my-5">
        <Card.Header as="h5">Login</Card.Header>
        <Card.Body>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese un email"
                {...register("usuario", {
                  required: "El nombre de usuario es obligatorio",
                })}
              />
              <Form.Text className="text-danger">
                {errors.usuario?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "El nombre de password es obligatorio",
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <div className="mb-3">
              <Link to={"/registro"}>Crear una cuenta</Link>
            </div>
            <Button variant="primary" type="submit">
              Iniciar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
