import React, { FC } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { IFormikValues, InitialValues } from "./Utils";
import "./CustomForm.css";
import "../../Global.css";

const CustomForm: FC = () => {
  return (
    <div className="CustomForm-Container">
      <Formik
        initialValues={InitialValues}
        onSubmit={(
          values: IFormikValues,
          { setSubmitting }: FormikHelpers<IFormikValues>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className="CustomForm-Wrapper">
          <h1 className="CustomForm-Title">Preencha o Formulário</h1>
          <label className="CustomForm-Label" htmlFor="nome">
            Nome
          </label>
          <Field
            className="CustomForm-Input"
            id="nome"
            name="nome"
            placeholder="Seu nome completo"
          />

          <label className="CustomForm-Label" htmlFor="e-mail">
            E-mail
          </label>
          <Field
            className="CustomForm-Input"
            id="e-mail"
            name="e-mail"
            placeholder="Seu e-mail"
            type="email"
          />

          <label className="CustomForm-Label" htmlFor="cpf">
            CPF
          </label>
          <Field
            className="CustomForm-Input"
            id="cpf"
            name="cpf"
            placeholder="000.000.000.00"
          />

          <label className="CustomForm-Label" htmlFor="nascimento">
            Data de nascimento
          </label>
          <Field
            className="CustomForm-Input"
            id="nascimento"
            name="nascimento"
            placeholder="00.00.0000"
          />

          <label className="CustomForm-Label" htmlFor="telefone">
            Telefone
          </label>
          <Field
            className="CustomForm-Input"
            id="telefone"
            name="telefone"
            placeholder="(+00) 00000 0000 "
          />

          <label className="CustomForm-Label" htmlFor="instagram">
            Instagram
          </label>
          <Field
            className="CustomForm-Input"
            id="instagram"
            name="instagram"
            placeholder="@seuuser"
          />
          <div className="CustomForm-Checkbox-Wrapper">
            <label className="CustomForm-Checkbox-Label">
              Declaro que li e aceito
            </label>
            <Field
              className="CustomForm-Checkbox-Input"
              id="checkbox"
              name="checkbox"
              type="checkbox"
            />
          </div>

          <button className="CustomForm-Button" type="submit">
            CADASTRE-SE
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CustomForm;
