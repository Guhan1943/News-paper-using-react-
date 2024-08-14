// import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import './App.js';
// import App from './App';
// import Header from './components/header';
// import  Footer from './components/Footer';
// import Table from './components/content';















// function NewWesite(){
// return(
//     <div>
//      <Header/>
//      <Footer/>
//      <Table/>
//       {/* <Newone/>
//       <Newtwo/> */}
//     </div>
//   )
// }


// ReactDOM.render(<NewWesite/>,document.getElementById("root"));

	// class Reactstate extends React.Component{
	// constructor(){
	// super();
	// this.state={Mywebsite:"welcome to my page"}
	// }
	// render(){
	// return<h1>{this.state.Mywebsite}</h1>
    
	// }
  // }
  
  // ReactDOM.render(<Reactstate/>,document.getElementById("root"));


  // class ReactState extends React.Component{
//   constructor(){
  //     super();
  //     {
    //       this.state={Mywebsite:"Hello Soliders",class:"Ece",Subject:"Java"}
    //     }
    //   }
    //   changethevalue=()=>{
      //     this.setState({Mywebsite:"Hello Everyone",class:"AIML",Subject:"aEROOO"})
      //   }
      
      //   render(){
        //     return(
          //     <div>
          //     <h1>{this.state.Mywebsite},{this.state.class},{this.state.Subject}</h1>,
          //     <button type='button' onClick={this.changethevalue}>Click Me</button>
          //     </div>
          //     )
          //   }
          // }
          // ReactDOM.render(<ReactState/>,document.getElementById("root"));
          
          // class Reactprops extends React.Component{
            //   render(){
              //     return <h1>Welcome Squad{this.props.Mywebsite}</h1>
              //   }
              // }
              // ReactDOM.render(<Reactprops Mywebsite="Haii Everyone This is ARUNESH "/>,document.getElementById("root"));
//               import React, { useState } from 'react';

// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>  
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
// ReactDOM.render(<Example/>,document.getElementById("root"));

import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
ReactDOM.render(<Example/>,document.getElementById("root"));