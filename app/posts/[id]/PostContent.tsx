import Image from 'next/image';
import { PostProps } from '@/app/defs';
import { formatDate, formatDateTime } from '@/app/helpers/formatDate';
import PostComment from './PostComment';
import { categoryColor } from '../PostPreview';

function PostContent(props: PostProps) {
  const mappedImageParagraphs = props.paragraphs.map((paragraph, index) => (
    <div key={`post-${props.id}-${index}`}>
      <Image
        className="rounded-md"
        src={props.images[index]}
        width={1200}
        height={900}
        alt={`image ${index + 1}`}
      />
      <p className="mt-2 px-5 mb-16 text-justify">&ensp;&ensp;{paragraph}</p>
    </div>
  ));

  const mappedComments = props.comments.map((comment, index) => (
    <li key={`${comment.author}-${index}`} className="mb-5">
      <PostComment comment={comment} />
    </li>
  ));

  return (
    <>
      <article className="mt-5 max-w-[50rem] mx-auto">
        <h2 className="text-2xl sm:text-3xl text-center font-bold text-primary-dark">
          {props.title}
        </h2>
        <h3 className="text-base sm:text-xl text-center text-neutral-600">{props.description}</h3>
        <div className="pl-5 mt-1 mb-10">
          <div className="flex items-center gap-3">
            <p className="text-secondary font-bold">{props.author}</p>
            <p className="text-sm italic text-neutral-400" title={formatDateTime(props.publishedAt)}>
              {formatDate(props.publishedAt)}
            </p>
          </div>
          <strong className={`block mt-1 w-fit px-2 py-0.5 text-sm rounded-md ${categoryColor(props.category)}`}>{props.category}</strong>
        </div>
        <div>{mappedImageParagraphs}</div>
      </article>
      <section className="mx-auto w-[60rem]">
        <h3 className="mt-10 mb-2 text-xl font-bold">Comments:</h3>
        <ul className="bg-neutral-50 border p-10 max-h-96 overflow-y-scroll">{mappedComments}</ul>
      </section>
    </>
  );
}

export default PostContent;
