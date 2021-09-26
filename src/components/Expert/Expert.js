import React from "react";
import "./Expert.css";

const Expert = (props) => {
    
    const {name} = props.expert
    return (
        <div>
             
              <h2>{name}</h2>
        </div>
    );
};

export default Expert;

 