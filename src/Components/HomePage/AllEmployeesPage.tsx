import { Container, Row, Col } from "react-bootstrap";
import EmployeeCell from "./EmployeeCell";
import { employeeData, newEmployeeData } from "../../Interfaces/interfaces";
import { useDispatch } from "react-redux";
import axios from "axios";

const AllEmployeesPage: React.FC<employeeData[]> = () => {
  const dispatch = useDispatch();
  console.log(dispatch({ type: "getAllEmployees" }));
  return <div></div>;
};
