import content from '@/app/content/posts.json';
import { Post } from '../defs';
import PostPreview from './PostPreview';

async function fetchPosts() {
  return content.posts as Post[];
}

async function PostList() {
  const posts = await fetchPosts();

  const mappedPosts = posts.map(post => (
    <li key={post.id}>
      <PostPreview {...post} />
    </li>
  ));

  return (
    <ul>
      {mappedPosts}
    </ul>
  )
}

export default PostList;