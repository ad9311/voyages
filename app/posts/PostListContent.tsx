'use client';

import { useMemo, useState } from 'react';
import { Post, SortPostsBy } from '../defs';
import sortPosts from '../helpers/sortPosts';
import PostPreview from './PostPreview';

function PostListContent({ posts }: { posts: Post[] }) {
  const [sortBy, setSortBy] = useState<SortPostsBy>('DATE');

  function handleSort(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortBy(e.target.value as SortPostsBy);
  }

  const mappedPosts = useMemo(() => {
    return sortPosts(posts, sortBy).map((post) => (
      <li key={post.id}>
        <PostPreview {...post} />
      </li>
    ));
  }, [sortBy, posts]);

  return (
    <>
      <form className="form">
        <label htmlFor="sort">
          Sort posts by:
          <select name="sort" id="sort" onChange={handleSort}>
            <option value="AUTHOR">Author</option>
            <option value="DATE">Date</option>
            <option value="TOPIC">Topic</option>
          </select>
        </label>
      </form>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {mappedPosts}
      </ul>
    </>
  );
}

export default PostListContent;
