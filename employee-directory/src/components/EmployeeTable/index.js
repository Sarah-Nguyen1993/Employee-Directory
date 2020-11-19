import React, {Component} from "react";
import TableBody from "../TableBody.js"
import TableHead from "../TableHead"
import employees from "../../employees.json"

class EmployeeTable extends Component {
  state = {employees};
  render() {
    return (
      <table className="table table-sm table-primary text-center">
        <TableHead/>
        {this.state.employees.map(employee => (
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
}

export default EmployeeTable;
