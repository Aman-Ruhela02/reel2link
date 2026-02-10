import { useState } from "react";
import Navbar from "./components/Navbar";
import ReelForm from "./components/ReelForm";
import ResultCard from "./components/ResultCard";

export default function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navbar />

      {/* HERO */}
      <section className="px-4 pt-14 pb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Turn Instagram Reel Captions
          <br className="hidden sm:block" />
          into Clickable Links
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto mb-8 text-base sm:text-lg">
          Extract captions, uncover hidden links, and download reels instantly —
          no login, no signup.
        </p>

        <a
          href="#extract"
          className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition"
        >
          Paste Reel Link
        </a>
      </section>

      {/* TOOL */}
      <main
        id="extract"
        className="px-4 max-w-7xl mx-auto w-full pb-16 flex-1"
      >
        <div className="flex flex-col items-center">
          <ReelForm setResult={setResult} />
          {result && <ResultCard result={result} />}
        </div>

        {/* FUTURE INLINE AD (MOBILE FIRST) */}
        <div className="mt-10 md:hidden bg-gray-100 border border-dashed border-gray-300 rounded-xl p-4 text-center text-sm text-gray-500">
          Ad space (Coming soon)
        </div>
      </main>

      {/* WHY SECTION */}
      <section className="bg-white py-10 md:py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Why Instagram Links Are Frustrating
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "❌ Links in captions are not clickable",
              "❌ Copy-pasting captions is annoying",
              "❌ Important links are hidden in text",
              "❌ Instagram doesn’t allow easy downloads",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50  rounded-xl px-5 py-4 text-gray-700 text-left md:text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT HELPS */}
      <section className="bg-gray-50 py-10 md:py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            How Reel2Link Helps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "✔ Extract captions instantly",
              "✔ Click hidden links directly",
              "✔ Download reels when available",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm text-gray-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-xs sm:text-sm mt-auto">
        © {new Date().getFullYear()} Reel2Link • Built for creators & marketers
      </footer>
    </div>
  );
}
