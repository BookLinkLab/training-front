import "./styles.css";
import PropTypes from "prop-types";
const CustomButton = ({variant = 'fulfilled', disabled = false, size = 'large', leftIcon: LeftIcon, rightIcon: RightIcon, onClick, children}) => {

    const buttonClasses = `${variant} ${size}`

    CustomButton.propTypes = {
        variant: PropTypes.oneOf(['fulfilled', 'outlined', 'ghost']),
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        disabled: PropTypes.bool
    };

    return (
        <button className={buttonClasses} onClick={onClick} disabled={disabled}>
            {!!LeftIcon &&
                <LeftIcon color={disabled ? '#747F86' : (variant === 'fulfilled') ? 'white' : '#94313E'}
                          size={size === 'large' ? 18 : 16}/>}
            {children}
            {/*{!!RightIcon && <RightIcon />}*/}
        </button>
    );
}
export default CustomButton;
