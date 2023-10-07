import content from '@/app/content/posts.json';
import { Post } from '../defs';
import PostPreview from './PostPreview';

async function fetchPosts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return content.posts as Post[];
}

async function PostList() {
  const posts = await fetchPosts();

  const mappedPosts = posts.map((post) => (
    <li key={post.id}>
      <PostPreview {...post} />
    </li>
  ));

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
      {mappedPosts}
    </ul>
  );
}

export default PostList;
