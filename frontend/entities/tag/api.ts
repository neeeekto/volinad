import { StrapiCollectionApi } from "@core/http";
import { Tag } from "./model";
import { TagFields } from "./fields";
import { TagRelations } from "./relations";

export const tagsApi = new StrapiCollectionApi<Tag, TagFields, TagRelations>(
  "tags"
);
