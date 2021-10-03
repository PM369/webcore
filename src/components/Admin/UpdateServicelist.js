
import { withRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
function UpdateServicelist(props) {
    // console.log("props", props.match.params.id)
    const [data, setData] = useState([])
    const [ServiceName, setName] = useState("");
    const [file, setFile] = useState("");
    const [ServiceDesc, setDesc] = useState("");
    useEffect( async () => {
        // const user = JSON.parse(localStorage.getItem('token'));
        let result = await fetch("https://api.webcore.in/api/item/" + props.match.params.id);
        result = await result.json();
        setData(result);
        setName(result.ServiceName);
        setDesc(result.ServiceDesc);
        setFile(result.file);
    }, [])
    async function editProduct(id) {
        const user = JSON.parse(localStorage.getItem('token'));

        const formData = new FormData();
        formData.append('file', file);
        formData.append('ServiceDesc', ServiceDesc);
        formData.append('ServiceName', ServiceName);

        await fetch("https://api.webcore.in/api/itemupdate/" + id + "?_method=PUT", {
            method: "POST",
            body: formData,
            headers: {
                // 'Authorization': "Bearer " + "139|qMtIApnGoPFxPGrEXGzKSEWTbbXrHXCAU5uuTar3"
                'Authorization': 'Bearer ' + user.token,
            },
        });
        // alert("Data has been Updated!!")
        Swal.fire({
            // icon: 'success',
            title: 'Data Updated Successfully'
        })

    }
    return (
        <div className="container col-sm-6 offset-sm-3 my-4">

            <h1 className="text-center">UpdateProduct List</h1>
            <input className="form-control" type="text" onChange={event => setName(event.target.value)}
                defaultValue={data.ServiceName} /> <br />
            <input className="form-control" type="text" onChange={event => setDesc(event.target.value)}
                defaultValue={data.ServiceDesc} /> <br />
            <input className="form-control" type="file" onChange={event => setFile(event.target.files[0])}
                defaultValue={data.ServiceImg} /> <br /><br />
            <img style={{ width: 100 }} src={"https://api.webcore.in/" + data.ServiceImg} alt="img"/><br /><br />
            <button className="update" onClick={() => { editProduct(data.id) }}>Update</button>


        </div>
    )
}
export default withRouter(UpdateServicelist)