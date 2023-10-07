import content from '@/app/content/posts.json';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import PostContent from './PostContent';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Loading from '@/app/loading';

async function getPost(id: number | string) {
  if (Number.isInteger(Number(id))) {
    const post = content.posts.find(p => p.id === Number(id));
    return post;
  }

  return undefined;
}

async function PostContentPage({ params }: { params: Params}) {
  const post = await getPost(params.id);
  if (!post) {
    notFound();
  }

  return (
    <main>
      <section>
        <Link href="/">Back</Link>
        <Suspense fallback={<Loading />}>
          <PostContent {...post} />
        </Suspense>
      </section>
    </main>
  )
}

export default PostContentPage;
