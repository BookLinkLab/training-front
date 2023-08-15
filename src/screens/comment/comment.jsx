import { useLocation } from "react-router-dom"
import "./styles.css"
import CommentBox from "../../components/commentBox"
import {useEffect, useState} from "react";
import {getComment} from "../../service/apis";

const Comment = () => {

    const location = useLocation()
    const commentId = location.pathname.split("/")[2]
    const [comment, setComment] = useState({})


    useEffect(() => {
        getComment(commentId).then((response) => {
            setComment(response)
        })
    }, [commentId])

    return (
        <div className={"comment-container"}>
            <h3>Specific Comment</h3>
            <CommentBox comment={comment} goBack={true} />
        </div>
    )
}

export default Comment
