
function NoteCard({ judul, children, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold text-gray-900">{judul}</h3>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Hapus
        </button>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export default NoteCard;