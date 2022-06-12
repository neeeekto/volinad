import { IHaveDateAt } from "@entities/common.types";

export interface PageFields extends IHaveDateAt {
  menu: string;
  content: string;
}
