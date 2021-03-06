import { IHaveDateAt } from "@entities/common.types";

export interface GlobalFields extends IHaveDateAt {
  logoText: string;
  blogPageMenu: string;
  dateFormat: string;
  locale: "ru" | "en";
  moreText: string;
}
