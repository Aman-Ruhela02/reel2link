import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import AdBanner from "../components/AdBanner";
import { blogPosts } from "../data/blogData";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <div>Post not found</div>;

  return (
    <>
      <SEO title={post.title} description={post.description} />
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

        <AdBanner />

        <div className="text-gray-700 whitespace-pre-line leading-relaxed">
          {post.content}
        </div>

        <AdBanner />
      </div>
    </>
  );
}
