import React, {useEffect, useState} from "react"
import "./styles.css"
import CommentBox from "../../components/commentBox";
import CustomizedButton from "../../components/customizedButton/CustomizedButton";
import StarIcon from "../../assets/icons/StarIcon";
import Typography from "../../components/typography/Typography";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import TextField from "../../components/textField/TextField";

const Home = ({comments}) => {

    const [commentList, setCommentList] = useState([])

    useEffect(() => {
        setCommentList(comments)
    }, [comments])


    const handleAddComment = (values, {resetForm}) => {
        const newComment = {
            id: commentList.length + 1,
            name: values.title,
            body: values.text,
        };

        setCommentList([...commentList, newComment]);

        resetForm();
    };


    return (
        <div style={{padding: 15}}>
            <Typography variant="heading6">Home Page</Typography>
            <div className={"add-comment"}>
                <div className={"text-field-container"}>
                    {/*<TextField*/}
                    {/*    id="outlined-basic"*/}
                    {/*    label="Title"*/}
                    {/*    variant="outlined"*/}
                    {/*    className={"text-field"}*/}
                    {/*    value={title}*/}
                    {/*    onChange={(event) => setTitle(event.target.value)}*/}
                    {/*/>*/}

                    <Formik
                        initialValues={{title: "", text: ""}}
                        validationSchema={Yup.object({
                            title: Yup.string().required("Title is required"),
                            text: Yup.string().required("Comment is required"),
                        })}
                        onSubmit={handleAddComment}
                    >
                        {() => (
                            <Form>
                                <div className="text-field-container">
                                    <Field
                                        component={TextField}
                                        label="Title"
                                        variant="default"
                                        name="title"
                                        placeholder="Title"
                                    />

                                    <Field
                                        component={TextField}
                                        label="Comment"
                                        variant="default"
                                        name="text"
                                        placeholder="Comment"
                                    />
                                </div>

                                <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 10}}>
                                    <CustomizedButton variant="fulfilled" size="md" leftIcon={StarIcon} type="submit">
                                        Add Comment
                                    </CustomizedButton>
                                </div>
                            </Form>
                        )}
                    </Formik>

                </div>
            </div>

            <div>
                <Typography variant="heading6">Comments</Typography>

                {commentList.map((comment, index) => (
                    <CommentBox comment={comment} key={index} goBack={false}/>
                ))}

            </div>
        </div>
    )
}

export default Home
