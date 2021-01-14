import React from 'react';
import { Button , Card,CardImg, CardText, CardBody,CardTitle,CardSubtitle } from 'reactstrap';
import {
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderCard({item}) {
return(
  <Card>
    <CardImg src={item.image} alt={item.name} />
    <CardBody>
      <CardTitle className="title-color">{item.name}</CardTitle>
      <CardText className="text">{item.description}</CardText>
    </CardBody>
  </Card>
)
}
function Skills(props){
  return(
    <div><div className="App-header2">
      <div className="container">
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/home">Home</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>Skills</BreadcrumbItem>
    </Breadcrumb>
    </div>
    </div>
        <header  className="App-header">

      
    
    

    <div className="container">
    
         
        </div>

          <h4></h4>
          <h1></h1>
          <div className="container">
            <div className="row align-items-start">            <div className="col-12 col-md m-1">
          <RenderCard item={props.web} /></div>
          <div className="col-12 col-md m-1"> <RenderCard item={props.machine} /></div>
          <div className="col-12 col-md m-1"> <RenderCard item={props.android} /></div>
          </div>

          </div>
        </header>
        </div>
     
  );
}
export default Skills;