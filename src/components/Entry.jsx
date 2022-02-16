import { useState, useEffect } from "react";
import { uid } from "../utils/uid";


function Entry({ list, addList, form }) {
  const [filter, setFilter] = useState("all");

  const onChange = (id) => {
    let changedList = list.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }

      return item;
    });
    addList([...changedList]);
  };

  const completedTodo = (e) => {
    e.preventDefault();
    setFilter("completed");
  };

  const activeTodo = (e) => {
    e.preventDefault();
    setFilter("active");
  };

  const allTodo = (e) => {
    e.preventDefault();
    setFilter("all");
  };

  const clearAllCompletedTodo = (e) => {
    e.preventDefault();
    let activeTodo = list.filter((item) => item.completed === false);
    addList([...activeTodo]);
    setFilter("all");
  };

  const filteredList = () => {
    if (filter == "all") {
      return list;
    } else if (filter == "completed") {
      return list.filter((item) => item.completed === true);
    } else if (filter == "active") {
      return list.filter((item) => item.completed === false);
    }

    return list;
  };

  return (
    <div>
      Filtre: {filter}
      <ul className="">
        {filteredList().map((li) => (
          <li key={li.id}>
           
            <input
              onChange={() => onChange(li.id)}
              type="checkbox"
              checked={li.completed}
            ></input>
            
            {li.todo}

            <button
              onClick={() => {
                const newData = list.filter((todo) => todo !== li);
                addList(newData);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <button onClick={allTodo} value="all">
        All
      </button>
      <button onClick={activeTodo} value="active">
        Active
      </button>
      <button onClick={completedTodo} value="completed">
        Completed
      </button>
      <button onClick={clearAllCompletedTodo} value="clear-completed">
        Clear Completed
      </button>
    </div>
  );
}

export default Entry;
