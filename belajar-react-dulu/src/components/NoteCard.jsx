function NoteCard(props) {
  return (
    <div className="card">
      <h2>{props.judul}</h2>
      <p>{props.deskripsi}</p>
    </div>
  );
}

export default NoteCard;