import { useState } from "react";
import { uid } from "../utils/uid";

function Form({ addList, list }) {
  const [form, setForm] = useState({ id: "", todo: "", completed: false });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.todo === "") {
      return false;
    }

    form.id = uid()

    addList([...list, form]);
    setForm({ todo: "" });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="todo"
          placeholder="What needs to be done?"
          value={form.todo}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <button>Add Todo</button>
      </div>
    </form>
  );
}

export default Form;
