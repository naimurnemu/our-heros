import React from "react";
import "./Header.css";

const Header = () => {
    // use JSX
    return (
        <div className="header-container">
            <h1>Tech Leaders of Bangladesh</h1>
            <h5>
                Our weapons are mouse and keyboard. We create warriors in the
                dream of making ideas come true.
            </h5>
            <h2>
                Budget <u>$1 Million</u> for Spacial Application
            </h2>
        </div>
    );
};

export default Header;
