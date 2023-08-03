import "./App.css"
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./screens/home/home"
import Comment from "./screens/comment/comment"

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/comment" element={<Comment />} />
            </Routes>
        </Router>
    )
}

export default App
