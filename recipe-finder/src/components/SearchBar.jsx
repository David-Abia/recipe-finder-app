import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Search recipes..."
        className="flex-1 p-3 rounded-xl border"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-6 rounded-xl hover:bg-blue-700">
        Search
      </button>
    </form>
  );
}