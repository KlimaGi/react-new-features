import React, { useState } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
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

// const App = (props) => {
//   const [count, setCount] = useState(props.count);
//   const [text, setText] = useState("");

//   const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     setCount(count - 1);
//   };
//   const reset = () => {
//     setCount(props.count);
//   };
//   const changeText = (e) => {
//     setText(e.target.value);
//   };

//   return (
//     <div>
//       <p>
//         The current {text || "count"} is {count}
//       </p>
//       <button onClick={increment}>+1</button>
//       <button onClick={reset}>reset</button>
//       <button onClick={decrement}>-1</button>
//       <input value={text} onChange={changeText} />
//     </div>
//   );
// };

// App.defaultProps = {
//   count: 0,
// };

ReactDOM.render(
  <React.StrictMode>
    <NoteApp count={2} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
