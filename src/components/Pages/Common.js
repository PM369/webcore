import React from 'react'
import web from '../../images/homeicon.svg'
import {NavLink} from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

const Common =(props)=> {
    return (
        <>
            <section id="hero" className="d-flex align-items-center">
                <div id="Home" className="container my-4">
                    <div className="row gy-4">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Bettter digital experience with GoDigital</h1>
                            <h2>We are team of talented designers making websites with Advance Technology</h2>
                            <div>
                                <NavLink to="#about" className="btn-get-started scrollto">Get Started</NavLink>
                            </div>
                            {/* Typewriter */}
                            <div className="Typewriter">
                                <h3 style={{ paddingTop: '3rem', margin: 'auto 0' }}>We're
            <span style={{ color: 'red', fontWeight: 'Italic', marginLeft: '10px' }}>
                                        <Typewriter
                                            loop
                                            cursor
                                            cursorStyle="_"
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                            words={['Software Developer', 'Wesite Designer', 'SEO Specialist']}

                                        />

                                    </span>

                                </h3>
                            </div>

                            {/* Tipewiter end */}
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src={web} className="img-fluid animated" alt="webimg"/>
        </div>
                        </div>
                    </div>

  </section>
        </>
    )
}

export default Common
