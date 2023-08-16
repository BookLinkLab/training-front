import "./styles.css"

export default function CustomButton(props) {
    const {
        onClick,
        variant = "fulfilled",
        icon: Icon,
        leftIcon,
        rightIcon,
        size = "large",
        children,
        type,
        disabled } = props

        const iconComponent = <Icon size={size==='large'? 18 : 16} color={variant=== 'fulfilled' ? '#FFFFFF' : '#94313E'}/>

    return(
        <button className={`${variant} ${size}`} disabled={disabled} onClick={onClick} type={type}>{leftIcon && iconComponent}{children}{rightIcon && iconComponent}</button>
    )
    
}

