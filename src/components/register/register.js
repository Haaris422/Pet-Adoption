import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnter:""
    })

    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const {name, email, password, reEnter } = user
        if(name && email && password === reEnter){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                navigate("/login")
            })
        }else {
            alert("invalid input")
        }
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Enter your E-mail id" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
            <input type="password" name="reEnter" value={user.reEnter} placeholder="Re-enter Password" onChange={handleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div>Or</div>
            <div className="button" onClick={() => navigate("/login")} >Log in</div>

        </div>
    )
}

export default Register;