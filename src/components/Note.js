import React, { useContext } from "react";
import NotesContext from "../context/notes-context";
import useMousePosition from "../hooks/useMousePosition";

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);

  const removeNote = (title) => {
    dispatch({ type: "REMOVE_NOTE", title });
  };

  const position = useMousePosition();

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>
        {position.x}, {position.y}
      </p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  );
};

export { Note as default };
