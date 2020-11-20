import React from "react";
function Reset(props){
    return(
        <div className="form-group col-md-4">
            <button className="btn btn-primary" onClick={props.resetHandler} >Reset</button>
        </div>
    )
};

export default Reset;