// import files
import React, { useEffect, useState } from "react";
import Expert from "../Expert/Expert";
import Hire from "../Hire/Hire";
import "./Main.css";


const Main = () => {
    // use state for expart
    const [experts, setExperts] = useState([]);

    // use state for cart
    const [hire, setHire] = useState([]);

    // data fetch form local api
    useEffect(() => {
        fetch(`./local_api.JSON`)
            .then((res) => res.json())
            .then((data) => setExperts(data));
    }, []);

    // immute set data
    const handleHire = (hiring) => {
        const newHire = [...hire, hiring];
        setHire(newHire);
    };
    // use jsx
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
