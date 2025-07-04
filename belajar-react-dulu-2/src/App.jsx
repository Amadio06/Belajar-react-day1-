import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NoteCard from "./components/NoteCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, judul: "Catatan Pelajaran" },
    { id: 2, judul: "Catatan Keuangan" },
    { id: 3, judul: "Catatan Olahraga" },
  ]);

  const [input, setInput] = useState("");

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setNotes([...notes, { id: Date.now(), judul: input }]);
    setInput("");
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  useEffect(() => {
    document.title = `Jumlah Catatan: ${notes.length}`;
  }, [notes]);

  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <form onSubmit={handleAddNote} className="note-form">
          <input
            type="text"
            placeholder="Judul Catatan Baru"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Tambah</button>
        </form>

        {notes.map((note) => (
          <NoteCard key={note.id} judul={note.judul} onDelete={() => handleDeleteNote(note.id)}>
            <p>Ini adalah isi dari {note.judul}.</p>
          </NoteCard>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;



