import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/posts" passHref legacyBehavior>
              <Nav.Link>All posts</Nav.Link>
            </Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <Link href="/about" passHref legacyBehavior>
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link href="/about" passHref legacyBehavior>
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
