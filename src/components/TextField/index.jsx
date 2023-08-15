import PropTypes from "prop-types";
import "./styles.css";

const TextField = ({label, variant = 'default', value, onChange, helperText, placeholder}) => {

    TextField.propTypes = {
        variant: PropTypes.oneOf(['default', 'error'])
    };

    return (
        <div className='form-style'>
            <label className='body2'>{label}</label>
            <input className={variant}
                   placeholder={placeholder}
                   onChange={onChange}
                   value={value}/>
            <helperText className='body3' style={{color: (variant === 'default') ? '#0C1012' : '#DA786B'}}>{helperText}</helperText>
        </div>

    )
}
export default TextField;