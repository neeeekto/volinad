import React from "react";
import { Post } from "@entities/post";
import css from "./PostCard.module.scss";

export const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return <div className={css.card}></div>;
};
