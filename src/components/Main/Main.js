import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Expert from "../Expert/Expert";
import "./Main.css";

const Main = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch("https://mocki.io/v1/b56089d1-7365-4201-95ea-88c0ed792136")
            .then((res) => res.json())
            .then((data) => setExperts(data));
    }, []);
    return (
        <div className="container">
            {/* Our Experts */}
            <div className="expert-container">
                
                {experts.map((expert) => (
                    <Expert expert={expert} key={expert.id}></Expert>
                ))}
            </div>
            {/* Hire Now */}
            <div className="hire-container">
                <h2>hire now</h2>
            </div>
        </div>
    );
};

export default Main;
