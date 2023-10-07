import { Suspense } from "react";
import PostList from "./posts/PostList";
import Loading from "./loading";

function Home() {
  return (
    <main>
      <h1>Voyages</h1>
      <section>
        <h2>Recent posts</h2>
        <Suspense fallback={<Loading />}>
          <PostList />
        </Suspense>
      </section>
    </main>
  )
}

export default Home;
