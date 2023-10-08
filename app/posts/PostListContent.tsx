'use client';

import React, { useMemo, useState } from 'react';
import { OrderPostsMethod, Post, SortPostsBy } from '../defs';
import sortPosts from '../helpers/sortPosts';
import PostPreview from './PostPreview';

function PostListContent({ posts }: { posts: Post[] }) {
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
      <form className="mb-5 flex justify-between text-sm">
        <label htmlFor="sort" className="italic">
          Sort posts by:
          <br />
          <select
            name="sort"
            id="sort"
            onChange={handleSort}
            className="p-1 min-w-[10rem]"
            defaultValue="DATE">
            <option value="AUTHOR">Author</option>
            <option value="DATE">Date</option>
            <option value="CATEGORY">Category</option>
          </select>
        </label>
        <label htmlFor="order" className="italic">
          Order posts by:
          <br />
          <select name="order" id="order" onChange={handleOrder} className="p-1 min-w-[10rem]">
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
