import { json, Link, useLoaderData } from "remix";

import { getPosts } from "~/post";
import type { Post } from "~/post";

export const loader = async () => {
  return json(await getPosts());
};

export default function Index() {
  const posts = useLoaderData<Post[]>();
  return (
    <>
      <h1 style={{ marginBottom: 0, borderBottom: `1px solid hsla(0, 0%, 0%, 0.2)` }}>高木のブログ</h1>
      <h2>記事一覧</h2>
      <main>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={post.id}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
