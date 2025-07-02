import Navbar from "./components/Navbar";
import NoteCard from "./components/NoteCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div> 
      <Navbar />
      <div className="wrapper">
        <NoteCard judul="Catatan Pelajaran" />
        <NoteCard judul="Catata Keuangan"  />
        <NoteCard judul="Catatan Olahraga" />
        <NoteCard judul="Catatan Habit" />
        <NoteCard judul="Catatan Tugas" />
      </div>
      <Footer />
    </div>
  );
}

export default App;

