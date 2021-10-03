import React, { Component } from 'react'
import axios from 'axios'
import { NavLink, Redirect } from "react-router-dom";

export default class ProductPricing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // PlanDescripton: '',
            // PlanName:''
        }
    }

    getData() {
        // const user = JSON.parse(localStorage.getItem('token'));
         JSON.parse(localStorage.getItem('token'));

        // axios('https://api.webcore.in/api/pricelist', {
        //     method: 'GET',
        //     mode: 'no-cors',
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/json',
        //     },
        //     withCredentials: true,
        //     credentials: 'same-origin',
        // }).then(res => {
        //      console.log(JSON.stringify(res.data))
        //       this.setState({ data: res.data })
        // })
     
       
        axios.get('https://api.webcore.in/api/pricelist').then(res => {
            
            console.log(JSON.stringify(res.data))
            
               
            // var data = res.data

            


             this.setState({data: res.data })
        })
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        const { data } = this.state
        // console.log(data)
        return (
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
                        <div className="container-fluid bg ">

                            <div className="container rowC my-4">
                                {
                                    data && data.map((item,pos) => {
                                        {/* console.warn(item.PlanDescription, "testeststs") */ }
                                        return (
                                            <div className="" key={pos}>



                                                <h3 className="heading">{item.PlanName}</h3>
                                                {/* <span>{item.Price}</span> */}
                                                <div className="price-value"> INR {item.Price} <span className="month">per month</span> </div>

                                                <ul>
                                                    {
                                                        JSON.parse(item.PlanDescription).map((n, id) => {
                                                            return (
                                                                <li key={id}>
                                                                    { n.label}

                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                <div className="pricingTable-signup">
                                                    <NavLink to="Contact">INR {item.Price} </NavLink>
                                                </div>

                                            </div>




                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </>
        )
    }
}

