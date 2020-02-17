import React from "react"
import axios from 'axios'
import Home from './Home'
import LoginCard from './LoginCard'


export default class Login extends React.Component {
    
      
      

    render() {


        return (

            <div className="hero-image"  style={{height: "100%"}}>
                <div className="hero-text"  style={{height: "100%"}}>
                    <LoginCard/>
                </div>
            </div>
        )
    }
}