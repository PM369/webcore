
import React, { Component } from 'react'
// import { Redirect } from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props);
        let loggedIn = false
        this.state = {
            email: null,
            password: null,
            login: false,
            store: null,
            token:null,
            loggedIn
        }
    }
    componentDidMount() {
        const user = localStorage.getItem('token') // your saved token in localstorage
        if (user && user !== 'undefined') {            // check for not undefined
            this.props.history.push('/admin/addservice')               // now you can redirect your desired route
        }
    }
    login() {
        fetch('  https://api.webcore.in/api/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(this.state),

        }).then((response) => {
            response.json().then((result) => {
                console.warn("result", result);
                localStorage.setItem('token', JSON.stringify({                    
                    token: result.token,
                    loggedIn: true
                }))
                // this.setState({login:true})
                this.setState({ token: result.token })
            })
        })
    }
    render() {
        if(this.state.token){
            // return <Redirect to="/admin/addservice"/> page not refresh thats why i am using window.location
            window.location.href = "/admin/addservice";
        }
        return (
            <div>
                <div>
                    <h1 className="text-center"> Login</h1>
                            <div className="col-sm-6 offset-sm-3">
                                <input type="email" onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Email" className="form-control" required="email" />
                                <br />
                                <input type="password" onChange={(event) => { this.setState({ password: event.target.value }) }} placeholder="Password" className="form-control" required="password" />
                                <br />

                                <button className="btn btn-primary my-4" onClick={() => { this.login() }} >Login</button>
                            </div>
                </div>

            </div>
        )
    }
}
export default Login