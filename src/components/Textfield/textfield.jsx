import "./styles.css"
import PropTypes from 'prop-types';
import {useField} from 'formik';


const Textfield = ({labelInput, variant = "default", helperTextInput, onSubmit, placeholder, onChange: onChangeFunction, name, type}) => {
    const [field, meta] = useField(name);



    return (
        <div className="text-field">
            <div className="label-div">
                <label className="body2" htmlFor={name}>{!!labelInput && labelInput}</label>
            </div>
            {meta.touched && meta.error && (() => {
                variant = "error";
                helperTextInput = "Required";
            })()}
            <div className={variant}>
                <input type={type} className="input body1" {...field} placeholder={placeholder}></input>


                {/*{meta.touched && meta.error ? (*/}
                {/*    <div className="error">{meta.error}</div>*/}
                {/*) : null}*/}

            </div>
            <div className={"helperText-div " + variant}>
                <label className="body3">{!!helperTextInput && helperTextInput}</label>
            </div>
        </div>

    );

}

Textfield.propTypes = {
    variant: PropTypes.oneOf(["error", "placeholder"]),
    labelInput: PropTypes.string,
    helperTextInput: PropTypes.string,
    placeholder: PropTypes.string,
}


export default Textfield;