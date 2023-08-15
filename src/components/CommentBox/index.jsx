import {Card, CardContent, Typography, CardActions} from "@mui/material"
import {useNavigate} from "react-router-dom"
import CustomButton from "../Button";

const CommentBox = ({comment, goBack}) => {
    const navigate = useNavigate()

    const navigateTo = () => {
        navigate(goBack ? '/' : `/comment/${comment.id}`);
    }

    return (
        <Card elevation={3} style={{margin: 10}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {comment.name}
                </Typography>
                <Typography variant="body2">{comment.body}</Typography>
            </CardContent>
            <CardActions>
                {comment.id <= 5 && <CustomButton size="small" variant='outlined' onClick={navigateTo}>
                    {goBack ? "Go Back" : "Learn More"}
                </CustomButton>}
            </CardActions>
        </Card>
    )
}

export default CommentBox
