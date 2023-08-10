import { Card, CardContent, Typography, CardActions, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const CommentBox = ({ comment, goBack }) => {
    const navigate = useNavigate()

    const navigateTo = () => {
        if (goBack) {
            navigate('/')
        }
        else {
            navigate(`/comment/${comment.id}`)
        }
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
                {comment.id <= 5 && <Button size="small" onClick={navigateTo}>
                    {goBack ? "Go Back" : "Learn More"}
                </Button>}
            </CardActions>
        </Card>
    )
}

export default CommentBox
