import { NextPage } from "next";
import { Post, postsApi } from "@entities/post";
import { PostCard } from "../../components/PostCard";
import css from "./Blog.module.scss";
import { Sort } from "@core/http";

interface BlogPageProps {
  posts: Post[];
}

const BlogPage: NextPage<BlogPageProps, BlogPageProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} className={css.card} />
      ))}
    </div>
  );
};

BlogPage.getInitialProps = async (context) => {
  const post = await postsApi.getList({
    populate: ["posts", "seo", "tags", "image"],
    sort: Sort.Desc,
    sortBy: "publishedAt",
  });
  return {
    posts: post.data,
  };
};

export default BlogPage;
