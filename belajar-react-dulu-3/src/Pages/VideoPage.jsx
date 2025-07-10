import { useState } from "react";

function AboutPage() {
   const [videos, setVideos] = useState([]);
  const [ytUrl, setYtUrl] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const videoId = ytUrl.split("v=")[1]?.split("&")[0];
    if (!videoId) return;

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    setVideos([...videos, { embedUrl, note }]);
    setYtUrl("");
    setNote("");
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-indigo-700 mb-4">Simpan Video Belajar</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-4 rounded mb-6">
        <input
          type="text"
          placeholder="Tempel link YouTube di sini..."
          value={ytUrl}
          onChange={(e) => setYtUrl(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <textarea
          placeholder="Catatan tentang video ini (misalnya: ini video penjelasan himpunan)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Simpan Video
        </button>
      </form>

      {videos.length === 0 && <p className="text-gray-500">Belum ada video tersimpan.</p>}

      {videos.map((video, index) => (
        <div key={index} className="mb-6 bg-white rounded shadow p-4">
          <div className="aspect-video mb-2">
            <iframe
              src={video.embedUrl}
              title={`Video ${index}`}
              width="100%"
              height="315"
              frameBorder="0"
              allowFullScreen
              className="rounded"
            ></iframe>
          </div>
          <p className="text-sm text-gray-700 italic">📝 {video.note}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutPage;
