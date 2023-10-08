'use client';

import React, { useMemo, useState } from 'react';
import { OrderPostsMethod, PostProps, SortPostsBy } from '../defs';
import sortPosts from '../helpers/sortPosts';
import PostPreview from './PostPreview';

function PostListContent({ posts }: { posts: PostProps[] }) {
  const [sortBy, setSortBy] = useState<SortPostsBy>('DATE');
  const [orderMethod, setOrderMethod] = useState<OrderPostsMethod>('ASC');

  function handleSort(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortBy(e.target.value as SortPostsBy);
  }

  function handleOrder(e: React.ChangeEvent<HTMLSelectElement>) {
    setOrderMethod(e.target.value as OrderPostsMethod);
  }

  const mappedPosts = useMemo(() => {
    const sortedPosts = sortPosts(posts, sortBy).map((post) => (
      <li key={post.id}>
        <PostPreview {...post} />
      </li>
    ));

    if (orderMethod === 'DESC') {
      return sortedPosts.reverse();
    }

    return sortedPosts;
  }, [posts, sortBy, orderMethod]);

  return (
    <>
      <form className="form mb-5 flex justify-between text-sm">
        <label htmlFor="sort" className="italic">
          Sort posts by:
          <br />
          <select name="sort" id="sort" onChange={handleSort} defaultValue="DATE">
            <option value="AUTHOR">Author</option>
            <option value="DATE">Date</option>
            <option value="CATEGORY">Category</option>
          </select>
        </label>
        <label htmlFor="order" className="italic">
          Order posts by:
          <br />
          <select name="order" id="order" onChange={handleOrder}>
            <option value="ASC">Ascending</option>
            <option value="DESC">Descending</option>
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
