import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.css"


const Footer = () => {
    return (
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><NavLink to="#">Web design</NavLink></li>
                                <li><NavLink to="#">Development</NavLink></li>
                                <li><NavLink to="#">Hosting</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><NavLink to="#">Company</NavLink></li>
                                <li><NavLink to="#">Team</NavLink></li>
                                <li><NavLink to="#">Careers</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>WebCore</h3>
                            <p>Being a pioneer in off-shore and on-shore web development services, we cater to the precise needs and demands of our customers in the most cost-effective way.</p>
                        </div>
                        <div className="col item social"><NavLink to="#"><i className="fa fa-facebook-square"></i></NavLink><NavLink to="#"><i className="fa fa-twitter"></i></NavLink><NavLink to="#"><i className="fa fa-whatsapp"></i></NavLink><NavLink to="#"><i className="fa fa-reddit"></i></NavLink></div>
                    </div>
                    <p className="copyright">WebCore Pvt.Ltd © 2018</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
