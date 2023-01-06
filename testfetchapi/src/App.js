import "./App.css";
import Select from "react-select";
import { useEffect, useState } from "react";

function App() {
  const [dataArray, setDataArray] = useState([]);
  const [userSelect, setUserSelect] = useState("");
  const [isDiplay, setIsDisplay] = useState(false);

  const getBerries = async () => {
    const dataAPI = await fetch("https://pokeapi.co/api/v2/berry/");
    const value = await dataAPI.json();

    let result = value.results.map((data) => {
      return {
        label: data.name,
        value: data.url,
      };
    });
    setDataArray(result.sort((a, b) => a.label.localeCompare(b.label)));
  };

  useEffect(() => {
    getBerries();
  }, []);

const handelSubmit = () => {
  setIsDisplay(state => !state);
}

const handleChange = (value) => {
  setUserSelect(value);
}

  return (
    <div className="App">
      <h1>{isDiplay? userSelect : ""}</h1>
      <button onClick={() => handelSubmit()} disabled={!userSelect}>{isDiplay ? "Hide Button" : "Show Value"}</button>
      <br/><br/>
      <Select options={dataArray} onChange={(e) => handleChange(e.label)}></Select>
    </div>
  );
}

export default App;