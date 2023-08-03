import { useLocation } from "react-router-dom"
import "./styles.css"
import CommentBox from "../../components/CommentBox"
import {useEffect, useState} from "react";
import {getComment} from "../../service/apis";

const Comment = () => {
    const location = useLocation()
    const commentId = location.pathname.split("/")[2]
    const [comment, setComment] = useState({})

    /**
     * TODO Utilizar useEffect para obtener el comentario con el id commentId
     * Se requiere utilizar el servicio getComment(id) para obtener el comentario. (ver service/apis.js)
     */

    return (
        <div className={"comment-container"}>
            <h3>Specific Comment</h3>
            <CommentBox comment={comment} goBack={true} />
        </div>
    )
}

export default Comment
