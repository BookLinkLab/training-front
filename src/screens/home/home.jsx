import React, {useEffect, useState} from "react"
import { TextField, Button } from "@mui/material"
import "./styles.css"
import CommentBox from "../../components/CommentBox";

/**
 * Para agregar un comentario nuevo se pide el titulo y el texto del comentario para poder agregarlo a la lista de comentarios.
 * En este ejercicio se debe utilizar estados para guardar el titulo y el texto del comentario.
 */

const Home = ({comments}) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [commentsList, setCommentsList] = useState(comments)

    useEffect(() => {
        setCommentsList(comments)
    }, [comments])

    const resetInputs = () => {
        setTitle('')
        setBody('')
    }

    const handleAddComment = async() => {
        const newComment = {
            id: commentsList.length + 1,
            name: title,
            body: body
        };
        setCommentsList([...commentsList, newComment])
        resetInputs()
    }

    const changeBody = (event) => {
        setBody(event.target.value);
    }

    const changeTitle = (event) => {
        setTitle(event.target.value);
    }

    return (
        <div style={{ padding: 15 }}>
            <h1>Home Page</h1>
            <div className={"add-comment"}>
                <div className={"text-field-container"}>
                    <TextField
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        className={"text-field"}
                        value={title}
                        onChange={changeTitle}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Comment"
                        variant="outlined"
                        className={"text-field"}
                        value={body}
                        onChange={changeBody}
                    />
                </div>
                <Button variant="contained" onClick={handleAddComment} className={"add-button"}>
                    Add Comment
                </Button>
            </div>
            <div>
                <h2>Comments</h2>
                {commentsList.map((comm) => (<CommentBox key={comm.id} comment={comm} goBack={false} />))}
            </div>
        </div>
    )
}

export default Home
