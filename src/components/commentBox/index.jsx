import {Card, CardContent, CardActions} from "@mui/material"
import {useNavigate} from "react-router-dom"
import CustomizedButton from "../customizedButton/CustomizedButton";
import "../../index.css"
import Typography from "../typography/Typography";
import React from "react";

const CommentBox = ({comment, goBack}) => {
    const navigate = useNavigate()

    const navigateTo = () => {

        {
            goBack ? navigate("/") : navigate(`/comment/${comment.id}`)
        }
    }

    return (
        <Card elevation={3} style={{margin: 10}}>
            <CardContent>
                <Typography variant={"heading4"}>
                    {comment.name}
                </Typography>
                <Typography variant="body2">{comment.body}</Typography>
            </CardContent>
            <CardActions>
                {comment.id <= 5 &&
                    // <Button size="small" onClick={navigateTo}>
                    //     {goBack ? "Go Back" : "Learn More"}
                    // </Button>}
                    <CustomizedButton size={"sm"} onClick={navigateTo} variant={"outlined"}>
                        {goBack ? "Go Back" : "Learn More"}
                    </CustomizedButton>
                }
            </CardActions>
        </Card>
    )
}

export default CommentBox
