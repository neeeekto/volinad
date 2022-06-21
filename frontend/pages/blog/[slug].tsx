import { NextPage } from "next";
import { Post, postsApi } from "@entities/post";
import { Seo } from "../../components/Seo";
import { PostMeta } from "../../components/PostMeta";
import React, { useContext } from "react";
import css from "./Blog.module.scss";
import { GlobalContext } from "../../contexts/global.context";
import Link from "next/link";
import cn from "classnames";

interface PostPageProps {
  post: Post;
}

const PostPage: NextPage<PostPageProps, PostPageProps> = ({ post }) => {
  const globalCtx = useContext(GlobalContext);
  return (
    <>
      <Seo seo={post.attributes.seo}></Seo>
      <h1>{post.attributes.title}</h1>
      <div
        className="article"
        dangerouslySetInnerHTML={{ __html: post.attributes.content }}
      ></div>
      <div className={css.meta}>
        <PostMeta post={post} />
      </div>
      {post.attributes.posts?.data?.length > 0 && (
        <footer className={css.more}>
          <h3>{globalCtx.attributes.moreText}</h3>
          {post.attributes.posts.data.map((x) => (
            <div key={x.id} className={css.moreLink}>
              <Link href={`/blog/${x.attributes.slug}`}>
                <a className={cn("link")}>{x.attributes.title}</a>
              </Link>
            </div>
          ))}
        </footer>
      )}
    </>
  );
};

PostPage.getInitialProps = async (context) => {
  const { slug } = context.query;
  const posts = await postsApi.bySlug(slug as any, {
    populate: ["posts", "seo", "tags", "image"],
  });
  return {
    post: posts.data[0],
  };
};

export default PostPage;
