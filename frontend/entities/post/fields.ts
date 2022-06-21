import { IHaveDateAt, IHavePublishedAt } from "@entities/common.types";

export interface PostFields extends IHaveDateAt, IHavePublishedAt {
  preview: string;
  title: string;
  content: string;
  slug: string;
}
