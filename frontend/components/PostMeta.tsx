import React from "react";
import { Post } from "@entities/post";
import { DateView } from "./Date";
import Link from "next/link";

export const PostMeta: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <>
      <span className="caption">
        <DateView date={post.attributes.publishedAt}></DateView>
      </span>
      {post.attributes.tags.data.length && (
        <>
          <span className="caption">·</span>
          {post.attributes.tags.data.map((x, i) => (
            <Link
              key={x.attributes.value}
              href={`/tags/${encodeURIComponent(x.attributes.value)}`}
            >
              <a className="caption caption--link">
                {x.attributes.value}
                {i !== post.attributes.tags.data.length ? "," : ""}
              </a>
            </Link>
          ))}
        </>
      )}
    </>
  );
};
