import './App.css';
import Home from "./components/Home";
import Loguin from "./components/Loguin";
import { useState } from "react";

function App() {

  const [loguin, setLoguin] = useState("juan");

  function condicional () {
    if (loguin === null) return <Home />;
    else return  <Loguin />
  }

  return (
    <div className="App">
      <header className="App-header">
        {condicional()}        
      </header>
    </div>
  );
}

export default App;