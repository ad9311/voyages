import PostList from "./posts/PostList";

function Home() {
  return (
    <main>
      <h1>Voyages</h1>
      <section>
        <h2>Recent posts</h2>
        <PostList />
      </section>
    </main>
  )
}

export default Home;
