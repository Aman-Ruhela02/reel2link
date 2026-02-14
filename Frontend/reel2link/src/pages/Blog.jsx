import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blogData";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <SEO
        title="Reel2Link Blog - Instagram Marketing Tips"
        description="Learn how to make Instagram caption links clickable and grow your affiliate marketing using Reel2Link."
      />

      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>

        {blogPosts.map((post) => (
          <div key={post.slug} className="mb-10 border-b pb-6">
            <Link
              to={`/blog/${post.slug}`}
              className="text-xl font-semibold text-blue-600 underline hover:text-blue-800"
            >
              {post.title}
            </Link>
            <p className="text-gray-600 mt-3">{post.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
