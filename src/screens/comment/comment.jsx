import { useLocation } from "react-router-dom"
import "./styles.css"
import CommentBox from "../../components/CommentBox"

const Comment = () => {
    const location = useLocation()
    const comment = location.state

    return (
        <div className={"comment-container"}>
            <h3>Specific Comment</h3>
            <CommentBox comment={comment} />
        </div>
    )
}

export default Comment
