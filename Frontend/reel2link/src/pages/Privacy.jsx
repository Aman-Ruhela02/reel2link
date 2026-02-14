import Navbar from "../components/Navbar";
import SEO from "../components/SEO";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy - Reel2Link"
        description="Privacy Policy for Reel2Link explaining data collection, cookies, and third-party advertising."
      />

      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          At Reel2Link, we respect your privacy. This Privacy Policy explains how we collect, use, and protect your information.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Information We Collect</h2>

        <p className="mb-4">
          Reel2Link does not require users to create an account or provide personal information to use our tool.
        </p>

        <p className="mb-4">
          We may collect non-personal information such as browser type, device type, and usage data for analytics and service improvement purposes.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Cookies</h2>

        <p className="mb-4">
          We may use cookies to enhance user experience and analyze website traffic.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Third-Party Services</h2>

        <p className="mb-4">
          We may use third-party services such as Google Analytics and Google AdSense. These services may use cookies and web beacons to collect information for advertising and analytics purposes.
        </p>

        <p className="mb-4">
          Google AdSense may use the DoubleClick cookie to serve ads based on users’ visits to this and other websites.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Data Security</h2>

        <p className="mb-4">
          We take reasonable measures to protect user data, but no method of transmission over the Internet is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Changes to This Policy</h2>

        <p className="mb-4">
          We may update this Privacy Policy from time to time. Changes will be posted on this page.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Contact Us</h2>

        <p>
          If you have questions about this Privacy Policy, contact us at:
          <br />
          <strong>your@email.com</strong>
        </p>
      </div>
    </>
  );
}
