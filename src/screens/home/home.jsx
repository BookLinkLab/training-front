import React, { useState} from "react"
import { TextField, Button } from "@mui/material"
import "./styles.css"
import CommentBox from "../../components/CommentBox";


const Home = ({comments, setComments}) => {
    const [commentTitle, setCommentTitle] = useState('');
    const [commentText, setCommentText] = useState('');
    
    const handleAddComment = async() => {

        const newComment ={
            id: comments.length +1,
            name: commentTitle,
            body: commentText,
        };

        setComments([newComment, ...comments]) //agrega adelante

        setCommentTitle('');
        setCommentText('');

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
                        onChange={(event) => {
                            setCommentTitle(event.target.value)}}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Comment"
                        variant="outlined"
                        className={"text-field"}
                        value={commentText} 
                        onChange={(event) => {
                            setCommentText(event.target.value)}} 
                    />
                </div>
                <Button variant="contained" onClick={handleAddComment} className={"add-button"}>
                    Add Comment
                </Button>
            </div>
            <div>
                <h2>Comments</h2>


                {comments.map((comment) => (
                    <CommentBox key={comment.id} comment={comment}/>
                ))}
            
            </div>
        </div>
    )
}

export default Home
