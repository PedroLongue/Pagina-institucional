import React from "react";

import "./Newslatter.css";
import { Formik,Form,Field,ErrorMessage } from "formik";

import FormSchemaNewslatter from "../schema/FormSchemaNewslatter"

interface IFormikValues {
    email: String,
}

const handleClick = (values:IFormikValues) => {
    if(values.email.length > 1){
        alert("Newslatter assinada com sucesso!");

    }

};
const Newslatter = () => {
    const initialValues = {
        email: "",
    };
    return (
            <section className="newslatter-wrapper">
                <Formik onSubmit={handleClick} initialValues={initialValues} validationSchema={FormSchemaNewslatter}>
                    <Form>
                        <div className="newslatter-wrapper-content">
                            <h5 className="newslatter-title">assine nossa newslatter</h5>
                            <Field className="newslatter-input" name="email" placeholder="E-mail"/>
                            <ErrorMessage component="h5" name="email" className="error-mesage-inputs" />
                            <input className="newslatter-submit" type="submit"/>
                        </div>
                    </Form>
                </Formik>
            </section>
    )
}

export {Newslatter}
