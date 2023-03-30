import "./App.css";
import Links from "./components/Links";
import PersonalStatement from "./components/PersonalStatement";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

function App() {
  return (
    <div>
      <head>
        <title>Will Simms</title>
        <link rel="icon" href="/favicon.ico"></link>
      </head>
      <main className="page-content">
        <div className="flex justify-between bg-blue m-2 text-white">
          <header className="text-3xl text-center m-10 font-bold">
            Will Simms - Junior Software Engineer
          </header>
          <Links />
        </div>
        <div className="page-component-wrapper flex flex-col">
          <PersonalStatement />
          <Tech />
          <Projects />
        </div>
      </main>
    </div>
  );
}

export default App;
