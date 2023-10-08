import { Post } from '@/app/defs';
import { formatDate, formatDateTime } from '@/app/helpers/formatDate';
import PostComment from './PostComment';

function PostContent(props: Post) {
  const mappedImageParagraphs = props.paragraphs.map((paragraph, index) => (
    <div key={`post-${props.id}-${index}`}>
      <img src={props.images[index]} alt={`image ${index + 1}`} />
      <p className="mt-2 mb-16 text-justify">{paragraph}</p>
    </div>
  ));

  const mappedComments = props.comments.map((comment, index) => (
    <li key={`${comment.author}-${index}`}>
      <PostComment comment={comment} />
    </li>
  ));

  return (
    <>
      <article className="mt-5 max-w-[50rem] mx-auto">
        <h2 className="text-2xl sm:text-3xl text-center font-bold">{props.title}</h2>
        <h3 className="text-base sm:text-xl text-center">{props.description}</h3>
        <div className="pl-5 mt-1 mb-10 flex items-center gap-3">
          <p>{props.author}</p>
          <p className="text-sm italic" title={formatDateTime(props.publishedAt)}>
            {formatDate(props.publishedAt)}
          </p>
        </div>
        <div>{mappedImageParagraphs}</div>
      </article>
      <h3 className="mt-10 text-xl font-bold">Comments:</h3>
      <ul>{mappedComments}</ul>
    </>
  );
}

export default PostContent;
