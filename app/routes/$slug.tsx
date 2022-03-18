import { json, Link,  useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";

import { getPost } from "~/post";

export const loader: LoaderFunction = async ({
  params,
}) => {
  invariant(params.slug, "expected params.slug");
  return json(await getPost(params.slug));
};

export default function IndexSlug() {
  const post = useLoaderData();
  return (
    <>
      <h2>高木のブログ</h2>
      <h1 style={{ marginBottom: 0, borderBottom: `1px solid hsla(0, 0%, 0%, 0.2)` }}>{post.title}</h1>
      <main dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/">記事一覧</Link>
    </>
  );
}
