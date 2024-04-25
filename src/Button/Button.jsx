import React from 'react';

const Button = ({ text, style }) => {
    const defaultButtonStyles = {
        appearance: "none",
        border: "none",
        outline: "none",
        background: "none",
        margin: "10px 0px",
        cursor: "pointer",
        width: "80px",
        height: "30px",
        fontSize: "1.125rem",
    };

    const buttonStyles = { ...defaultButtonStyles, ...style };

    return <button style={buttonStyles}>{text}</button>;
}

export default Button;
