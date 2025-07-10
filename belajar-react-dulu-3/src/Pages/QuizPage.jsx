import { useState } from "react";

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [form, setForm] = useState({
    question: "",
    options: ["", "", "", ""],
    correct: "",
  });

  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  // Tambah soal
  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (
      form.question.trim() &&
      form.options.every((opt) => opt.trim() !== "") &&
      form.correct
    ) {
      setQuestions([...questions, form]);
      setForm({ question: "", options: ["", "", "", ""], correct: "" });
    }
  };

  // Cek jawaban user
  const handleAnswer = () => {
    if (!selectedAnswer) return;
    const correct = questions[selectedQuestionIndex].correct;
    setIsCorrect(selectedAnswer === correct);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Buat Soal Quiz</h2>

      <form onSubmit={handleAddQuestion} className="mb-8 space-y-4 bg-gray-100 p-4 rounded">
        <input
          type="text"
          placeholder="Tulis pertanyaan..."
          className="w-full border p-2 rounded"
          value={form.question}
          onChange={(e) => setForm({ ...form, question: e.target.value })}
        />

        {form.options.map((opt, i) => (
          <input
            key={i}
            type="text"
            placeholder={`Pilihan ${String.fromCharCode(65 + i)}`}
            className="w-full border p-2 rounded"
            value={opt}
            onChange={(e) => {
              const newOptions = [...form.options];
              newOptions[i] = e.target.value;
              setForm({ ...form, options: newOptions });
            }}
          />
        ))}

        <select
          className="w-full border p-2 rounded"
          value={form.correct}
          onChange={(e) => setForm({ ...form, correct: e.target.value })}
        >
          <option value="">Pilih jawaban yang benar</option>
          {form.options.map((opt, i) => (
            <option key={i} value={opt}>{`Pilihan ${String.fromCharCode(65 + i)}: ${opt}`}</option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Tambah Soal
        </button>
      </form>

      {/* Menampilkan soal untuk dijawab */}
      <h3 className="text-xl font-semibold mb-2">Pilih Soal untuk Dijawab</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {questions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedQuestionIndex(idx);
              setSelectedAnswer("");
              setIsCorrect(null);
            }}
            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
          >
            Soal {idx + 1}
          </button>
        ))}
      </div>

      {selectedQuestionIndex !== null && (
        <div className="bg-white border p-4 rounded shadow-md">
          <p className="font-bold mb-2">
            {questions[selectedQuestionIndex].question}
          </p>
          {questions[selectedQuestionIndex].options.map((opt, i) => (
            <label key={i} className="block mb-2">
              <input
                type="radio"
                name="answer"
                value={opt}
                checked={selectedAnswer === opt}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                className="mr-2"
              />
              {opt}
            </label>
          ))}
          <button
            onClick={handleAnswer}
            className="mt-2 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
          >
            Cek Jawaban
          </button>

          {isCorrect !== null && (
            <div className={`mt-4 p-3 rounded ${isCorrect ? "bg-green-100" : "bg-red-100"}`}>
              {isCorrect ? "✅ Jawaban Benar!" : "❌ Jawaban Salah"}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default QuizPage;