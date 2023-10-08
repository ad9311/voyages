import { Post, SortPostsBy } from '../defs';

export function sortPostsByAuthor(posts: Post[]) {
  return posts.sort((a, b) => {
    if (a.author < b.author) {
      return -1;
    }
    if (a.author > b.author) {
      return 1;
    }
    return 0;
  });
}

export function sortPostsByDate(posts: Post[]) {
  return posts.sort((a, b) => {
    const dateA = new Date(a.publishedAt);
    const dateB = new Date(b.publishedAt);

    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    return 0;
  });
}

export function sortPostsByTopic(posts: Post[]) {
  return posts.sort((a, b) => {
    if (a.category < b.category) {
      return -1;
    }
    if (a.category > b.category) {
      return 1;
    }
    return 0;
  });
}

function sortPosts(posts: Post[], sortBy: SortPostsBy) {
  switch (sortBy) {
    case 'AUTHOR':
      return sortPostsByAuthor(posts);
    case 'DATE':
      return sortPostsByDate(posts);
    case 'CATEGORY':
      return sortPostsByTopic(posts);
    default:
      return posts;
  }
}

export default sortPosts;
