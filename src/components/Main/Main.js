import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Expert from "../Expert/Expert";
import Hire from "../Hire/Hire";
import "./Main.css";

const Main = () => {
    const [experts, setExperts] = useState([]);
    const [hire, setHire] = useState([]);

    useEffect(() => {
        fetch("https://mocki.io/v1/8460b572-6039-4439-a474-5fca9b6da03a")
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
