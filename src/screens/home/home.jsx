import React, {useEffect, useState} from "react"
import TextField from "../../components/TextField";
import "./styles.css"
import CommentBox from "../../components/CommentBox";
import CustomButton from "../../components/Button";
import {Form, Formik} from "formik";
import * as Yup from 'yup';

const Home = ({comments}) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [commentsList, setCommentsList] = useState(comments)

    useEffect(() => {
        setCommentsList(comments)
    }, [comments])

    const resetInputs = () => {
        setTitle('')
        setBody('')
    }

    const handleAddComment = async () => {
        if (title !== '' && body !== '') {
            const newComment = {
                id: commentsList.length + 1,
                name: title,
                body: body
            };
            setCommentsList([...commentsList, newComment])
            resetInputs();
            // Error message reset not working!!
            // formik.setFieldError("title", "");
            // formik.setFieldError("comment", "");
        }
    }

    return (
        <div style={{padding: 15}}>
            <h1>Home Page</h1>
            <div className={"add-comment"}>
                <div className={"text-field-container"}>
                    <Formik initialValues={{title: '', comment: ''}}
                            validationSchema={Yup.object().shape({
                                title: Yup.string().required('This field is required'),
                                comment: Yup.string().required('This field is required')
                            })}
                            onSubmit={async (values, {setSubmitting, resetForm}) => {
                                if (!values.title || !values.comment) {
                                    setSubmitting(false);
                                    return; // Don't proceed if fields are empty
                                }
                                await handleAddComment();
                                resetForm();
                                setSubmitting(false);
                            }}
                    >
                        {({errors, touched, handleSubmit, isSubmitting}) => (
                            <Form onSubmit={handleSubmit}>
                                <TextField
                                    label="Title"
                                    placeholder='Title'
                                    variant={(errors.title && touched.title) || (isSubmitting && !errors.title) ? 'error' : 'default'}
                                    value={title}
                                    helperText={errors.title && touched.title ? errors.title : ''}
                                    onChange={e => setTitle(e.target.value)}
                                />
                                <TextField
                                    label="Comment"
                                    placeholder='Comment'
                                    variant={(errors.comment && touched.comment) || (isSubmitting && !errors.comment) ? 'error' : 'default'}
                                    value={body}
                                    helperText={errors.comment && touched.comment ? errors.comment : ''}
                                    onChange={e => setBody(e.target.value)}
                                />
                                <CustomButton
                                    size={'medium'}
                                    type={'submit'}
                                    onClick={handleAddComment}>
                                    Add New Comment
                                </CustomButton>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div>
                    <h2>Comments</h2>
                    {commentsList.map((c) => <CommentBox key={c.id} comment={c} goBack={false}/>)}
                </div>
            </div>
        </div>
    )
}

export default Home;
