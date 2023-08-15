import "./App.css"
import React, {useEffect, useState} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home/home"
import {getComments} from "./service/apis";
import Comment from "./screens/comment/comment"
import Login from "./screens/login/login"

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

    useEffect( () => {
        //It is necessary to use the then, because since I am getting a promise, I need the data after the promise is resolved. 
        getComments().then((comments_aux)=>{
            setComments(comments_aux);
            
        });

        
    },[])
    
    
    


    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home comments={comments}/>}></Route>
                <Route exact path="/comment/:id" element={<Comment/>}></Route>
                <Route exact path="login" element={<Login/>}></Route>

            </Routes>
        </Router>
    );
}

export default App
