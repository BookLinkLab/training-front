import "./styles.css";
import PropTypes from 'prop-types';


const Button = ({
                    variant = "fulfilled",
                    leftIcon: LeftIcon,
                    rightIcon: RightIcon,
                    disabled = false,
                    OnClick,
                    children,
                    size = "large"
                }) => {

    //I think that maybe there are many conditions to check, but I think that it is the best way to do it
    return (
        <div>
            <button className={variant + " " + size} disabled={disabled} onClick={OnClick}>
                {!!LeftIcon &&
                    <LeftIcon color={variant === "fulfilled" ? "white" : "#94313E"} size={size === "large" ? 18 : 16}/>}
                {children}
                {!!RightIcon && <RightIcon color={variant === "fulfilled" ? "white" : "#94313E"}
                                           size={size === "large" ? 18 : 16}/>}
            </button>
        </div>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(["outlined", "ghost"]),
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium"]),
};

export default Button;



