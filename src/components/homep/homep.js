import React from "react"
import "./homep.css"
import {useNavigate} from "react-router-dom"


const Homepage = ({setLoginUser}) => {

    const navigate = useNavigate();

    return (
        <div className="homep">
            <div className = "button" onClick={() => setLoginUser({})}>Log Out</div>
            <h1>Welcome to pets!</h1>
            
            <h2>What are you looking for?</h2>
            <div className="cards">
                <div className="adopt" onClick={() => navigate("/adopt")}>Adopt?</div>
                <div className="nodopt" onClick = {() => navigate("/nodopt")}>Put up for Adoption?</div>
            </div>
            
        </div>
    )
}

export default Homepage;