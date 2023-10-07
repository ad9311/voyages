import content from '@/app/content/posts.json';
import { Post } from '../defs';
// import PostPreview from './PostPreview';
import PostListContent from './PostListContent';

async function fetchPosts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return content.posts as Post[];
}

async function PostList() {
  const posts = await fetchPosts();

  return <PostListContent posts={posts} />;
}

export default PostList;
