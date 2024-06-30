import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavbarBootstrap() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" >
        <Container>
          <Navbar.Brand href="#home">
            <img src='../logo.png' alt='navigation logo' height={100}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <button href="">Contact Me</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

// var can be redeclared
// let can be reassigned (counter example - number increase by +1)
// const is constant, does not change value

// 5 main types of variables
    // stings, numbers, booleans, arrays, and objects
    // functions fall under objects