import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

library.add(faEnvelope, faTwitter, faInstagram, faTiktok);


const Footer = () => {
    return (
        <footer>
            <div className="Footer">
                <div className="footer-container footer-top">
                    <div className="row">
                        <div class="custom-shape-divider-top-1688350882">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                            </svg>
                        </div>
                        <div className="footer-icons">
                            <div className="col ft-1">
                                <img id="stanford-logo" src="https://static.igem.wiki/teams/4951/wiki/graphics/stanfordlogo-1.png" alt="Stanford iGEM Team Logo" /> 
                                <div className="icons">
                                    <a href="mailto:stanfordigemteam@gmail.com"><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
                                    <a href="https://twitter.com/igemStanford23"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                                    <a href="https://www.instagram.com/stanford_igem/?hl=en"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                                </div>
                            </div>
                            <div className="sponsors ft-2">
                                <img className="sponsor-logo" src="https://static.igem.wiki/teams/4951/wiki/graphics/idtlogo.png" alt="IDT logo"></img>
                                <img className="sponsor-logo" src="https://static.igem.wiki/teams/4951/wiki/graphics/stanfordbioelogo.png" alt="Stanford BioE logo"></img>
                                <img className="sponsor-logo" src="https://static.igem.wiki/teams/4951/wiki/graphics/biomelogo.png" alt="Stanford BIOME logo"></img>
                                <img className="sponsor-logo" src="https://static.igem.wiki/teams/4951/wiki/graphics/neblogo.png" alt="New England BioLabs logo"></img>
                                <img className="sponsor-logo" src="https://static.igem.wiki/teams/4951/wiki/graphics/snapgenelogo.png" alt="SnapGene logo"></img>
                                <img className="sponsor-logo" src="https://static.igem.wiki/teams/4951/wiki/graphics/twistlogo.png" alt="Twist logo"></img>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="footer-container footer-bottom">
                    <div className="row">
                        <div className="col ft-3">
                        <h5>Project</h5>
                        <ul>
                            <li className="nav-item">
                                <Link to="/description">Description</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/engineering">Engineering</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/implementation">Implementation</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/results">Results</Link>
                            </li>
                        </ul>
                        </div>
                        <div className="col ft-3">
                        <h5>Wet Lab</h5>
                        <ul>
                            <li className="nav-item">
                                <Link to="/parts-collection">Parts Collection</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/experiments">Experiments</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/safety">Safety</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/notebook">Notebook</Link>
                            </li>
                        </ul>
                        </div>
                        <div className="col ft-3">
                        <h5>Team</h5>
                        <ul>
                            <li className="nav-item">
                                <Link to="/team">Our Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/attributions">Attributions</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contribution">Our Contribution</Link>
                            </li>
                        </ul>
                        </div>
                        <div className="col ft-3">
                        <h5>IHP / Education </h5>
                        <ul>
                            <li className="nav-item">
                                <Link to="/human-practices">Human Practices</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/education">Education</Link>
                            </li>
                        </ul>
                        </div>
                        <div className="row end-note">
                            <p>© 2023 - Content on this site is licensed under a
                                <a className="" href="https://creativecommons.org/licenses/by/4.0/"> Creative Commons Attribution 4.0 International license. </a>
                            </p>
                            <p>The repository used to create this website is available at 
                                <a className="" href="https://creativecommons.org/licenses/by/4.0/"> gitlab.igem.org/2023/stanford.</a>
                            </p>
                        </div>
                    </div>
                </div>  
            </div>
        </footer>
    )
}

export default Footer