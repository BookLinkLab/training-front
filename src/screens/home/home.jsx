import React from "react";
import { TextField } from "@mui/material";
import "./styles.css";
import CommentBox from "../../components/CommentBox";
import { Formik, Form, Field } from "formik";
import CustomButton from "../../components/button/button";

const Home = ({ comments, setComments }) => {
    const handleAddComment = async (values, { resetForm }) => {
        const newComment = {
            id: comments.length + 1,
            name: values.title,
            body: values.comment,
        };

        setComments([newComment, ...comments]); // Adds to the beginning of the array

        resetForm();
    };

    const validateForm = (values) => {
        const errors = {};

        if (!values.title) {
            errors.title = "Title is required";
        }

        if (!values.comment) {
            errors.comment = "Comment is required";
        }

        return errors;
    };

    return (
        <div style={{ padding: 15 }}>
            <h1>Home Page</h1>
            <div className={"add-comment"}>
                <div className={"text-field-container"}>
                    <Formik
                        initialValues={{
                            title: "",
                            comment: "",
                        }}
                        onSubmit={handleAddComment}
                        validate={validateForm}
                    >
                        {({ errors }) => (
                            <Form>
                                <TextField
                                    label="Title"
                                    placeholder='Title'
                                    variant
                                    value={title}
                                    helperText
                                    onChange={e => setTitle(e.target.value)}
                                />
                                <TextField
                                    label="Comment"
                                    placeholder='Comment'
                                    variant
                                    value={body}
                                    helperText
                                    onChange={e => setBody(e.target.value)}
                                />
                                <CustomButton type="submit" size="small">
                                    Add Comment
                                </CustomButton>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <div>
                <h2>Comments</h2>
                {comments.map((comment) => (
                    <CommentBox key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    );
};

export default Home;
