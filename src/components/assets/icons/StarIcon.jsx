const StarIcon = ({size, color}) => {

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 17.5196L16.15 20.0296C16.91 20.4896 17.84 19.8096 17.64 18.9496L16.54 14.2296L20.21 11.0496C20.88 10.4696 20.5199 9.36958 19.6399 9.29958L14.81 8.88958L12.92 4.42958C12.58 3.61958 11.42 3.61958 11.08 4.42958L9.18995 8.87958L4.35995 9.28958C3.47995 9.35958 3.11995 10.4596 3.78995 11.0396L7.45995 14.2196L6.35995 18.9396C6.15995 19.7996 7.08995 20.4796 7.84995 20.0196L12 17.5196Z"
                fill={color}/>
        </svg>
    );
}

export default StarIcon;