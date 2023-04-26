import React from "react";
import "./styles.css";
import work3 from "../../assents/img/work3.jpg"

function Skills() {
    return (
        <main>
            <section className="skills section" id="skills">
                <h2 className="section-title">Skills</h2>

                <div className="skills__container bd-grid">          
                    <div>
                        <h2 className="skills__subtitle">Frontend developer</h2>
                        <div className="skills__data">
                            <div className="skills__names">     
                                <span className="skills__name">HTML5</span>
                            </div>
                            <div className="skills__bar skills__html">      
                            </div>
                            <div>
                                <span className="skills__percentage">95%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <span className="skills__name">CSS3</span>
                            </div>
                            <div className="skills__bar skills__css">                              
                            </div>
                            <div>
                                <span className="skills__percentage">85%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">                              
                                <span className="skills__name">JAVASCRIPT</span>
                            </div>
                            <div className="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">65%</span>
                            </div>
                        </div>
                        <div>
                            <h1 className="skills__title">Backend developer</h1>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-php skills__icon'></i>
                                <span className="skills__name">PHP</span>
                            </div>
                            <div className="skills__bar skills__php">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">65%</span>
                            </div>
                            
                        </div>    
                        
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-php skills__icon'></i>
                                <span className="skills__name">Python</span>
                            </div>
                            <div className="skills__bar skills__php">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">45%</span>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    <div>     
                        <img src={work3} alt="Foto Trabalho" className="skills__img"/>       
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Skills;