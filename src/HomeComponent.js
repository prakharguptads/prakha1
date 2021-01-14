import React from 'react';
import { Button , Card , CardImg, CardText} from 'reactstrap';
function Home(props){
  return(
      
        <div>  
        <header  className="App-header">

          <h2 className="red-color">Prakhar Gupta</h2>
          <h1></h1>
          <br></br>
          <br></br>
          <p>

          </p>
          <div className="container"> 
            <div className="row align-center"> 
            <div className="col">      
              <img className="img" src="p2.jpg"></img></div>
              <div className="col">
               Currently pursuing my B.Tech degree in Computer Science and Engineering.
               Further looking for intership in various fields of interest, Machine Learning,
               Android App Development.<br></br>
               <br></br>
               Apart from this had a good knowledge in Data Structure, Algorithms, Operating System
               Database Management.
               </div>
              </div>
              </div>

        </header>
        </div>
     
  );
}
export default Home