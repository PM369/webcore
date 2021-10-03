
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
// import NavBar from "../NavBar";

export class Addprice extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }
    logout = () => {
        // localStorage.clear();
        localStorage.removeItem('token');
        // you can also like localStorage.removeItem('Token');
        window.location.href = "/";
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />
        }
        return (
            <div>
                {/* <NavBar/> */}
                <h1>This is a Admin Price page</h1>
                <div className="col-xl-3 col-sm-12 col-md-3">
                    <button onClick={this.logout}>Logout</button>
                </div>

            </div>
        )
    }
}

export default Addprice
