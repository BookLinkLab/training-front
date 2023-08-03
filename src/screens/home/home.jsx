import React, { useState, useEffect } from "react"
import CommentBox from "../../components/CommentBox"
import { TextField, Button } from "@mui/material"
import "./styles.css"
import { getComments } from "../../service/apis"

const Home = () => {
    const [commentTitle, setCommentTitle] = useState("")
    const [commentText, setCommentText] = useState("")
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments().then((data) => setComments(data))
    }, [])

    const handleAddComment = () => {
        const newComment = {
            id: comments.length + 1,
            name: commentTitle,
            body: commentText,
        }
        setComments([...comments, newComment])
        setCommentTitle("")
        setCommentText("")
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
                        value={commentTitle}
                        onChange={(e) => setCommentTitle(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Comment"
                        variant="outlined"
                        className={"text-field"}
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                </div>
                <Button variant="contained" onClick={handleAddComment} className={"add-button"}>
                    Add Comment
                </Button>
            </div>
            <div>
                <h2>Comments</h2>
                {comments.map((comment) => (
                    <div key={comment.id}>
                        <CommentBox comment={comment} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
