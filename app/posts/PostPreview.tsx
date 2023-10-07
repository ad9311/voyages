import Link from 'next/link';
import { Post } from '../defs';
import { formatDate } from '../helpers/formatDate';

function PostPreview(props: Post) {
  return (
    <article className="h-full border px-2 py-3">
      <Link href={`/posts/${props.id}`}>
        <h2 className="text-xl font-bold">{props.title}</h2>
      </Link>
      <p>{props.description}</p>
      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm">{props.author}</p>
        <p className="italic text-xs">{formatDate(props.publishedAt)}</p>
      </div>
    </article>
  );
}

export default PostPreview;
