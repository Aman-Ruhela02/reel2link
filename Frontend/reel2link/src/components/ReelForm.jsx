import { useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { API_URL } from "../config/api";

export default function ReelForm({ setResult }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await axios.post(`${API_URL}/api/extract`, { url });
      setResult(res.data);
    } catch {
      setResult({ success: false, message: "Failed to fetch reel data" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full max-w-2xl flex flex-col sm:flex-row gap-3"
    >
      <input
        type="text"
        placeholder="Paste Instagram reel URL here"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? <Loader /> : "Extract"}
      </button>
    </form>
  );
}
