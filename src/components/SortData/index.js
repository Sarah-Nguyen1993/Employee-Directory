import React from "react";

function Sort(props){
    return(
      <div className="form-group col-md-4">
        <button className="btn btn-primary" onClick={props.clickHandler} >Sort By Name</button>
      </div>
    )
};

export default Sort;