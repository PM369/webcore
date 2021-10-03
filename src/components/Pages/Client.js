import React from 'react'
import client from "../../images/client-1.png"
import client2 from "../../images/client-2.png"
import client3 from "../../images/client-3.png"
import client4 from "../../images/client-4.png"
import client5 from "../../images/client-5.png"
import client6 from "../../images/client-6.png"
import client7 from "../../images/client-7.png"
import InfiniteCarousel from 'react-leaf-carousel';


const Client = () => {
    return (
        <div>
            <section id="clients" className="clients section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Clients</h2>
                        <p>They trusted us</p>
                    </div>
                    <div>
                        <InfiniteCarousel
                            breakpoints={[
                                {
                                    breakpoint: 500,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                    },
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                    },
                                },
                            ]}
                            dots={true}
                            showSides={true}
                            sidesOpacity={.5}
                            sideSize={.1}
                            slidesToScroll={4}
                            slidesToShow={4}
                            scrollOnDevice={true}
                        >
                            <div>
                                <img
                                    alt=''
                                    src={client}
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src={client2}
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src={client3}
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src={client4}
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src={client5}
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src={client6}
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src={client7}
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src={client2}
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src={client2}
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src={client2}
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src={client2}
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src={client2}
                                />
                            </div>
                        </InfiniteCarousel>
                    </div>

                    {/* <div className="clients-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper align-items-center">
                            <div className="swiper-slide"><img src={client}  className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src={client2} className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src={client3} className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src={client4} className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src={client5} className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src={client6} className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src={client7} className="img-fluid" alt="" /></div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div> */}

                </div>
            </section>
        </div>
    )
}

export default Client
