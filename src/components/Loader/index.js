import React from "react";

const Loader = ({ show }) => {
    return (
        <div
            id="overlay"
            className={show ? "show-spinner" : "hide-spinner"}
        >
            <img src="./Logo.gif"></img>
        </div>
    );
};

export default Loader;