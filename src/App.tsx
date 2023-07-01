import "./App.css";
import Hero from "./Pages/Hero";
import classes from "./App.module.css";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";

function App() {
  return (
    <div className={classes.container}>
      <Hero />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
