import { useEffect, useState } from "react";
import { client } from "../lib/sanity";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(publishedAt desc){
        title,
        slug,
        publishedAt,
        body
      }`
      )
      .then(setPosts);
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <article key={post.slug.current}>
          <h2>{post.title}</h2>
          <p>{new Date(post.publishedAt).toDateString()}</p>
          {/* Here we’re just showing the first block of body content */}
          <p>{post.body[0]?.children[0]?.text}</p>
        </article>
      ))}
    </div>
  );
}
