import { useField } from "formik";
import "./styles.css"

export default function CustomTextField(props){
    const{
        variant = 'default',
        label,
        ...otherProps
    } = props

    const [field, meta] = useField(props);

    return(
        <div className="textfield">
            <label className="body2 labelTextField">{label}</label>
            <input className={variant} {...field} {...otherProps}></input>
            {meta.touched && meta.error ? (
            <small className="body3 smallTextField">{meta.error}</small>
             ) : null}
            
        </div>
    )

}