
export const Typography = (props) => {

    const {children, variant} = props;

    return (
        <div>
            <text className={variant}>{children}</text>
        </div>
    );
}

export default Typography;