
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
function Servicelist() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, [])
    // console.log("data",data)
    async function deleteOperation(id) {
        const user = JSON.parse(localStorage.getItem('token'));
        let result = await fetch("https://api.webcore.in/api/delete/" + id, {
            method: "DELETE",
             headers: {
                'Authorization': 'Bearer ' + user.token,
            },

        })
        result = await result.json();
        getData();
        console.warn(result);
        Swal.fire({
            // icon: 'success',
            title: 'Data Delete Successfully'
        })
    }
    async function getData() {
        let result = await fetch('https://api.webcore.in/api/servicelist');
        result = await result.json();
        setData(result)
    }
    return (
        <div className="container-fluid">
            <h1 className="text-center">Service List</h1>
            <div className="col-sm-6 offset-sm-3">
                <table className="table table-bordered my-4">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Service Name</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th colSpan="2">Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((res) =>
                                <tr>
                                    <td>{res.id}</td>
                                    <td>{res.ServiceName}</td>
                                    <td><img style={{ width: 100 }} src={"https://api.webcore.in/" + res.ServiceImg} alt="img" /></td>
                                    <td>{res.ServiceDesc}</td>
                                    <td><span onClick={() => { deleteOperation(res.id) }} className="delete">Delete</span></td>
                                    <td><Link to={"updateservicelist/" + res.id}><span className="update">Update</span></Link></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}
export default Servicelist