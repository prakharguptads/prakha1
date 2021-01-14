import React, { Component } from 'react';

import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Row,
    Col,
    Label,
    Card
  } from "reactstrap";
  import { Link } from "react-router-dom";
class AboutUs extends Component{
    constructor(props) {
        super(props);}
        render(){

        
  return(
        
        <div> 
            
        
        <header  className="App-header1">

        
        
        
         <div className="App-header2">
        
              <div className="container">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>About Us</BreadcrumbItem>
          </Breadcrumb>
          </div>
          </div>
          <div className="container">
           <div >
           <br></br><br></br>
           <h3>Personal Information</h3><br></br><div className="container">
                <p>Date of Birth : 11 June 2000<br></br>
                Father's Name : Kamal Kishore Gupta<br></br>
                Mother's Name : Mamta Gupta<br></br>
                Languages known : Hindi , English</p></div>
                <br></br><br></br>
                <h3>Objective</h3><br></br><div className="container">
                <p>To develop an effective work quality and work so efficiently enjoying each and every essence of work and build an  environment in the Industry where people work freely with honest , determined attitude. Keeping this right attitude ,  bring positive changes around the world and increase the pride of Indian Technology among different countries.</p>
                </div>
                <br></br><br></br><h3>Education</h3><br></br><div className="container">
            <table className="table"><tr>
            <td>2015</td>
            <td>X</td>
            <td>St. Peter's School</td>
            <td>78%</td>
            </tr>
            <tr>
            <td>2017</td>
            <td>XII</td>
            <td>Maa Pitambra School</td>
            <td>84%</td>
            </tr>
            <tr>
            <td>2022</td>
            <td>B.Tech</td>
            <td>Jabalpur Engineering College</td>
            <td>7.0</td>
            </tr>
            </table></div>
            <br></br><br></br>
            <h3>Training</h3><br></br><div className="container">
            <p>Introduction to Java ( Core + Advanced ) ( Matrix Technology , Indore )  
<br></br> Android App Development (Matrix Technology , Indore)  
<br></br>Machine Learning with Python ( Coursera ) 
<br></br>Introduction to Internet of Things (NPTEL , IIT Roorkee )  
<br></br> Data Analytics with Python – ongoing ( NPTEL , IIT Roorkee)
<br></br>Deep Learning Specilization ( Coursera )
<br></br>Front-End Web Development with React ( Coursera )
</p></div>

            
           
           </div>
           
           
           </div>
        </header>
        </div>
     
  );
}
}
export default AboutUs;