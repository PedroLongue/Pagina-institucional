import React, {useState} from "react";

import {Form, Formik, Field, ErrorMessage} from "formik"
import FormSchema from "../schema/FormSchema";
import './Middle.css';

import ArrowRight from '../images/arrow-right-icon.png';
import HomeIcon from '../images/home-icon.png';

import WhatsappLogo from '../images/whatsapp-icon.png';
import TopButton from '../images/top-button-icon.png';
interface IFormikValues {
    name: String,
    email: String,
    cpf: String,
    date: String,
    cell: String,
    instagram: String,
    checkbox: String,
}

const Middle = () => {
    const initialValues = {
        name: "",
        email: "",
        cpf: "",
        date: "",
        cell: "",
        instagram: "",
        checkbox: "",
    };

    const handleClick = (values:IFormikValues) => {
        if(values){
            alert("Formulário preenchido com sucesso!");

        }

    };

    const [sobre, setSobre] = useState(false);
    const [forma, setForma] = useState(false);
    const [entrega, setEntrega] = useState(false);
    const [troca, setTroca] = useState(false);
    const [seguranca, setSeguranca] = useState(false);
    const [contato, setContato] = useState(false);
    const [formulario, setFormulario] = useState(false);
    const sobreActive = () => {
        setForma(false);
        setEntrega(false);
        setTroca(false);
        setSeguranca(false);
        setContato(false);
        setFormulario(false);
        sobre ? setSobre (false) : setSobre(false);
    }

    const formaActive = () => {
        setSobre(false);
        setEntrega(false);
        setTroca(false);
        setSeguranca(false);
        setContato(false);
        setFormulario(false);
        forma ? setForma (true) : setForma(true);
        forma ? setSobre(true) : setSobre (true);
    }

    const entregaActive = () => {
        setSobre(false);
        setForma(false);
        setTroca(false);
        setSeguranca(false);
        setContato(false);
        setFormulario(false);
        entrega ? setSobre(true) : setSobre (true);
        entrega ? setEntrega (true) : setEntrega(true);

    }

    const trocaActive = () => {
        setSobre(true);
        setForma(false);
        setEntrega(false);
        setSeguranca(false);
        setContato(false);
        setFormulario(false);
        troca ? setTroca (true) : setTroca(true);
        troca ? setSobre(true) : setSobre (true);
    }

    const segurancaActive = () => {
        setSobre(false);
        setForma(false);
        setEntrega(false);
        setTroca(false);
        setContato(false);
        setFormulario(false);
        seguranca ? setSeguranca (true) : setSeguranca(true);
        seguranca ? setSobre(true) : setSobre (true);
    }

    const contatoActive = () => {
        setSobre(false);
        setForma(false);
        setEntrega(false);
        setTroca(false);
        setSeguranca(false);
        contato ? setSobre(true) : setSobre(true)
        contato ? setFormulario(true) : setFormulario(true);
        contato ? setContato (true) : setContato(true);
}
    return (
        <section className="middle-main">
            <div className="middle-icons">
                <img className="middle-icons-home" src={HomeIcon} alt="Home icon" />
                <img src={ArrowRight} alt="Arrow icon" />
                <p className="middle-icons-title">INSTITUCIONAL</p>
            </div>
            <h1 className="middle-title">INSTITUCIONAL</h1>
            <div className="middle-description">
                <div className={contato ? "middle-description-infos-contact": "middle-description-infos"}>
                    <button onClick={sobreActive} className= {sobre ? "middle-contact-disabled" : "middle-contact-active"}>Sobre</button>
                    <button onClick={formaActive} className= {forma ? "middle-contact-active" : "middle-contact-disabled"}>Forma de Pagamento</button>
                    <button onClick={entregaActive} className= {entrega ? "middle-contact-active" : "middle-contact-disabled"}>Entrega</button>
                    <button onClick={trocaActive} className= {troca ? "middle-contact-active" : "middle-contact-disabled"}>Troca e Devolução</button>
                    <button onClick={segurancaActive} className= {seguranca ? "middle-contact-active" : "middle-contact-disabled"}>Segurança e Privacidade</button>
                    <button onClick={contatoActive} className= {contato ? "middle-contact-active-form" : "middle-contact-disabled"}>Contato</button>
                </div>
                <div className={sobre ? "middle-description-content-none" : "middle-description-content"}>
                    <h1 className="middle-description-content-title">Sobre</h1>
                        <p className="middle-description-content-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br /><br />
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        <br className="middle-broken-mobile" /><br className="middle-broken-mobile"/>
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                        nisi ut aliquid ex ea commodi consequatur?
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                       <br /><br />
                        </p>
                </div>
                <div className={formulario ? "middle-form-active" : "middle-form-disabled"}>
                    <Formik onSubmit={handleClick} initialValues={initialValues} validationSchema={FormSchema} className="middle-form">
                        {({errors, touched}) => (
                            <Form>
                                <h1 className="middle-form-title">PREENCHA O FORMULÁRIO</h1>
                                <div className="middle-form-labels">
                                    <div className="middle-form-labels">
                                        <label className="middle-form-input-title">Nome</label>
                                        <Field name="name" className={(errors.name && touched.name && "invalid") ? "middle-form-input-invalid" : "middle-form-input"} type="text" placeholder="Seu nome completo" />
                                        <ErrorMessage component="h5" name="name" className="error-mesage-inputs"/>
                                    </div>
                                    <div className="middle-form-labels">
                                        <label className="middle-form-input-title" placeholder="Seu e-mail">E-mail</label>
                                        <Field name="email" className={(errors.email && touched.email && "invalid") ? "middle-form-input-invalid" : "middle-form-input"} type="email" placeholder="Seu e-mail"/>
                                        <ErrorMessage component="h5" name="email" className="error-mesage-inputs" />
                                    </div>
                                    <div className="middle-form-labels">
                                        <label className="middle-form-input-title">CPF</label>
                                        <Field name="cpf" className={(errors.cpf && touched.cpf && "invalid") ? "middle-form-input-invalid" : "middle-form-input"} type="text" placeholder="000.000.000-00"/>
                                        <ErrorMessage component="h5" name="cpf" className="error-mesage-inputs"/>
                                    </div>
                                    <div className="middle-form-labels">
                                        <label className="middle-form-input-title">Data de Nascimento</label>
                                        <Field name="date" className={(errors.date && touched.date && "invalid") ? "middle-form-input-invalid" : "middle-form-input"} type="text" placeholder="00/00/0000"/>
                                        <ErrorMessage component="h5" name="date" className="error-mesage-inputs"/>
                                    </div>
                                    <div className="middle-form-labels">
                                        <label className="middle-form-input-title">Telefone</label>
                                        <Field name="cell" className={(errors.cell && touched.cell && "invalid") ? "middle-form-input-invalid" : "middle-form-input"} type="text" placeholder="(+00) 000000000"/>
                                        <ErrorMessage component="h5" name="cell" className="error-mesage-cell"/>
                                    </div>
                                    <div className="middle-form-labels">
                                        <label className="middle-form-input-title">Instagram</label>
                                        <Field name="instagram" className={(errors.instagram && touched.instagram && "invalid") ? "middle-form-input-invalid" : "middle-form-input"} type="text" placeholder="@seuuser"/>
                                        <ErrorMessage component="h5" name="instagram" className="error-mesage-inputs"/>
                                    </div>


                                <div className="middle-form-terms">
                                    <a href="/">
                                        <label className="middle-form-asterisk">*</label><label className="middle-form-terms-text">Declaro que li e aceito</label>
                                    </a>
                                    <Field name="checkbox" className="middle-form-terms-check" type="checkbox" />
                                    <ErrorMessage component="h5" name="checkbox" className="error-mesage-inputs"/>

                                </div>

                                <input className="middle-form-submit" type="submit" value="CADASTRE-SE" />
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className="back-top">
                <img className="wpp-icon"src={WhatsappLogo} alt="Logo Whatsapp" />
                <a href="/"><img src={TopButton} alt="Botão de voltar ao inicio." /></a>

            </div>
        </section>
    )
}

export { Middle }
