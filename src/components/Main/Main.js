import React, { useEffect, useState } from "react";
import Expert from "../Expert/Expert";
import Hire from "../Hire/Hire";
import "./Main.css";

const Main = () => {
    const [experts, setExperts] = useState([]);
    const [hire, setHire] = useState([]);

    useEffect(() => {
        fetch(`./local_api.JSON`)
            .then((res) => res.json())
            .then((data) => setExperts(data));
    }, []);

    const handleHire = (hiring) => {
        const newHire = [...hire, hiring];
        setHire(newHire);
    };
    return (
        <div className="container">
            {/* Our Experts */}
            <div className="expert-container">
                {experts.map((expert) => (
                    <Expert
                        expert={expert}
                        handleHire={handleHire}
                        key={expert.id}
                    ></Expert>
                ))}
            </div>
            {/* Hire Now */}
            <div className="hire-container">
                <Hire hire={hire}></Hire>
            </div>
        </div>
    );
};

export default Main;
