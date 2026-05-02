import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LatestWork from "./components/LatestWork";
import About from "./components/About";
import Footer from "./components/Footer";

function App(){
  return(
    <>
      <Navbar />
      <Hero />
      <LatestWork />
      <About />
      <Footer />
    </>
  );
}

export default App;