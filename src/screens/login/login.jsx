import React from 'react'
import Logo from "../../components/Logo/logo.jsx"
import Textfield from "../../components/Textfield/textfield";
import {Formik, Form} from 'formik';
import "./styles.css"
import * as Yup from "yup";

//Example of using textfield on a LogIn page

const Login = () => {
    return (

        <div className="central-div">
            <Logo size={"medium"} name={true}/>
            <Formik
                initialValues={{
                    Email: '',
                    Password: '',
                }}
                validationSchema={Yup.object({
                    Email: Yup.string().required(),
                    Password: Yup.string().required(),
                })}
                onSubmit={async (values) => {

                    await new Promise((r) => setTimeout(r));
                    alert(JSON.stringify(values, null, 2));

                }}
            >
                <Form>
                    <div className="login-text-field"><Textfield labelInput="Email" name="Email"
                                                                 placeholder="janedoe@gmail.com"
                                                                 variant="placeholder"
                                                                 ></Textfield>
                    </div>
                    <div className="login-text-field"><Textfield labelInput="Password"
                                                                 name="Password" type="Password"
                                                                ></Textfield></div>
                    <div className="login-text-field">
                        <button type="submit">Submit</button>
                    </div>

                </Form>
            </Formik>

        </div>
    )


}
export default Login