function NoteCard({ judul, children, onDelete }) {
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>{judul}</h3>
        <button
          onClick={onDelete}
          style={{
            backgroundColor: "#e74c3c",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "0.25rem 0.75rem",
            cursor: "pointer"
          }}
        >
          Hapus
        </button>
      </div>
      {children}
    </div>
  );
}

export default NoteCard;