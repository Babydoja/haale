import Header from "./Sport/Header/Header";
import Navbar from "./Sport/Navbar/Navbar";

import "./App.css";
import Product from "./Sport/Product/Product";
import Download from "./Sport/download/Download";
// import Work from "./Sport/Work/Work";
// import Api from "./Sport/Api/Api";
import Features from "./Sport/features/Features";
import Subscribe from "./Sport/subscribe/Subscribe";
import Footer from "./Sport/footer/Footer";

function App() {
  return (
    <div className="App">
    <header>
      <Navbar/>  
      <Header/>
    </header>
    <Features/>
    <Download/>
    <Product/>
    <Subscribe/>
    <Footer/>
    {/* <Api/>
    <Work/> */}
    
    </div>
  );
}

export default App;
