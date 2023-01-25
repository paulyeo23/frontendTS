import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { employeeData, newEmployeeData } from "../../Interfaces/interfaces";

const EmployeeCell: React.FC<employeeData | newEmployeeData> = (
  employeeData
) => {
  return (
    <Container>
      <Row>
        <div className="float-start">
          <h2 className="employee-name">{employeeData.name}</h2>
        </div>
      </Row>
      <Row>
        <Col className="float-start">{employeeData.department}</Col>
        <Col className="float-end">
          <Row>
            <i className="fa fa-pencil" />
          </Row>
          <Row>
            <i className="fa fa-trash-o" />
          </Row>
        </Col>
      </Row>
      <Row>
        <div className="float-start">{employeeData.salary}</div>
      </Row>
    </Container>
  );
};

export default EmployeeCell;
