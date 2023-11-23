import Destination from "./components/Destination";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Select from "./components/Select";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Destination />
        <Search />
        <Select />
        <Slider />
        <Footer />
      </div>
    </>
  );
}

export default App;
