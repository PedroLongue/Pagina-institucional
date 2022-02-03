import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import FormSchema from "../schema/FormSchema";

import styles from "./styles/ContactForm.module.css";

interface IFormikValues {
  name: string;
  email: string;
  cpf: string;
  birth: string;
  phone: string;
  instagram: string;
  terms: boolean;
}

const initialValues = {
  name: "",
  email: "",
  cpf: "",
  birth: "",
  phone: "",
  instagram: "",
  terms: false,
};

const ContactForm = () => {
  const handleFormikSubmit = (values: IFormikValues) => {
    console.log(values);
  };

  return (
    <div className={styles["form-wrapper"]}>
      <Formik
        onSubmit={handleFormikSubmit}
        initialValues={initialValues}
        validationSchema={FormSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <h2>PREENCHA O FORMULÁRIO</h2>
            <div className={styles["form-col"]}>
              <label htmlFor="name">Nome</label>
              <Field
                id="name"
                name="name"
                placeholder="Seu nome completo"
                className={errors.name && touched.name && styles["invalid"]}
              />
              <ErrorMessage
                component="span"
                name="name"
                className={styles["form-invalid-feedback"]}
              />
            </div>
            <div className={styles["form-col"]}>
              <label htmlFor="email">E-mail</label>
              <Field
                id="email"
                name="email"
                placeholder="Seu e-mail"
                className={errors.email && touched.email && styles["invalid"]}
              />
              <ErrorMessage
                component="span"
                name="email"
                className={styles["form-invalid-feedback"]}
              />
            </div>
            <div className={styles["form-col"]}>
              <label htmlFor="cpf">CPF</label>
              <Field
                id="cpf"
                name="cpf"
                placeholder="XXX.XXX.XXX-XX"
                className={errors.cpf && touched.cpf && styles["invalid"]}
              />
              <ErrorMessage
                component="span"
                name="cpf"
                className={styles["form-invalid-feedback"]}
              />
            </div>
            <div className={styles["form-col"]}>
              <label htmlFor="birth">Data de Nascimento</label>
              <Field
                id="birth"
                name="birth"
                placeholder="DD/MM/AAAA"
                className={errors.birth && touched.birth && styles["invalid"]}
              />
              <ErrorMessage
                component="span"
                name="birth"
                className={styles["form-invalid-feedback"]}
              />
            </div>
            <div className={styles["form-col"]}>
              <label htmlFor="phone">Telefone</label>
              <Field
                id="phone"
                name="phone"
                placeholder="(XX) XXXXX-XXXX"
                className={errors.phone && touched.phone && styles["invalid"]}
              />
              <ErrorMessage
                component="span"
                name="phone"
                className={styles["form-invalid-feedback"]}
              />
            </div>
            <div className={styles["form-col"]}>
              <label htmlFor="instagram">Instagram</label>
              <Field
                id="instagram"
                name="instagram"
                placeholder="@seuuser"
                className={
                  errors.instagram && touched.instagram && styles["invalid"]
                }
              />
              <ErrorMessage
                component="span"
                name="instagram"
                className={styles["form-invalid-feedback"]}
              />
            </div>
            <div className={styles["form-col-terms"]}>
              <label htmlFor="terms">
                Declaro que li e aceito
                <Field
                  type="checkbox"
                  initialValues="false"
                  id="terms"
                  name="terms"
                  className={errors.terms && touched.terms && styles["invalid"]}
                />
                <ErrorMessage
                  component="span"
                  name="terms"
                  className={styles["form-invalid-feedback-terms"]}
                />
              </label>
            </div>

            <button type="submit">Cadastre-se</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { ContactForm };
