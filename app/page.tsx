import { Suspense } from 'react';
import PostList from './posts/PostList';
import Loading from './loading';

function Home() {
  return (
    <main>
      <section>
        <Suspense fallback={<Loading />}>
          <PostList />
        </Suspense>
      </section>
    </main>
  );
}

export default Home;
