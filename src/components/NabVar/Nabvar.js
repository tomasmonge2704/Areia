import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";
import logo from "../../SELECCION DE FOTOS/Areia_Logotipo_Color.png";
import { Link } from "react-router-dom";
export default function Nabvar({ section }) {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#1c1c1c" }}>
      <Container>
        <Navbar.Brand href="#home" id="logoMobile" style={{ width: "100px" }}>
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <img id="navLogo" src={logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link to={`/`} id="navInicio" style={{ textDecoration: "none" }}>
              <Nav.Link className={section} href="#features">
                INICIO
              </Nav.Link>
            </Link>
            <Link
              to={`/nosotros`}
              id="navNosotros"
              style={{ textDecoration: "none" }}
            >
              <Nav.Link
                href="#pricing"
                className={section}
                style={{ marginRight: "5vh", marginLeft: "2vh" }}
              >
                NOSOTROS
              </Nav.Link>
            </Link>
          </Nav>
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <Nav id="navLogoA">
              <Navbar.Brand
                href="#home"
                style={{ width: "120px", height: "100px" }}
              >
                <img id="navLogo" src={logo} />
              </Navbar.Brand>
            </Nav>
          </Link>
          <Nav>
            <Link
              to={`/eventos`}
              id="navEventos"
              style={{ textDecoration: "none" }}
            >
              <Nav.Link
                href="#deets"
                className={section}
                style={{ marginLeft: "4vh", marginRight: "2vh" }}
              >
                EVENTOS
              </Nav.Link>
            </Link>
            <Link
              to={`/contacto`}
              id="navContacto"
              
              style={{ textDecoration: "none" }}
            >
              <Nav.Link
              href="#deets"
                className={section}
              >
                CONTACTO
              </Nav.Link>
            </Link>
            <div id="socialIcons">
              <a href="https://www.instagram.com/areiafutbol/">
                <i className="fa fa-instagram"></i>{" "}
              </a>
              <a href="#">
                <i className="fa fa-phone"></i>{" "}
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
