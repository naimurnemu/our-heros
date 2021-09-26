import React from "react";
import List from "../List/List";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import "./Hire.css";

const Hire = (props) => {
    const { hire } = props || {};
    let totalCost = 0;
    hire.forEach((jobholder) => {
        const { salary } = jobholder;
        totalCost = totalCost + parseFloat(salary);
    });
    const reloadNow = ()=>{
        window.location.reload()
    }
    return (
        <div className="count-card">
            <h3>Details of Hiring</h3>
            <h5>Total Hired person: {hire.length}</h5>
            {
                hire.map(list => <List list={list}></List>)
            }
            <h4>Hired cost: ${totalCost}</h4>
            <button onClick={reloadNow} className="confirm-btn">
            <FontAwesomeIcon icon={faCheckCircle} /> Confirm
            </button>
        </div>
    );
};

export default Hire;
