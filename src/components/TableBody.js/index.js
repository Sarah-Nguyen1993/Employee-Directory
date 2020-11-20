import React from "react";

function TableBody(props){
    return (
        <tbody>
            <tr className="table-info">
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td>{props.title}</td>
            <td>{props.email}</td>
            </tr>
        </tbody>
    )
}
export default TableBody;