import Link from 'next/link';
import { PostProps, PostCategory } from '../defs';
import { formatDate, formatDateTime } from '../helpers/formatDate';
import Image from 'next/image';

function PostPreview(props: PostProps) {
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
    <article className="h-full border border-orange-100 bg-orange-50 hover:bg-orange-100 px-4 pt-8 pb-3 grid sm:grid-rows-5 xl:grid-rows-6 rounded-md">
      <Link href={`/posts/${props.id}`} className="h-fit">
        <h2 className="text-xl font-bold text-primary-dark hover:text-primary">{props.title}</h2>
      </Link>
      <div className="row-start-2 sm:row-span-3 xl:row-span-4">
        <Link href={`/posts/${props.id}`} className="h-fit">
          <Image
            src={props.thumbnail}
            width={600}
            height={400}
            alt="thumbnail"
            className="rounded-md"
          />
          <p className="text-neutral-600">{props.description}</p>
        </Link>
      </div>
      <div className="row-start-5 xl:row-start-6">
        <strong
          title={props.category}
          className={`block mt-5 w-fit px-2 py-0.5 text-sm rounded-md ${categoryColor(
            props.category,
          )}`}>
          {props.category}
        </strong>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm text-primary">{props.author}</p>
          <p className="italic text-xs text-neutral-400" title={formatDateTime(props.publishedAt)}>
            {formatDate(props.publishedAt)}
          </p>
        </div>
      </div>
    </article>
  );
}

export default PostPreview;
