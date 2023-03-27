import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isData, setIsData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const respond = await fetch("http://localhost:3001").then((res) =>
        res.json()
      );
      if (respond) {
        setIsData(respond);
      }
    };
    data();
  }, []);

  // console.log("isData :>> ", isData);
  return <div className="App">
    <ul>
      {isData.map(item => (
        <li key={item.id}>Name is: {item.name} age: {item.age} email: {item.email} </li>
      ))}
        
    </ul>
    
  </div>;
}

export default App;
