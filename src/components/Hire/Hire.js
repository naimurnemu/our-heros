import React from "react";
import List from "../List/List";
import "./Hire.css";

const Hire = (props) => {
    const { hire } = props || {};
    let totalCost = 0;
    hire.forEach((jobholder) => {
        const { salary } = jobholder;
        totalCost = totalCost + parseFloat(salary);
    });
    return (
        <div className="count-card">
            <h3>Details of Hiring</h3>
            <h5>Total Hired person: {hire.length}</h5>
            {
                hire.map(list => <List list={list}></List>)
            }
            <h4>Hired cost: ${totalCost}</h4>
        </div>
    );
};

export default Hire;
