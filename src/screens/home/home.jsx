import React from "react"
// import React, { useState, useEffect } from "react"
import { TextField, Button } from "@mui/material"
import "./styles.css"
// import { getComments } from "../../service/apis"
// import CommentBox from "../../components/CommentBox"

/**
 * Para agregar un comentario nuevo se pide el titulo y el texto del comentario para poder agregarlo a la lista de comentarios.
 * En este ejercicio se debe utilizar estados para guardar el titulo y el texto del comentario.
 * Tambien se debe utilizar AXIOS para hacer el llamado a la api y traer la lista de comentarios.
 */

const Home = () => {
    /**
     * Utilizar estados para guardar el titulo y el texto del comentario
     * y la lista de comentarios.
     */

    /**
     * Cuando se cargue el componente se debe traer la lista de comentarios
     * llamando al metodo getComments de la api.
     */

    const handleAddComment = () => {
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
                        value={"commentTitle"}
                        onChange={() => {}}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Comment"
                        variant="outlined"
                        className={"text-field"}
                        value={"commentText"}
                        onChange={() => {}}
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
                 *
                 * Ayuda: Para recorrer la lista de comentarios se puede utilizar el metodo map
                 */}
            </div>
        </div>
    )
}

export default Home
