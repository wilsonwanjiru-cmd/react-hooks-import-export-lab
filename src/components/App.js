import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  const username = "Liza";
  const city = "New York";
  const image = "./images/demo.png";

  return (
    <div>
      <NavBar />
      <Home username={username} city={city} />
      <About image={image} />
    </div>
  );
}

export default App;

