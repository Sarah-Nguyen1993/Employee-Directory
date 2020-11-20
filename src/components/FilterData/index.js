import React from "react";
function Filter(props){
    return(
        <div className="form-group col-md-4">
            <button className="btn btn-primary" onClick={props.clickHandler} >Filter By Cook</button>
        </div>
    )
};

export default Filter;