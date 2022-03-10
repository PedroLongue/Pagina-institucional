import React from "react";
import './Newslatter.css';

const Newslatter = () => {
    return (
        <section className="newslatter-wrapper">
            <div className="newslatter-wrapper-content">
                <h5 className="newslatter-title">assine nossa newsletter</h5>
                    <input className="newslatter-input" type="email" name="email" placeholder="E-mail" />
                    <button className="newslatter-submit" type="submit">ENVIAR</button>
            </div>
        </section>
    )
}

export {Newslatter};
