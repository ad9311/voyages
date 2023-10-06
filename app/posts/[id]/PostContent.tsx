import { Post } from '@/app/defs'
import { formatDate } from '@/app/helpers/formatDate'

function PostContent(props: Post) {
  return (
    <article>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
      <p>{props.author}</p>
      <p>{formatDate(props.publishedAt)}</p>
      <p>{props.content}</p>
    </article>
  )
}

export default PostContent
