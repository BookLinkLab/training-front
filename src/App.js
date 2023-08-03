import "./App.css"
import React from "react"
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./screens/home/home"
// import Comment from "./screens/comment/comment"

/**
 * Agregar rutas para poder navegar entre las pantallas Home y Comment
 * la ruta '/' -> Home
 * la ruta '/comment' -> Comment
 *
 * Ayuda: Se deben utilizar las rutas de react-router-dom
 */

function App() {
    return (
        <Home />
        // <Comment />
    )
}

export default App
