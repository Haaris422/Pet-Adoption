import React, { useState} from "react";
import "./nodopt.css";
import axios from "axios";

const Nodopt = () =>{

    const [inputField, setInputField] = useState({
        profilePic:''
    })
    const imageUpload = (event) =>{
        console.log(event.target.files[0])
        setInputField({...inputField, profilePic:event.target.files[0]})
    }
    const submitButton = async () =>{
        let url = "http://localhost:9002/img/add"
        console.log('==',inputField.profilePic, '==',inputField.profilePic.name)
        const formdata = new FormData();
        formdata.append('myFile', inputField.profilePic, inputField.profilePic.name)
        let response = await axios.post(url, formdata)
        console.log(response)

    }
    return (
        
        <div className="form">
            <h1>Pets</h1>
            <div><label>Upload photo:</label>
                <input type="file" name="myfile" onChange={imageUpload}/>    
            </div>
            <div className="button" onClick={submitButton}>Submit</div>
        </div>
    )
}

export default Nodopt;
