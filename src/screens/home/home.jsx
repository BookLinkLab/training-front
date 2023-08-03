import React, { useState} from "react"
import { TextField, Button } from "@mui/material"
import "./styles.css"
import CommentBox from "../../components/CommentBox";

/**
 * Para agregar un comentario nuevo se pide el titulo y el texto del comentario para poder agregarlo a la lista de comentarios.
 * En este ejercicio se debe utilizar estados para guardar el titulo y el texto del comentario.
 */

const Home = ({comments}) => {
    /**
     * TODO Utilizar estados para guardar el titulo y el texto del comentario
     * y la lista de comentarios.
     */

    const handleAddComment = async() => {
        /**
         * TODO Se debe agregar el comentario a la lista de comentarios
         * y una vez agregado se debe limpiar los campos de texto (los inputs texts se vacian).
         *
         * Ayuda: Para agregar un nuevo comentario se debe crear un objeto parecido al siguiente
         * {
         *   id: comments.length + 1,
         *   name: commentTitle,
         *   body: commentText,
         *  }
         */

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
                        value={""} // TODO Agregar valor
                        onChange={() => {}} // TODO settear valor
                    />
                    <TextField
                        id="outlined-basic"
                        label="Comment"
                        variant="outlined"
                        className={"text-field"}
                        value={""} // TODO Agregar valor
                        onChange={() => {}} // TODO settear valor
                    />
                </div>
                <Button variant="contained" onClick={handleAddComment} className={"add-button"}>
                    Add Comment
                </Button>
            </div>
            <div>
                <h2>Comments</h2>
                {/*
                 * Se debe recorrer la lista de comentarios y por cada comentario se debe
                 * renderizar el componente CommentBox.
                 * <CommentBox comment={} goBack={} />
                 *
                 * Ayuda: Para recorrer la lista de comentarios se puede utilizar el metodo map
                 */}
            </div>
        </div>
    )
}

export default Home
