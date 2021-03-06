import { IHaveDateAt, SeoComponent } from "@entities/common.types";

export interface PageFields extends IHaveDateAt {
  menu: string;
  content: string;
  slug: string;
  order: number;
}
