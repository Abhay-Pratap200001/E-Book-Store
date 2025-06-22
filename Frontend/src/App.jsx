// import React from 'react'
// import Navbar from './component/Navbar'
// import Banner from './component/Banner'
// import Footer from './component/Footer'

// function App() {
//   return (
//     <div >

//       <Navbar/>
//       <Banner/>
//       <Footer/>
//     </div>
//   )
// }

// export default App


import React from "react";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Freebook from "./component/Freebook";
import Cards from "./component/Card";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Banner />
      <Freebook/>
      <Footer />
    </div>
  );
}

export default App;
