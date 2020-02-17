import React from "react"
import axios from 'axios'
import { render } from "@testing-library/react"


export default class LoginCard extends React.Component {
    
    constructor(){
        super();
        this.state={
            viewport:{
                height: 0,
                width: 0

            }
        }

    }

    componentWillMount(){
        this.setState({
            viewport:{
                height: document.documentElement.clientHeight,
                width: document.documentElement.clientWidth
            }
        })
    }
    
    render(){
    const logo_style = {
        maxWidth: "500px"
    }

    const html_style = {
        height: "100%"
    }
    const container_styles = {
        width: "100%",
        // minHeight:"100%",
        minHeight: "100%",
        margin: "0",
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',


        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        backgroundPosition: 'center'

    }
   
    const styles = {


        maxWidth: "750px",
        margin: '10px',
        width: "100%",
        height: "auto",
    }
    var header_style={
         
    }
    if(this.state.viewport.width> 450){
        
        header_style={fontFamily: 'Rye', fontSize: '40px', color : 'white'}
    }
    else{
        
        header_style={fontFamily: 'Rye', fontSize: '20px', color : 'white'}
    }

    return (

      

        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
           
            <link href="https://fonts.googleapis.com/css?family=Bungee+Inline|Girassol|Rye&display=swap" rel="stylesheet"/>
            <div className="flex-container" style={container_styles}>
                <img style={logo_style} className="card-img-top" src="https://www.gaar.com/images/uploads/event-logo-toastmasters.png" alt="Card image" />
                <div className="card text-center" style={styles} >
                    <div className="card-header bg-dark">
                        <p style={header_style}>Cisco Communications Club</p>
                       
                    </div>

                    <div className="card bg-secondary text-white ">
                        <div className="card-body">

                            <form>
                                <div className="form-group">
                                    <button type="button" className="btn btn-dark float-left" style={{ marginBottom: "5px" ,fontSize: "30px", fontFamily: `'Girassol', cursive`}}><i className="material-icons">contacts</i> Email</button>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" data-toggle="tooltip" data-placement="top" title="Enter Registered Email ID" />
                                    <small id="emailHelp" className="form-text text-muted text-left">Enter Your Organisation's Email ID</small>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-dark float-left" style={{ marginBottom: "5px" ,fontSize: "30px", fontFamily: `'Girassol', cursive`}}> <i className="material-icons">fingerprint</i> Password </button>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                
                                <div display="flex" style={{flexWrap: "wrap"}}>
                                <button  type="submit" className="btn btn-sm btn-dark float-left" style={{margin: "10px"}}><i className="material-icons" style={{fontSize: "30px"}}>lock</i> <p style={{fontSize: "20px", fontFamily: `'Bungee Inline', cursive`}}>Forgot Password?</p>  </button>
                                <button type="submit" className="btn btn-lg btn-dark float-right" style={{margin: "10px"}}><p style={{fontSize: "20px", fontFamily: `'Bungee Inline', cursive`}}>Login</p> <i className="material-icons" >input</i>   </button>
                                </div>

                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )

    };


}