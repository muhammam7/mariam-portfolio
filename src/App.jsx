import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Connect from "./components/Connect.1";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="connect">
          <Connect />
        </section>
      </main>
    </>
  );
}

export default App;
