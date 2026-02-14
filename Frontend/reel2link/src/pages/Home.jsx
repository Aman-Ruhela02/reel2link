import React from 'react'
import { useState } from "react";
import Navbar from "../components/Navbar";
import ReelForm from "../components/ReelForm";
import ResultCard from "../components/ResultCard";
import { useEffect  } from "react";
import { trackEvent } from "../utils/analytics.js";
import SEO from "../components/SEO";
import AdBanner from "../components/AdBanner";

function Home() {
 const [result, setResult] = useState(null);
  useEffect(() => {
  trackEvent("page_view");
}, []);

  return (
    <>
    <SEO
  title="Instagram Reel Caption Extractor - Make Links Clickable | Reel2Link"
  description="Free Instagram Reel & Post Caption Extractor. Extract captions and turn hidden links into clickable format. No login required."
/>


       <div className="min-h-[100dvh] flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <Navbar />
      
            {/* HERO */}
            <section className="px-4 pt-14 pb-12 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                Instagram Reel Caption Extractor
                <br className="hidden sm:block" />
                  Turn Captions into Clickable <span className='text-blue-500'>Links</span></h1>
      
              <p className="text-gray-600 max-w-xl mx-auto mb-8 text-base sm:text-lg">
                Extract Instagram reel captions instantly and convert hidden links into
                clickable format — no login, no signup required.
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

              <AdBanner />

              {/* FUTURE INLINE AD (MOBILE FIRST) */}
              <div className="mt-10 md:hidden bg-gray-100 border border-dashed border-gray-300 rounded-xl p-4 text-center text-sm text-gray-500">
                Advertisement (Coming soon)
              </div>
            </main>
      
            {/* How to Extract Instagram Reel Caption (Step-by-Step) */}
            {/* HOW TO SECTION */}
<section className="bg-white py-14 md:py-20 px-4">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
      📋 How to Extract Instagram Reel Caption (Step-by-Step Guide)
    </h2>

    <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm">
      <ol className="space-y-4 text-gray-700">
        <li className="flex items-start gap-3">
          <span className="text-blue-600 text-xl">🔗</span>
          <span>Open Instagram and copy the Reel URL.</span>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-blue-600 text-xl">📋</span>
          <span>Paste the Reel link into the Reel2Link input box.</span>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-blue-600 text-xl">⚡</span>
          <span>Click the extract button.</span>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-blue-600 text-xl">📝</span>
          <span>Instantly view the full caption in clean format.</span>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-blue-600 text-xl">✅</span>
          <span>Click any link inside the caption or copy it easily.</span>
        </li>
      </ol>
    </div>
  </div>
</section>

      
      
            {/* WHY SECTION */}
            <section className="bg-white py-12 md:py-16 px-4">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-10">
                  Why Instagram Reel Links Are Frustrating
                </h2>
      
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "❌ Links in captions are not clickable",
                    "❌ Copy-pasting captions is slow and annoying",
                    "❌ Important affiliate links are hidden in text",
                    "❌ Researching competitor captions takes time",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 rounded-xl px-5 py-4 text-gray-700 text-left md:text-center"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
            {/* HOW IT HELPS */}
            <section className="bg-gray-50 py-12 md:py-16 px-4">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-10">
                  How Reel2Link Helps Creators & Marketers
                </h2>
      
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    "✔ Extract reel captions instantly",
                    "✔ Make hidden links clickable",
                    "✔ Copy captions easily for research",
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
      
            {/* SEO CONTENT */}
            <section className="bg-white py-14 md:py-20 px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                  Free Instagram Reel Caption Extractor Tool
                </h2>
      
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Reel2Link is a free online Instagram Reel Caption Extractor that helps
                  creators, affiliate marketers, and social media managers extract
                  captions and convert links into clickable format. Instagram does not
                  allow clickable links inside reel captions, which makes accessing
                  affiliate links, course links, or website URLs difficult.
                </p>
      
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With Reel2Link, you simply paste the Instagram reel URL and instantly
                  get the full caption displayed in a clean and easy-to-copy format.
                  Any links inside the caption become clickable, saving you time and
                  improving workflow efficiency.
                </p>
      
                <h3 className="text-xl font-semibold mt-8 mb-4">
                  Who Can Use This Tool?
                </h3>
      
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Instagram content creators</li>
                  <li>Affiliate marketers</li>
                  <li>Digital marketing agencies</li>
                  <li>Social media managers</li>
                  <li>Content researchers and analysts</li>
                </ul>
      
                <h3 className="text-xl font-semibold mt-8 mb-4">
                  Why Use Reel2Link?
                </h3>
      
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Fast and simple interface</li>
                  <li>No login required</li>
                  <li>Works on mobile and desktop</li>
                  <li>Secure and lightweight</li>
                  <li>Free to use</li>
                </ul>
              </div>
            </section>
      
             {/* SAFETY SECTION */}
<section className="bg-gray-50 py-14 md:py-20 px-4">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
      🔒 Is Reel2Link Safe to Use?
    </h2>

    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm text-gray-700 leading-relaxed">
      <p className="flex items-start gap-3">
        <span className="text-green-600 text-xl">🛡️</span>
        <span>
          Reel2Link does not require login credentials and does not store
          Instagram data.
        </span>
      </p>

      <p className="flex items-start gap-3 mt-4">
        <span className="text-green-600 text-xl">📄</span>
        <span>
          We only process publicly available caption text from the reel link
          you provide.
        </span>
      </p>

      <p className="flex items-start gap-3 mt-4">
        <span className="text-green-600 text-xl">🔐</span>
        <span>
          Your privacy and security are important to us.
        </span>
      </p>
    </div>
  </div>
</section>

      
      
            {/* FAQ SECTION */}
            <section className="bg-gray-50 py-14 px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                  Frequently Asked Questions
                </h2>
      
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="font-semibold mb-2">
                      Is Reel2Link free to use?
                    </h3>
                    <p>
                      Yes, Reel2Link is completely free to use for extracting Instagram
                      reel captions and making links clickable.
                    </p>
                  </div>
      
                  <div>
                    <h3 className="font-semibold mb-2">
                      Do I need to log in?
                    </h3>
                    <p>
                      No login or signup is required. Simply paste the reel link and
                      extract the caption instantly.
                    </p>
                  </div>
      
                  <div>
                    <h3 className="font-semibold mb-2">
                      Does Reel2Link store Instagram data?
                    </h3>
                    <p>
                      No. We do not store or host Instagram content. We only process
                      publicly available caption text for easier access.
                    </p>
                  </div>
      
                  <div>
                    <h3 className="font-semibold mb-2">
                      Can I download Instagram reels?
                    </h3>
                    <p>
                      Download functionality is currently not available.
                    </p>
                  </div>
                </div>
              </div>
            </section>
      
            {/* FOOTER */}
            <footer className="bg-gray-900 text-gray-300 py-6 text-center text-xs sm:text-sm mt-auto">
              © {new Date().getFullYear()} Reel2Link • Built for creators & marketers
            </footer>
          </div>
    </>
  )
}

export default Home
