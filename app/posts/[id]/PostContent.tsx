import { Post } from '@/app/defs'
import { formatDate } from '@/app/helpers/formatDate'

function PostContent(props: Post) {
  return (
    <article className="w-[50rem] mx-auto">
      <h2 className="text-3xl font-bold">{props.title}</h2>
      <h3 className="text-xl pl-5">{props.description}</h3>
      <div className="pl-5 mt-1 mb-10 flex items-center gap-3">
        <p>{props.author}</p>
        <p className="text-sm italic">{formatDate(props.publishedAt)}</p>
      </div>
      <p>{props.content}</p>
    </article>
  )
}

export default PostContent
