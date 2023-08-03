import { Card, CardContent, Typography, CardActions, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const CommentBox = ({ comment, goBack }) => {
    const navigate = useNavigate()

    const navigateToComment = () => {
        if (goBack) navigate("/")
        else navigate("/comment", { state: comment })
    }

    return (
        <Card elevation={3} style={{ margin: 10 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {comment.name}
                </Typography>
                <Typography variant="body2">{comment.body}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={navigateToComment}>
                    {goBack ? "Go Back" : "Learn More"}
                </Button>
            </CardActions>
        </Card>
    )
}

export default CommentBox
