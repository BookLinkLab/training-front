import "./App.css"
import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

    useEffect(() => {
        getComments().then(comms => setComments(comms));
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home comments={comments} />}/>
                <Route path="/comment/:id" element={<Comment/>}/>
            </Routes>
        </Router>
    );
}

export default App
