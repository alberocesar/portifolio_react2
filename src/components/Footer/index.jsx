import React from "react";
import "./styles.css";

function Footer() {
    return (
        <main>
            <footer className="footer">
                <p className="footer__title">Alberto</p>
                <div className="footer__social">
                    <a href="https://www.facebook.com/betinhoc1/" className="footer__icon"><i className='bx bxl-facebook' ></i></a>
                    <a href="https://www.instagram.com/betinhobets/" className="footer__icon"><i className='bx bxl-instagram' ></i></a>
                    <a href="https://twitter.com/Albertocesar3" className="footer__icon"><i className='bx bxl-twitter' ></i></a>
                </div>
                <p className="footer__copy"></p>
            </footer>

            <script src="https://unpkg.com/scrollreveal"></script>

            <script src="scripts.js"></script>
        </main>
    )
}

export default Footer;