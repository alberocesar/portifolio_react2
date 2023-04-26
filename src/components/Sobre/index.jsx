import React from "react";
import "./styles.css";
import perfil2 from "../../assents/img/perfil2.jpg"
import data from "./index.json";

function Sobre() {
    return (
        <main>
            <section className="home bd-grid" id="home">
                <div className="home__data"></div>
                <h1 className="home__title">Olá,<br></br>Eu sou <span className="home__title-color">Alberto</span><br></br>Web developer</h1>
                
                <div className="home__social">
                    <a href="https://www.linkedin.com/in/alberto-cesar-804b23209/" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>                  
                    <a href="https://github.com/alberocesar" className="home__social-icon"><i className='bx bxl-github' ></i></a>
                </div>
            </section>

            <section className="about section " id="about">
                <h2 className="section-title">Sobre</h2>

                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src={perfil2} alt="Foto Perfil"/>
                        
                           
                    </div>
                    
                    <div>
                        <h2 className="about__subtitle">Eu sou Alberto</h2>
                        <h3 className="about__text">
                            {data.sobre}
                        </h3>   
                    </div>  

                </div>

            </section>
        
        </main>
    );

}

export default Sobre;