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
        type='button',
        disabled } = props

        const iconComponent = Icon ? <Icon size={size==='large'? 18 : 16} color={variant === 'fulfilled' ? '#FFFFFF' : '#94313E'}/> : null

    return(
        <button className={`${variant} ${size}`} disabled={disabled} onClick={onClick} type={type}>{leftIcon && iconComponent}{children}{rightIcon && iconComponent}</button>
    )
    
}

