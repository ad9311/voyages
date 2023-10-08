export type PostCategory = 'Tips' | 'Storytime' | 'On a budget';

export interface Post {
  id: number;
  title: string;
  description: string;
  content: string;
  author: string;
  category: PostTopic;
  publishedAt: string;
}

export type SortPostsBy = 'AUTHOR' | 'DATE' | 'CATEGORY';
export type OrderPostsMethod = 'ASC' | 'DESC';
