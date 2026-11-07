// import axios from "axios";
// import { useState } from "react";


// function App() {
 
//   const [data , setData] = useState({});

//   const API = "http://localhost:3000/";

//   async function getdata(){
//   const response = await  axios.get(API);
//     setData(response.data);
    
//   }

//   getdata();


//   return (
//   <>
  
//   <h1>Home Page</h1>
//   <h2>{data.message}</h2>
  
//   </>
//   )
// }

// export default App


// ====================================================================================

import axios from "axios";
import { useState } from "react";


function App() {
 
  const [data , setData] = useState({});

  const API = "http://localhost:3000/";

  async function getdata(){
  const response = await  axios.get(API);
    setData(response.data);
    
  };

  getdata();


  return (
  <>
  
  {/* <h1>Home Page</h1> */}
  <h2>{data.message}</h2>
  
  </>
  )
}

export default App
