import React, { useEffect, useState } from "react";
import "./App.css";
import InputToDo from "./components/input";
import Axios from "axios";
import Delete from "./components/deletBtn";
import Edit from "./components/editBtn";

const App = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://127.0.0.1:8080/");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
 
  const [resivedValue, setResivedValue] = useState();
   const resiveData = (data) =>{
    setResivedValue(data)
   }
  return (
    <>
      <main style={{ marginLeft: "200px" }}>
        <InputToDo myFunc={resiveData }/>
        <div>
          <ul>
            {data.map((item) => {
              return (
                <li key={item.id}>
                  {item.ToDo}
                  <Delete />
                  <Edit id={item.id} value={resivedValue}/>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default App;
