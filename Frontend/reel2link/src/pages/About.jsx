import Navbar from "../components/Navbar";
import SEO from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="About Reel2Link - Instagram Caption Extractor Tool"
        description="Learn about Reel2Link, a free tool that helps users extract Instagram captions and convert hidden links into clickable format."
      />

      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl text-blue-500 font-bold mb-6">About Reel2Link</h1>

        <p className="mb-4">
          Reel2Link is a free online tool designed to help users extract Instagram reel and post captions quickly and easily.
        </p>

        <p className="mb-4">
          Instagram does not allow clickable links inside captions, which creates challenges for affiliate marketers, creators, and businesses. Reel2Link solves this problem by extracting captions and converting URLs into clickable format.
        </p>

        <p className="mb-4">
          Our mission is to make Instagram content more accessible and useful for marketers, researchers, and everyday users.
        </p>

        <h2 className="text-xl text-blue-500 font-semibold mt-8 mb-3">What We Offer</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Instagram caption extraction</li>
          <li>Clickable link conversion</li>
          <li>No login required</li>
          <li>Completely free access</li>
        </ul>

        <h2 className="text-xl text-blue-500 font-semibold mt-8 mb-3">Contact</h2>

        <p>
          If you have questions, suggestions, or feedback, please contact us at:
          <br />
          <strong>technologieszentrox@email.com</strong>
        </p>
      </div>
    </>
  );
}
