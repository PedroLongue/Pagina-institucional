import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import "./CustomForm.css";
import FormSchema from "../schema/FormSchema";

interface IFormikValues {
  name: string;
  email: string;
  cpf: string;
  nascimento: string;
  numero: string;
  instagram: string;
}
const initialValues = {
  name: "",
  email: "",
  cpf: "",
  nascimento: "",
  numero: "",
  instagram: "",
};

//Não consegui submeter o formulario, o usuario do instagram sempre está inválido

function CustomForm() {
  const handleFormikSubmit = (values: IFormikValues) => {
    console.log(values);
  };

  return (
    <div className="form-wrapper">
      <Formik
        onSubmit={handleFormikSubmit}
        initialValues={initialValues}
        validationSchema={FormSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <h2>Preencha o Formulário</h2>
            <div className="form-col">
              <label className="form-label" htmlFor="name">
                Nome
              </label>
              <Field
                placeholder="Seu nome completo"
                id="name"
                name="name"
                className={errors.name && touched.name && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="name"
                className="form-invalid-feedback"
              />
            </div>
            <div className="form-col">
              <label htmlFor="email">E-mail</label>
              <Field
                placeholder="Seu e-mail"
                id="email"
                name="email"
                className={errors.email && touched.email && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="email"
                className="form-invalid-feedback"
              />
            </div>
            <div className="form-col">
              <label htmlFor="cpf">CPF</label>
              <Field
                placeholder="000 000 000 00"
                id="cpf"
                name="cpf"
                className={errors.cpf && touched.cpf && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="cpf"
                className="form-invalid-feedback"
              />
            </div>
            <div className="form-col">
              <label htmlFor="nascimento">Data de Nascimento</label>
              <Field
                placeholder="00 . 00 . 0000"
                id="nascimento"
                name="nascimento"
                className={errors.nascimento && touched.nascimento && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="nascimento"
                className="form-invalid-feedback"
              />
            </div>
            <div className="form-col">
              <label htmlFor="numero">Telefone:</label>
              <Field
                placeholder="(+00) 00000 0000)"
                id="numero"
                name="numero"
                className={errors.numero && touched.numero && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="numero"
                className="form-invalid-feedback"
              />
            </div>
            <div className="form-col">
              <label htmlFor="instagram">Instagram</label>
              <Field
                placeholder="@seuuser"
                id="instagram"
                name="instagram"
                className={errors.instagram && touched.instagram && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="instagram"
                className="form-invalid-feedback"
              />
            </div>

            <button type="submit">Cadastre-se</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CustomForm;
