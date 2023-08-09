import "./App.css"
import React, {useEffect, useState} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home/home"
import {getComments} from "./service/apis";
import Comment from "./screens/comment/comment"

/**
 * Agregar rutas para poder navegar entre las pantallas Home y Comment
 * la ruta '/' -> Home
 * la ruta '/comment' -> Comment
 *
 * Ayuda: Se deben utilizar las rutas de react-router-dom
 */

function App() {

    const [comments, setComments] = useState([])

    /**
     * TODO 1: Obtener los comentarios desde el servicio de apis y guardarlos en el estado
     * Ayuda: Se debe utilizar el servicio de apis
     * 2. Crear una ruta para la home '/'
     * 3. Crear una ruta para poder ver el detalle de un comentario y pasarle el id del comentario '/comment/:id'
     * Ayuda: Utilizar BrowserRouter, Routes y Route de react-router-dom
     */

    useEffect(() => {
        getComments().then((data) => {
            setComments(data)
        })
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home comments={comments}/>}/>
                <Route path="/comment/:id" element={<Comment />}/>
            </Routes>
        </Router>
    );
}

export default App
