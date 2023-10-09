import content from '@/app/content/posts.json';
import { PostProps } from '../defs';
import PostListContent from './PostListContent';

async function fetchPosts() {
  // Simulates an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return content.posts as PostProps[];
}

async function PostList() {
  const posts = await fetchPosts();

  return <PostListContent posts={posts} />;
}

export default PostList;
