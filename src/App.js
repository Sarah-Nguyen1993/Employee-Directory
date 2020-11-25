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
  let employeesNotFiltered
  const filterbyCook = () => {
    setEmployees(employees.filter((employee) => employee.title === "Cook"));
    employeesNotFiltered = employees.filter(employee => !employee.title === "Cook")
  };

  const sortByName = () => {
    setEmployees(
      [...employees].sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      })
    );
  };

  const reset = () => {
  
  }

  return (
    <Wrapper>
      <Title>Employee Directory</Title>
      <SortData clickHandler={sortByName} />
      <FilterData clickHandler={filterbyCook} />
      <Reset resetHandle={reset} />
      <EmployeeTable employeeState={employees} />
    </Wrapper>
  );
}

export default App;
