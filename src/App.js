import { useState, useEffect } from "react";
import React from "react";
import Cards from "./Components/Cards/Cards";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") 
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <h2>Fetched Data:</h2>
      {data.length > 0 ? (
        <div className="divNew">
          <ul>
            {data.slice(0, 5).map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong>
                <p>{item.email}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className="cards__div">
        <Cards data={data} />
        <Cards data={data} />
        <Cards data={data} />
        <Cards data={data} />
        <Cards data={data} />
        <Cards data={data} />
        <Cards data={data} />
        <Cards data={data} />
      </div>
    </div>
  );
}

export default App;
