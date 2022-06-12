import { IHaveDateAt } from "@entities/common.types";

export interface TagFields extends IHaveDateAt {
  value: string;
  description?: string;
}
