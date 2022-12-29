import './App.css';
import Home from "./components/Home";
import Loguin from "./components/Loguin";
import { useState } from "react";

function App() {

  const [loguin, setLoguin] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Home />
        {loguin && <Loguin  /> }
        
      </header>
    </div>
  );
}

export default App;