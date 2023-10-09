'use client';

import React, { useMemo, useState } from 'react';
import { OrderPostsMethod, PostProps, SortPostsBy } from '../defs';
import sortPosts from '../helpers/sortPosts';
import PostPreview from './PostPreview';
import paginate, { countPages } from '../helpers/pagination';
import Paginator from '../components/Paginator';

function PostListContent({ posts }: { posts: PostProps[] }) {
  const [sortBy, setSortBy] = useState<SortPostsBy>('DATE');
  const [orderMethod, setOrderMethod] = useState<OrderPostsMethod>('ASC');
  const [page, setPage] = useState(1);

  function handleSort(e: React.ChangeEvent<HTMLSelectElement>) {
    setPage(1);
    setSortBy(e.target.value as SortPostsBy);
  }

  function handleOrder(e: React.ChangeEvent<HTMLSelectElement>) {
    setPage(1);
    setOrderMethod(e.target.value as OrderPostsMethod);
  }

  function handleOnPageChange(e: { selected: number }) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setPage(e.selected + 1);
  }

  const postsPerPage = 12;
  const pageCount = countPages(posts, postsPerPage);

  const sortedAndOrdedPosts = useMemo(() => {
    const sortedPosts = sortPosts(posts, sortBy);
    if (orderMethod === 'DESC') {
      return [...sortedPosts].reverse();
    }

    return [...sortedPosts];
  }, [posts, sortBy, orderMethod]);

  const paginatedPosts = useMemo(
    () =>
      (paginate(sortedAndOrdedPosts, postsPerPage, page) as PostProps[]).map((post) => (
        <li key={post.id}>
          <PostPreview {...post} />
        </li>
      )),
    [page, sortedAndOrdedPosts],
  );

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
        {paginatedPosts}
      </ul>
      <Paginator className="mt-10" onPageChange={handleOnPageChange} pageCount={pageCount} />
    </>
  );
}

export default PostListContent;
