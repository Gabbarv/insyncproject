import React, { useEffect, useState } from "react";
import "./App.css";
import Movies from "./movielist/Movies";
import Navbar from "./Navbar/Navbar";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Navbar search={search} setSearch={setSearch} />
      <h1 className="heading">Most Recent Movies</h1>
      <Movies search={search} />
    </div>
  );
}

export default App;
