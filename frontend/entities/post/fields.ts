import { IHaveDateAt } from "@entities/common.types";

export interface PostFields extends IHaveDateAt {
  preview: string;
  title: string;
  content: string;
}
