import Link from "next/link";
import { Post } from "../defs";
import { formatDate } from "../helpers/formatDate";

function PostPreview(props: Post) {
  return (
    <article>
      <Link href={`/posts/${props.id}`}>
        <h2>{props.title}</h2>
      </Link>
      <p>{props.description}</p>
      <p>{props.author}</p>
      <p>{formatDate(props.publishedAt)}</p>
    </article>
  )
}

export default PostPreview;
