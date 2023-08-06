import Axios from "axios";
import React, { useState } from "react";

const EditBtn = (props) => {
  // const [editData, setEditData] = useState("");
  const editValue = props.value;
  const id = props.id;
  const patchData = async () => {
    try {
      await Axios.patch(`http://127.0.0.1:8080/${id}`, { ToDo: editValue });
      console.log("Data successfully patched");
    } catch (error) {
      console.error("Error patching data:", error);
    }
  };
  return (
    <>
      <button onClick={patchData}>Edit</button>
    </>
  );
};

export default EditBtn;
