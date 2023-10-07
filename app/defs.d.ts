export type PostTopic = 'TIPS' | 'STORY_TIME' | 'ON_A_BUDGET';

export interface Post {
  id: number;
  title: string;
  description: string;
  content: string;
  author: string;
  topic: PostTopic;
  publishedAt: string;
}

export type SortPostsBy = 'AUTHOR' | 'DATE' | 'TOPIC';
export type OrderPostsOn = 'ASC' | 'DESC';
