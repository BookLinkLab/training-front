import "./styles.css"

export default function CustomButton(props) {
    const {
        onclick,
        variant = "fulfilled",
        icon,
        size = "large",
        children,
        disabled } = props

    return(
        <button className={`${variant} ${size}`} disabled={disabled} onClick={onclick}>{icon}{children}{icon}</button>
    )
    
}

