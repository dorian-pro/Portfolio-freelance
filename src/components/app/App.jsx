import Header from "../header/Header";
import Home from "./home/Home";
import About from "./about/About";
import "./App.scss";
import Portfolio from "./portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <main>
        <h1 className="d-none">Portfolio Développeur web Freelance Dorian Maréchal</h1>
        <Home />
        <About />
        <Portfolio />
      </main>
      
    </>
  );
}

export default App;
