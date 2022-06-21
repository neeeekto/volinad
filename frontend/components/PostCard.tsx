import React from "react";
import { Post } from "@entities/post";
import css from "./PostCard.module.scss";
import { getStrapiMediaUrl } from "@core/http";
import { DateView } from "./Date";
import Link from "next/link";
import cn from "classnames";
import { PostMeta } from "./PostMeta";

const PostImage: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div
      className={css.img}
      style={{
        backgroundImage: `url(${getStrapiMediaUrl(
          post.attributes.image.data
        )})`,
      }}
    ></div>
  );
};

export const PostCard: React.FC<{ post: Post; className?: string }> = ({
  post,
  className,
}) => {
  return (
    <div className={cn(css.wrapper, className)}>
      <Link href={`/blog/${post.attributes.slug}`}>
        <a className={cn(css.body, css.bg)}>
          {post.attributes?.image?.data && <PostImage post={post} />}
          <h2 className={css.title}>{post.attributes.title}</h2>
          <div
            className={css.content}
            dangerouslySetInnerHTML={{ __html: post.attributes.preview }}
          ></div>
        </a>
      </Link>
      <footer className={cn(css.footer, css.bg)}>
        <div className={css.footerContent}>
          <PostMeta post={post} />
        </div>
        <Link href={`/blog/${post.attributes.slug}`}>
          <a className={css.hideLink}></a>
        </Link>
      </footer>
    </div>
  );
};
