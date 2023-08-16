import CustomTextField from "../../components/TextFields/TextFields";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CommentBox from "../../components/CommentBox";
import CustomButton from "../../components/button/button";
import { StarIcon } from "../../assets/icons/StarIcon";
import './styles.css'

const Home = ({ comments, setComments }) => {

    const handleAddComment = async (values) => {
        if (values.title !== "" && values.comment !== "") {
            const newComment = {
                id: comments.length + 1,
                name: values.title,
                body: values.comment,
            };
            setComments([newComment, ...comments])
        }
    }

    return (
        <div style={{ padding: 15 }}>
            <h1 className='paquequedebien'>Home Page</h1>
            <div className={"add-comment"}>
                <div className={"text-field-container"}>
                    <Formik
                        initialValues={{ title: "", comment: "" }}
                        validationSchema={Yup.object().shape({
                            title: Yup.string().required("This field is required"),
                            comment: Yup.string().required("This field is required"),
                        })}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                            if (!values.title || !values.comment) {
                                setSubmitting(false);
                                return;
                            }
                            await handleAddComment(values);
                            resetForm();
                            setSubmitting(false);
                        }}
                    >
                        {({ errors, touched, handleSubmit, isSubmitting }) => (
                            <Form onSubmit={handleSubmit}>
                                <CustomTextField
                                    label="Title"
                                    placeholder="Title"
                                    //value={title}
                                    variant={
                                        (errors.title && touched.title) ||
                                            (isSubmitting && !errors.title)
                                            ? "error"
                                            : "default"
                                            
                                    }
                                    name="title"
                                />
                                <CustomTextField
                                    label="Comment"
                                    placeholder="Comment"
                                    //value={text}
                                    variant={
                                        (errors.comment && touched.comment) ||
                                            (isSubmitting && !errors.comment)
                                            ? "error"
                                            : "default"
                                            
                                    }
                                    name="comment"
                                />
                                <div className='asiquedacentradofabri'>
                                <CustomButton type={'submit'} icon={StarIcon}>
                                    Add Comment
                                </CustomButton>
                                </div>
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
