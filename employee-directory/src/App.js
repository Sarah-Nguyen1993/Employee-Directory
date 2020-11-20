import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeTable from "./components/EmployeeTable";
import SortData from "./components/SortData";
import FilterData from "./components/FilterData";
import Reset from "./components/Reset";
import employeesArray from "./employees.json";

function App() {
  const [employees, setEmployees] = useState(employeesArray);

  return (
    <Wrapper>
      <Title>Employee Directory</Title>
      <EmployeeTable employeeState={employees} />
    </Wrapper>
  );
}

export default App;
