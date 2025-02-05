//  import React from "react";
// function App() {

//   // let ele = React.createElement("div",{className:"App"},
//   //   React.createElement("h1",null,"header")
//   // )
//   let username="vaishu";
//   return (
//     // <div className="App">
//     //   <h1 style={{color:"red"}}>One hour is wasted in clearing errors</h1>
//     // </div>
//     // ele
//   //   <section>
//   //     <h1>one jsx element</h1>
//   //     <p>lorm3</p>
//   //   </section>
//   // );
//   <div>
//     <h1>{username}</h1>
//     <p>{100+100}</p>
//   </div>
//     );
// }

// export default App;
 

// //!components
// //!CBC
// import React from "react";
// class App extends React.Component{
//   render(){
//     return(
//     <h1> class based components</h1>
//     )
//   }
// }
// export default App;

// //!Fbc

// function App(){
//   return(
    
//   )
// }


//! component composition
// import React from "react"
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Sidebar1 from './components/Sidebar1'
// import Sidebar2 from './components/Sidebar2'
// import Footer from './components/Footer'
// const App=()=>{
//   return(
//     <div className="app">
//       <Navbar/>
//       <Main/>
//       <div className='sidebar'>
//         <Sidebar1/>
//         <Sidebar2/>
//       </div>
//       <Footer/>
//     </div>
//   )
// }
// export default App

//! props
import React, {Component} from 'react'
import CBCPropEx from './components/CBCPropEX'
import FBCPropEx from './components/FBCPropEX'

export default class App extends Component{
  render(){
    return(
    <div>
      {/* /* <CBCPropEx
      username="vaishu"
      age={20}
      hobbies={["playing","dancing"]}
      address={{city:"jgtl"}}
      sendFun={function(){alert("hi i am vaishu")}}
      />
    </div>
    )
  }
} */ */}


<FBCPropEx
username="Sanju"
isMarried={true}
hobbies={["Reading","Writing","Eating"]}
/>
</div>
)
  }
}
