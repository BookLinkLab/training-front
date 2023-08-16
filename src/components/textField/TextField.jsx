import React from "react";
import "./styles.css";

const TextField = ({ field, form, label, variant = "default", placeholder, required }) => {
    const { name } = field;
    const { errors, touched } = form;
    const hasError = errors[name] && touched[name];
    const updatedVariant = hasError ? "error" : variant;

    const getColors = getComputedStyle(document.documentElement);

    const errorColor400 = getColors.getPropertyValue('--error-error-400');

    return (
        <div>
            <div>
                <label>{label}</label>
            </div>
            <div>
                <input
                    type="text"
                    className={updatedVariant}
                    {...field}
                    placeholder={placeholder}
                    required={required}
                />
            </div>
            <div>
                <div style={{ color: updatedVariant === "error" ? errorColor400 : "black", fontSize: 12, marginTop: 4 }}>
                    {hasError ? errors[name] : ""}
                </div>
            </div>
        </div>
    );
};
export default TextField;
