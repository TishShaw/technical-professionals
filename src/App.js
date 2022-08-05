import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import "./App.css";
import Banner from "./components/banner/Banner";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Banner/>
      <Services/>
    </div>
  );
}

export default App;
