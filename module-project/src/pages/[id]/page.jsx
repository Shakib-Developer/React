import getAllPosts from "@/lib/getAllPosts";
import getSinglePost from "@/lib/getSinglePost";

export default function SingleBlog({ post }) {
  return (
    <div>
      <section>
        <h1 className="font-bold text-lg">{post.title}</h1>
        <div className="mt-5">{post.short}</div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getSinglePost(params.id);

  return {
    props: {
      post,
    },
  };
}
