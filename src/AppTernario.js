import './App.css';
import Home from "./components/Home";
import Loguin from "./components/Loguin";
import { useState } from "react";

function App() {

  const [loguin, setLoguin] = useState("juan");

  return (
    <div className="App">
      <header className="App-header">
        {loguin ? <Loguin /> : <Home />}
        
      </header>
    </div>
  );
}

export default App;