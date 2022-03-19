import { client } from '~/lib/microcms/client.server';

export type Post = {
  id: string;
  title: string;
  text: string;
};

export async function getPosts() {
  const response = await client.getList<Post>({endpoint: 'note'});
  return Promise.all(
    response.contents.map((post) => {
      return {
        id: post.id,
        title: post.title,
      };
    })
  );
}

export async function getPost(id: string) {
  const content = await client.get<Post>({endpoint: 'note', contentId: id })
                              .catch(() => {
                                throw new Response('Content Not Found.', {
                                  status: 404,
                                });
                              });
  return content;
}
