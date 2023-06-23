import React from "react";
import "../styles/Footer.css"
import { BsPinMap, BsFillEnvelopeAtFill, BsTelephone, BsWhatsapp, BsInstagram, BsFacebook } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <div class="piePagina">
                <div>
                    <div className="iconos">
                        <figure>
                            <a href="https://www.google.com/maps/">
                                <BsPinMap size={25} />
                            </a>
                            <a href="https://mail.google.com/mail/">
                                <BsFillEnvelopeAtFill size={25} />
                            </a>
                            <a href="https://www.e-supercines.com/contactos.php">
                                <BsTelephone size={25} />
                            </a>
                            <a href="https://web.whatsapp.com/">
                                <BsWhatsapp size={25} />
                            </a>
                            <a href="https://instagram.com/">
                                <BsInstagram size={25} />
                            </a>
                            <a href="https://facebook.com/">
                                <BsFacebook size={25} />
                            </a>
                        </figure>
                    </div>

                    <div>
                        Copyright® 2023 Moovie, Inc.
                    </div>
                    <div className="textoFooter">
                        <a href="https://www.e-supercines.com/preguntasfrecuentes.php">
                            Información legal
                        </a>
                        <a href="/">
                            |
                        </a>
                        <a href="https://www.e-supercines.com/politicasdeprivacidad.php">
                            Política de privacidad
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )

}
export default Footer