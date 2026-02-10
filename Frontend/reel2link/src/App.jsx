import { useState } from "react";
import Navbar from "./components/Navbar";
import ReelForm from "./components/ReelForm";
import ResultCard from "./components/ResultCard";

export default function App() {
  const [result, setResult] = useState(null);
  
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="px-4 pt-16 pb-12 text-center">
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
          className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white rounded-2xl text-base sm:text-lg font-semibold hover:bg-blue-700 transition"
        >
          Paste Reel Link
        </a>
      </section>

      {/* MAIN CONTENT + AD SPACE */}
      <main
        id="extract"
        className="flex flex-col lg:flex-row gap-6 px-4 max-w-7xl mx-auto w-full pb-16"
      >
        {/* TOOL */}
        <div className="flex-1 flex flex-col items-center">
          <ReelForm setResult={setResult} />
          {result && <ResultCard result={result} />}
        </div>

        {/* FUTURE ADS (RIGHT SIDEBAR) */}
        {/* <aside className="hidden lg:block w-64">
          <div className="sticky top-24 bg-gray-100 border border-dashed border-gray-300 rounded-xl p-4 text-sm text-gray-500 text-center">
            Ad space <br /> (Coming soon)
          </div>
        </aside> */}
      </main>

      {/* INFO SECTIONS */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Why Instagram Links Are Frustrating
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <p>❌ Links in captions are not clickable</p>
            <p>❌ Copy-pasting captions is annoying</p>
            <p>❌ Important links are hidden in text</p>
            <p>❌ Instagram doesn’t allow easy downloads</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            How Reel2Link Helps
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "✔ Extract captions instantly",
              "✔ Click hidden links directly",
              "✔ Download reels when available",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-xs sm:text-sm">
        © {new Date().getFullYear()} Reel2Link • Built for creators & marketers
      </footer>
    </div>
  );
}
