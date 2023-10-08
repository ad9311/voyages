import { PostComment } from '@/app/defs';
import React from 'react';

function PostComment({ comment }: { comment: PostComment }) {
  return (
    <div>
      <p>{comment.author}</p>
      <p>{comment.content}</p>
    </div>
  );
}

export default PostComment;
