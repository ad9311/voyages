import content from '@/app/content/posts.json';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import PostContent from './PostContent';

async function getPost(id: number | string) {
  if (Number.isInteger(Number(id))) {
    const post = content.posts.find(p => p.id === Number(id));
    return post;
  }
  return undefined;
}

async function PostContentPage({ params }: { params: Params}) {
  const post = await getPost(params.id);

  return (
    <>
      {post ? <PostContent {...post} /> : <div>HOLA</div>}
    </>
  )
}

export default PostContentPage;
