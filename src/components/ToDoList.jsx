import { useState, useEffect } from "react";
import Form from "./Form";
import Entry from "./Entry";
import { uid } from "../utils/uid";


// import {} from "./style.css";

function ToDoList() {
  const [list, setList] = useState([
    { id: uid(), todo: "Do Housework", completed: false },
    { id: uid(), todo: "Write Code", completed: false },
    { id: uid(), todo: "Clean Home", completed: false },
    { id: uid(), todo: "Take a cinema ticket", completed: false },
  ]);

  useEffect(() => {
    console.log(list);
  }, [list]); //KAYITLARIN KONSOLDA

  return (
    <div>
      <h1> To Do List</h1>

      <Form addList={setList} list={list} />

      <Entry list={list} addList={setList} />
    </div>
  );
}

export default ToDoList;
