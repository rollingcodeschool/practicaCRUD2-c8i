import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
const Menu = () => {
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
                            <NavLink to="/administrar" className={"nav-item nav-link"}>
                                Aministrador
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Menu;
