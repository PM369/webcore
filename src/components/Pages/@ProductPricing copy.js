// import Item from 'antd/lib/list/Item';
import { React, useEffect, useState } from 'react'
import { NavLink, Redirect } from "react-router-dom"


const ProductPricing = () => {
    const user = JSON.parse(localStorage.getItem('token'));

    // console.log(user);
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
                        <div id="pricing" className="section-title">
                            {/* <h3>Clients</h3> */}
                            <p>Our Pricing</p>
                        </div>
                        <div className="demo section-bg my-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <div className="pricingTable">
                                            <div className="pricingTable-header">
                                                <i className="fa fa-adjust"></i>
                                                <div className="price-value"> $10.00 <span className="month">per month</span> </div>
                                            </div>
                                            <h3 className="heading">Standard</h3>
                                            <div className="pricing-content">
                                                <ul>
                                                    <li><b>50GB</b> Disk Space</li>
                                                    <li><b>50</b> Email Accounts</li>
                                                    <li><b>50GB</b> Monthly Bandwidth</li>
                                                    <li><b>10</b> subdomains</li>
                                                    <li><b>15</b> Domains</li>
                                                </ul>
                                            </div>
                                            <div className="pricingTable-signup">
                                                <NavLink to="#">sign up</NavLink>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-sm-6">
                                        <div className="pricingTable green">
                                            <div className="pricingTable-header">
                                                <i className="fa fa-briefcase"></i>
                                                <div className="price-value"> $20.00 <span className="month">per month</span> </div>
                                            </div>
                                            <h3 className="heading">Business</h3>
                                            <div className="pricing-content">
                                                <ul>
                                                    <li><b>60GB</b> Disk Space</li>
                                                    <li><b>60</b> Email Accounts</li>
                                                    <li><b>60GB</b> Monthly Bandwidth</li>
                                                    <li><b>15</b> subdomains</li>
                                                    <li><b>20</b> Domains</li>
                                                </ul>
                                            </div>
                                            <div className="pricingTable-signup">
                                                <NavLink to="#">sign up</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="pricingTable blue">
                                            <div className="pricingTable-header">
                                                <i className="fa fa-diamond"></i>
                                                <div className="price-value"> $30.00 <span className="month">per month</span> </div>
                                            </div>
                                            <h3 className="heading">Premium</h3>
                                            <div className="pricing-content">
                                                <ul>
                                                    <li><b>70GB</b> Disk Space</li>
                                                    <li><b>70</b> Email Accounts</li>
                                                    <li><b>70GB</b> Monthly Bandwidth</li>
                                                    <li><b>20</b> subdomains</li>
                                                    <li><b>25</b> Domains</li>
                                                </ul>
                                            </div>
                                            <div className="pricingTable-signup">
                                                <NavLink to="#">sign up</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="pricingTable blue">
                                            <div className="pricingTable-header">
                                                <i className="fa fa-diamond"></i>
                                                <div className="price-value"> $30.00 <span className="month">per month</span> </div>
                                            </div>
                                            <h3 className="heading">Premium</h3>
                                            <div className="pricing-content">
                                                <ul>
                                                    <li><b>70GB</b> Disk Space</li>
                                                    <li><b>70</b> Email Accounts</li>
                                                    <li><b>70GB</b> Monthly Bandwidth</li>
                                                    <li><b>20</b> subdomains</li>
                                                    <li><b>25</b> Domains</li>
                                                </ul>
                                            </div>
                                            <div className="pricingTable-signup">
                                                <NavLink to="#">sign up</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="pricingTable blue">
                                            <div className="pricingTable-header">
                                                <i className="fa fa-diamond"></i>
                                                <div className="price-value"> $30.00 <span className="month">per month</span> </div>
                                            </div>
                                            <h3 className="heading">Premium</h3>
                                            <div className="pricing-content">
                                                <ul>
                                                    <li><b>70GB</b> Disk Space</li>
                                                    <li><b>70</b> Email Accounts</li>
                                                    <li><b>70GB</b> Monthly Bandwidth</li>
                                                    <li><b>20</b> subdomains</li>
                                                    <li><b>25</b> Domains</li>
                                                </ul>
                                            </div>
                                            <div className="pricingTable-signup">
                                                <NavLink to="#">sign up</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="pricingTable blue">
                                            <div className="pricingTable-header">
                                                <i className="fa fa-diamond"></i>
                                                <div className="price-value"> $30.00 <span className="month">per month</span> </div>
                                            </div>
                                            <h3 className="heading">Premium</h3>
                                            <div className="pricing-content">
                                                <ul>
                                                    <li><b>70GB</b> Disk Space</li>
                                                    <li><b>70</b> Email Accounts</li>
                                                    <li><b>70GB</b> Monthly Bandwidth</li>
                                                    <li><b>20</b> subdomains</li>
                                                    <li><b>25</b> Domains</li>
                                                </ul>
                                            </div>
                                            <div className="pricingTable-signup">
                                                <NavLink to="#">sign up</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="pricingTable blue">
                                            <div className="pricingTable-header">
                                                <i className="fa fa-diamond"></i>
                                                <div className="price-value"> $30.00 <span className="month">per month</span> </div>
                                            </div>
                                            <h3 className="heading">Premium</h3>
                                            <div className="pricing-content">
                                                <ul>
                                                    <li><b>70GB</b> Disk Space</li>
                                                    <li><b>70</b> Email Accounts</li>
                                                    <li><b>70GB</b> Monthly Bandwidth</li>
                                                    <li><b>20</b> subdomains</li>
                                                    <li><b>25</b> Domains</li>
                                                </ul>
                                            </div>
                                            <div className="pricingTable-signup">
                                                <NavLink to="#">sign up</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="pricingTable red">
                                            <div className="pricingTable-header">
                                                <i className="fa fa-cube"></i>
                                                <div className="price-value"> $40.00 <span className="month">per month</span> </div>
                                            </div>
                                            <h3 className="heading">Extra</h3>
                                            <div className="pricing-content">
                                                <ul>
                                                    <li><b>80GB</b> Disk Space</li>
                                                    <li><b>80</b> Email Accounts</li>
                                                    <li><b>80GB</b> Monthly Bandwidth</li>
                                                    <li><b>25</b> subdomains</li>
                                                    <li><b>30</b> Domains</li>
                                                </ul>
                                            </div>
                                            <div className="pricingTable-signup">
                                                <NavLink to="#">sign up</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
            }


        </div>

    )
}

export default ProductPricing
