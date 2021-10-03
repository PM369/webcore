
import { useState } from 'react'
import Swal from 'sweetalert2';
function Addservice() {
    const [ServiceName, setName] = useState("");
    const [ServiceDesc, setDesc] = useState("");
    const [file, setFile] = useState("");
    async function Addservice() {
        // const token = localStorage.getItem("token")
        //const token = JSON.parse(localStorage.getItem('token'));
        const user = JSON.parse(localStorage.getItem('token'));
       
        const formData = new FormData();
        formData.append('ServiceName', ServiceName);
        formData.append('ServiceDesc', ServiceDesc);
        formData.append('file', file);


       await fetch(
            '  https://api.webcore.in/api/addservice',
            {
                method: 'POST',
                body: formData,
                headers:{
                    // 'Authorization': "Bearer " + "139|qMtIApnGoPFxPGrEXGzKSEWTbbXrHXCAU5uuTar3"
                    'Authorization': 'Bearer ' + user.token,
                },
                                      
                }
            
        )
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
                Swal.fire({
                    // icon: 'success',
                    title: 'Data Saved Successfully'
                })
            })
            .catch((error) => {
                console.error('Error:', error);
                Swal.fire({
                    // icon: 'error',
                    title: 'All Field required',
                    text: error.text,
                })
            });

    }

    return (
        <div>


            <div className="col-sm-6 offset-sm-3 my-4">
                <h1 className="text-center">AddService</h1>
                <input type="text" onChange={event => setName(event.target.value)} placeholder="
                    Service Name" className="form-control" required="" />
                <br />
                <input type="text" onChange={event => setDesc(event.target.value)} placeholder="Service Description" className="form-control" />
                <br />
                <input type="file" onChange={event => setFile(event.target.files[0])} className="form-control" />
                <br />
                <button onClick={Addservice} className="btn btn-primary">Save</button>
            </div>

        </div>


    )
}
export default Addservice