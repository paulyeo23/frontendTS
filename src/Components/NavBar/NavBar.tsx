import { Button, Col, Container, Row } from "react-bootstrap";
import "./NavBar.css";
import "./Circle.css";

const NavBar: React.FC = () => {
  return (
    <nav className="navBar">
      <Container>
        <Row>
          <Col>
            <h2 className="float-left">Employees</h2>
          </Col>
          <Col className="float-right">
            <a href="">
              <Button className="navButton mobile-false float-end ">
                <Container className="">
                  <Row>
                    <Col>
                      <span className="circle plus float-start"></span>
                    </Col>
                    <Col>Add Employee</Col>
                  </Row>
                </Container>
              </Button>
              <span className="circle plus mobile-true float-end"></span>
            </a>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default NavBar;
