import React, {useState} from "react";
import './Middle.css';

import ArrowRight from './images/arrow-right-icon.png';
import HomeIcon from './images/home-icon.png';

const Middle = () => {
    const [sobre, setSobre] = useState(false);
    const [forma, setForma] = useState(false);
    const [entrega, setEntrega] = useState(false);
    const [troca, setTroca] = useState(false);
    const [seguranca, setSeguranca] = useState(false);
    const [contato, setContato] = useState(false);

    const sobreActive = () => {
        setForma(false);
        setEntrega(false);
        setTroca(false);
        setSeguranca(false);
        setContato(false);
        sobre ? setSobre (false) : setSobre(true);
    }

    const formaActive = () => {
        setSobre(false);
        setEntrega(false);
        setTroca(false);
        setSeguranca(false);
        setContato(false);
        forma ? setForma (false) : setForma(true);
    }

    const entregaActive = () => {
        setSobre(false);
        setForma(false);
        setTroca(false);
        setSeguranca(false);
        setContato(false);
        entrega ? setEntrega (false) : setEntrega(true);
    }

    const trocaActive = () => {
        setSobre(false);
        setForma(false);
        setEntrega(false);
        setSeguranca(false);
        setContato(false);
        troca ? setTroca (false) : setTroca(true);
    }

    const segurancaActive = () => {
        setSobre(false);
        setForma(false);
        setEntrega(false);
        setTroca(false);
        setContato(false);
        seguranca ? setSeguranca (false) : setSeguranca(true);
    }

    const contatoActive = () => {
        setSobre(false);
        setForma(false);
        setEntrega(false);
        setTroca(false);
        setSeguranca(false);
    contato ? setContato (false) : setContato(true);
    }

    return (
        <section>
            <div className="middle-icons">
                <img className="middle-icons-home" src={HomeIcon} alt="Home icon" />
                <img src={ArrowRight} alt="Arrow icon" />
                <p className="middle-icons-title">INSTITUCIONAL</p>
            </div>
            <h1 className="middle-title">INSTITUCIONAL</h1>
            <div className="middle-description">
                <div className="middle-description-infos">
                    <button onClick={sobreActive} className= {sobre ? "middle-contact-active" : "middle-contact-disabled"}>Sobre</button>
                    <button onClick={formaActive} className= {forma ? "middle-contact-active" : "middle-contact-disabled"}>Forma de Pagamento</button>
                    <button onClick={entregaActive} className= {entrega ? "middle-contact-active" : "middle-contact-disabled"}>Entrega</button>
                    <button onClick={trocaActive} className= {troca ? "middle-contact-active" : "middle-contact-disabled"}>Troca e Devolução</button>
                    <button onClick={segurancaActive} className= {seguranca ? "middle-contact-active" : "middle-contact-disabled"}>Segurança e Privacidade</button>
                    <button onClick={contatoActive} className= {contato ? "middle-contact-active-form" : "middle-contact-disabled"}>Contato</button>
                </div>
                <div className="middle-description-content">
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
            </div>
        </section>
    )
}

export { Middle }
