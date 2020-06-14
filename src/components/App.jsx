import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);
  function addItem(item) {
    setNoteList(prevNotes => {
      return [...prevNotes, item];
    });
  }

  function deleteItem(id) {
    setNoteList(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {noteList.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
