import React from "react";
import Destination from "./components/Destination";
import NavBar from "./components/NavBar";
import Data from "./data"
import "./app.scss"

function App() {

  const travelCards = Data.map(item => {
    return <Destination {...item}/>
  })

  return (
    <div>
      <NavBar/>
      <div className="container">
        {travelCards}
      </div>
    </div>
  );
}

export default App;
