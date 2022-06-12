import { IHaveDateAt } from "@entities/common.types";

export interface RootFields extends IHaveDateAt {
  content: string;
}
