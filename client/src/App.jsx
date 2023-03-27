import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Badge, ListGroup, Form, Button } from "react-bootstrap";
import axios from "axios";

function App() {
  const [isData, setIsData] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const api = "http://localhost:3001";

  useEffect(() => {
    axios
      .get(`${api}/users`)
      .then(({ data }) => setIsData(data.filter(({ name }) => name)));
  }, []);
  console.log("isData :>> ", isData);

  const createUser = () => {
    if (age && age && email) {
      axios
        .post(`${api}/createuser`, {
          name,
          age,
          email,
        })
        .then((res) => console.log("res.data :>> ", res.data));
    }
  };

  console.log(name, age, email);
  return (
    <div className="App">
      {isData.map(({ _id, name, age, email }) => (
        <ul key={_id}>
          <li>Name is: {name}</li>
          <li>age: {age}</li>
          <li>email: {email}</li>
        </ul>
      ))}
      <form>
        <input
          type={"text"}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type={"number"}
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type={"text"}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={createUser}>Create User</button>
      </form>
    </div>
  );
}

export default App;
