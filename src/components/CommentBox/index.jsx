import { Card, CardContent, Typography, CardActions, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import {useEffect} from "react";
import {getComment} from "../../service/apis";

const CommentBox = ({ comment, goBack }) => {
    const navigate = useNavigate()

    const navigateTo = () => {
        /**
         * Si goBack es true se debe navegar a la pagina anterior.
         * Si goBack es false se debe navegar a la pagina de comment y pasarle el commentId mediante params
         *
         * Ayuda: Para navegar a la pagina de comment se debe utilizar el metodo navigate de useNavigate
         * (navigate(`/comment/${comment.id}`))
         */

        if (goBack) {
            navigate(`/`)
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
