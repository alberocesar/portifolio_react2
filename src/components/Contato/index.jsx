import React, { useState } from "react";
import "./styles.css";

function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");


    function enviarFormulario(event) {
        event.preventDefault();

        console.log("Formulário enviado!");

        const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;

        const numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER; //Numero do WhatsApp

        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

        window.open(linkWhatsApp, "_blank");

    }

    function mascaraTelefone(event) {
        const texto = event.target.value;
        const textoApenasNumeros = texto.replace(/[^0-9]/g, "");

        let telefoneFormatado = textoApenasNumeros.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

        if (textoApenasNumeros.length > 11) {
            telefoneFormatado = textoApenasNumeros.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2$3");
        }

        setTelefone(telefoneFormatado);
    }

    return (
        
            <section className="contact section" id="contact">
                <h2 className="section-title">Contato</h2>
                <form onSubmit={enviarFormulario}>

                    <fieldset>
                        <label htmlFor="inputNome">Nome</label>
                        <input
                            type="text"
                            name="input-nome"
                            id="input-nome"
                            required
                            minLength="3"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                        >
                        </input>

                    </fieldset>

                    <fieldset>
                        <label htmlFor="inputEmail">E-mail</label>
                        <input
                            type="email"
                            name="input-email"
                            id="input-email"
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        ></input>

                    </fieldset>

                    <fieldset>
                        <label htmlFor="inputTelefone">Telefone</label>
                        <input
                            type="tel"
                            name="input-tel"
                            id="input-tel"
                            placeholder="(99) 99999-9999"
                            required
                            pattern="^\(\d{2}\) \d{5}-\d{4}$"
                            maxLength="15"
                            value={telefone}
                            onChange={mascaraTelefone}
                        ></input>

                    </fieldset>

                    <fieldset>
                        <label htmlFor="inputMensagem">Mensagem</label>
                        <textarea
                            name="input-msg"
                            id="input-msg"
                            cols="30"
                            rows="10"
                            value={mensagem}
                            onChange={(event) => setMensagem(event.target.value)}
                        ></textarea>
                    </fieldset>

                    <center>
                        <input type="submit" value="ENVIAR" className="button"></input>
                    </center>

                </form>
            </section>

    );
}

export default Contato;