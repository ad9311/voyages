import { Post } from "@/app/defs";
import { formatDate, formatDateTime } from "@/app/helpers/formatDate";

function PostContent(props: Post) {
  return (
    <article className="mt-5 max-w-[50rem] mx-auto">
      <h2 className="text-2xl sm:text-3xl text-center font-bold">
        {props.title}
      </h2>
      <h3 className="text-base sm:text-xl text-center">{props.description}</h3>
      <div className="pl-5 mt-1 mb-10 flex items-center gap-3">
        <p>{props.author}</p>
        <p className="text-sm italic" title={formatDateTime(props.publishedAt)}>
          {formatDate(props.publishedAt)}
        </p>
      </div>
      <p className="text-justify">{props.content}</p>
    </article>
  );
}

export default PostContent;
