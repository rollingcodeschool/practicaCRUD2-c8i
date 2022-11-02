import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
    const navigate =  useNavigate();

    const logout = ()=>{
        localStorage.removeItem('tokenUsuario');
        setUsuarioLogueado({});
        navigate('/')
    }

  return (
    <header>
      <Navbar bg="danger" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Cafe Sampy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Inicio
              </Nav.Link>
              {usuarioLogueado.usuario ? (
                <>
                  <NavLink to="/administrar" className={"nav-item nav-link"}>
                    Aministrador
                  </NavLink>
                  <NavLink to="/registro" className={"nav-item nav-link"}>
                    Registrar
                  </NavLink>
                  <Button variant='dark' onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <NavLink to="/login" className={"nav-item nav-link"}>
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
