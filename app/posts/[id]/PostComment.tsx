import { PostComment } from '@/app/defs';
import React from 'react';

function PostComment({ comment }: { comment: PostComment }) {
  return (
    <>
      <p className="italic font-bold text-primary-dark">{comment.author}:</p>
      <div className="ml-5 px-3 py-4 border bg-white w-fit rounded-md">
        <p>{comment.content}</p>
      </div>
    </>
  );
}

export default PostComment;
