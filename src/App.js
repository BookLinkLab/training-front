import "./App.css"
import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./screens/home/home"
import {getComments} from "./service/apis";
import Comment from "./screens/comment/comment";
function App() {

    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments().then(comments => setComments(comments));
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home comments={comments}/>}/>
                <Route path="/comment/:id" element={<Comment/>}/>
            </Routes>
        </Router>
    );
}

export default App
