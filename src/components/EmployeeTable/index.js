import React from "react";
import TableBody from "../TableBody.js"
import TableHead from "../TableHead"

function EmployeeTable (props) {
    return (
      <table className="table table-sm table-primary text-center">
        <TableHead/>
        {props.employeeState.map(employee => (
          <TableBody
            id={employee.id}
            name={employee.name}
            title={employee.title}
            email={employee.email}
          />
        ))}
      </table> 
    )
}

export default EmployeeTable;
