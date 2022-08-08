import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import "./App.css";
import Banner from "./components/banner/Banner";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Banner/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
