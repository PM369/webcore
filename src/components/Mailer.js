import React from "react";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_wg97o1p', 'template_01gdgnd', e.target, 'user_dx9hAW9rWSda2GKT2iIXZ')
            .then((result) => {
                console.log(result.text);
                // alert("save")
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });

    }
    return (
        <div>
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Contact Us</h2>
                        <p>Contact us the get started</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div className="info">
                                <div className="address">
                                    <i className="fa fa-map-marker"></i>
                                    <h4>Location:</h4>
                                    <p>Habra,West Bengal, 743263</p>
                                </div>

                                <div className="email">
                                    <i className="fa fa-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>info@webcore.in</p>
                                </div>

                                <div className="phone">
                                    <i className="fa fa-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+91 7001973508</p>
                                </div>

                                <iframe title="My Company GeoLocation" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14708.115895246381!2d88.65702923802496!3d22.83841753214618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8b05c99150473%3A0x9fa489c6885f8bcc!2sHabra%20Station!5e0!3m2!1sen!2sin!4v1632894366108!5m2!1sen!2sin"></iframe>
                            </div>

                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <form onSubmit={sendEmail} className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group col-md-6 mt-3 mt-md-0">
                                        <label htmlFor="name">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="name">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="name">Message</label>
                                    <textarea className="form-control" name="message" rows="10" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};
export default Mailer
