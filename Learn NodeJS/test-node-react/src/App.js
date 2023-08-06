import { React, useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://127.0.0.1:8080/");
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: data }} />{" "}
    </>
  );
}

export default App;
