import { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <input
        className="title"
        placeholder="Add Todo"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button
        className="Add"
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
      >
        Add List
      </button>
    </div>
  );
};

export default AddTodo;
