import "./App.css";
import Links from "./components/Links";
import PersonalStatement from "./components/PersonalStatement";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

function App() {
  return (
    <div className="section-wrapper">
      <header className="text-3xl text-center m-10">
        Will Simms - Junior Software Engineer
      </header>
      <div className="section-wrapper">
        <Links />
        <PersonalStatement />
        <Tech />
        <Projects />
      </div>
    </div>
  );
}

export default App;
