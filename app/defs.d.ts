export type PostCategory = 'Tips' | 'Storytime' | 'On a budget';

export interface PostComment {
  author: string;
  content: string;
}

export interface Post {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  images: string[];
  paragraphs: string[];
  author: string;
  category: PostCategory;
  comments: PostComment[];
  publishedAt: string;
}

export type SortPostsBy = 'AUTHOR' | 'DATE' | 'CATEGORY';
export type OrderPostsMethod = 'ASC' | 'DESC';

export interface Paginator {
  pagesCount: number;
  onPageChange: (e: { selected: number }) => void;
  className?: string;
}
