import React, { useState, useEffect } from 'react';
// import data from "../data"
import { Redirect } from "react-router-dom";

const Technology = () => {
    // const history = useHistory();
    const user = JSON.parse(localStorage.getItem('token'));
    console.log(user);
    const [allData, setAllData] = useState([]);
    const [petCount, setDataCount] = useState(4);
    const loadmore = () => {
        setDataCount(allData.length)
    };
    useEffect(() => {
        fetch('https://api.webcore.in/api/techlist')
            .then((res) => res.json())
            .then((data) => {
                setAllData(data)
                // console.log(data)
            });
    }, [])
    return (
        <div>
            {
                localStorage.getItem('token') ?
                    <>

                        {
                            alert("You Still Logedin Please Logout!")
                        }

                        <Redirect to="/admin/addservice" />
                    </>
                    :
                    <>
                        <div className="section-bg">
                            <section id="Service" className="py-4 container">
                                <div className="section-title">
                                    {/* <h2>Clients</h2> */}
                                    <p>Technology We Use</p>
                                    <span>We make the technology talk! The wide variety of technologies used by our organization makes every complexity easy. The variety of technology and our expertise on them are simply hard to find elsewhere.</span>
                                </div>
                                <div className="row justify-content-center" >
                                    {allData.slice(0, petCount).map((pet, pos) => (
                                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={pos}>
                                            <div className="card p-0 overflow-hidden h-100 shadow">
                                                <img src={"https://api.webcore.in/" + pet.TechImg} className="card-img-top" alt="img" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{pet.TechName}</h5>
                                                    <p className="card-text">{pet.TechDesc}</p>

                                                </div>
                                            </div>
                                        </div>))}
                                </div>
                                <button className="btn-get-service"
                                    onClick={() => loadmore()}
                                >
                                    Lodemore
            </button>
                            </section>
                        </div>


                    </>
            }


        </div>

    );
};

export default Technology
