import Link from 'next/link';
import { Post, PostCategory } from '../defs';
import { formatDate } from '../helpers/formatDate';

function PostPreview(props: Post) {
  function categoryColor(category: PostCategory) {
    switch (category) {
      case 'Tips':
        return 'bg-yellow-300';
      case 'On a budget':
        return 'bg-purple-300';
      case 'Storytime':
        return 'bg-blue-300';
      default:
        return 'bg-neutral-300';
    }
  }

  return (
    <article className="h-full border px-2 py-3">
      <Link href={`/posts/${props.id}`}>
        <h2 className="text-xl font-bold">{props.title}</h2>
      </Link>
      <p>{props.description}</p>
      <strong
        className={`block mt-3 w-fit px-2 py-0.5 text-sm rounded-md ${categoryColor(
          props.category,
        )}`}>
        {props.category}
      </strong>
      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm">{props.author}</p>
        <p className="italic text-xs">{formatDate(props.publishedAt)}</p>
      </div>
    </article>
  );
}

export default PostPreview;
