import "./styles.css"

export default function TextField(props){
    const{
        onChange,
        variant = 'default',
        label,
        placeholder,
        helperText,
        value
    } = props

    return(
        <div className="textfield">
            <label className="body2 labelTextField">{label}</label>
            <input className={variant} placeholder={placeholder} onChange={onChange} value={value}></input>
            <small className="body3 smallTextField">{helperText}</small>
        </div>
    )

}