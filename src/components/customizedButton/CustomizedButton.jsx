import React from "react";
import "./styles.css";

export const CustomizedButton = (props) => {

    const {
        onClick,
        variant = "fulfilled",
        leftIcon: LeftIcon,
        rightIcon: RightIcon,
        size = "lg",
        children,
        disabled
    } = props;

    const buttonStyle = {
        padding: size === "sm" ? "8px 16px" : size === "md" ? "12px 16px" : "12px 16px",
        fontSize: size === "sm" ? "12px" : size === "md" ? "14px" : "16px",
    }

    return (
        <button onClick={onClick} className={`${variant} ${size}`} style={buttonStyle} disabled={disabled}>
            {!!LeftIcon &&
                <LeftIcon color={disabled ? "#747F86" : (variant === 'fulfilled' ? "white" : '#94313E')}
                          size={size === 'lg' ? 18 : 16}/>}
            {children}
            {!!RightIcon &&
                <RightIcon color={disabled ? "#747F86" : (variant === 'fulfilled' ? "white" : '#94313E')}
                           size={size === 'lg' ? 18 : 16}/>}
        </button>
    );
};

export default CustomizedButton;