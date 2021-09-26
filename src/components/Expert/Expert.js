import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import "./Expert.css";

const Expert = (props) => {
    const { name, image, salary, create, expert, age } = props.expert || {};
    return (
        <div className="card">
            <div className="card-img">
                <img src={image} alt="" />
            </div>
            <div className="card-info">
                <h3>{name}</h3>
                <p>
                    <small>Expert in {expert}</small>
                </p>
                <p>
                    <small>(Age: {age})</small>
                </p>
                <h5>
                    Founder of <i>{create}</i>{" "}
                </h5>
                <h4>Salary: ${salary}</h4>
            </div>
            <div>
                <button
                    onClick={() => props.handleHire(props.expert)}
                    className="card-btn"
                >
                    <FontAwesomeIcon icon={faHandshake} /> Add IN Project
                </button>
            </div>
        </div>
    );
};

export default Expert;
