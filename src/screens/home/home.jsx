import React, { useState} from "react"
import { TextField, Button } from "@mui/material"
import "./styles.css"
import CommentBox from "../../components/CommentBox";
// import { getComments } from "../../service/apis"
// import CommentBox from "../../components/CommentBox"

/**
 * Para agregar un comentario nuevo se pide el titulo y el texto del comentario para poder agregarlo a la lista de comentarios.
 * En este ejercicio se debe utilizar estados para guardar el titulo y el texto del comentario.
 * Tambien se debe utilizar AXIOS para hacer el llamado a la api y traer la lista de comentarios.
 */

const Home = ({comments}) => {
    /**
     * Utilizar estados para guardar el titulo y el texto del comentario
     * y la lista de comentarios.
     */
    const [commentTitle, setCommentTitle] = useState("")
    const [commentText, setCommentText] = useState("")

    const handleAddComment = async() => {
        /**
         * Se debe agregar el comentario a la lista de comentarios
         * y una vez agregado se debe limpiar los campos de texto.
         *
         * Ayuda: Para agregar un nuevo comentario se debe crear un objeto parecido al siguiente
         * {
         *   id: comments.length + 1,
         *   name: commentTitle,
         *   body: commentText,
         *  }
         */
        const newComment = {
            postId: 1,
            id: comments.length + 1,
            name: commentTitle,
            body: commentText,
            email: "pepe@gmail.com"
        }
        setCommentTitle("")
        setCommentText("")
        comments.push(newComment)

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
                         <CommentBox comment={comment} goBack={false} />
                    </div>
                ))}
                {/*
                 * Se debe recorrer la lista de comentarios y por cada comentario se debe
                 * renderizar el componente CommentBox.
                 *
                 * Ayuda: Para recorrer la lista de comentarios se puede utilizar el metodo map
                 */}
            </div>
        </div>
    )
}

export default Home
