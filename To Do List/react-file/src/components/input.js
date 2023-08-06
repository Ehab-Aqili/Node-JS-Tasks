import React, { useState } from "react";
import Axios from "axios";

const InputToDo = (props) => {
  const [postData, setPostData] = useState("");

  const Post = async () => {
    try {
      await Axios.post("http://127.0.0.1:8080/", { ToDo: postData });
      setPostData("");
    } catch (error) {
      console.error(error);
    }
  };

  const sendDataToParent = (value) => {
    props.myFunc(value);
  };

  return (
    <>
      <input
        onChange={(e) => {
          const value=e.target.value
          setPostData(value);
          sendDataToParent(value);
        }}
        type="text"
        name="toDo"
        value={postData}
      />
      <button onClick={Post}>Add</button>
    </>
  );
};

export default InputToDo;
