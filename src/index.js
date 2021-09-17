import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

const NoteApp = () => {
  const notesData = JSON.parse(localStorage.getItem("notes"));
  const [notes, setNotes] = useState(notesData || []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    setNotes([...notes, { title, body }]);
    setTitle("");
    setBody("");
  };

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  });

  return (
    <div>
      <h2>Notes</h2>
      {notes.map((note) => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>x</button>
        </div>
      ))}
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <button>add note</button>
      </form>
    </div>
  );
};

const App = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState("");

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(props.count);
  };
  const changeText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log("useEffect ran");
    document.title = count;
  });

  return (
    <div>
      <p>
        The current {text || "count"} is {count}
      </p>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-1</button>
      <input value={text} onChange={changeText} />
    </div>
  );
};

App.defaultProps = {
  count: 0,
};

ReactDOM.render(<NoteApp />, document.getElementById("root"));

reportWebVitals();
