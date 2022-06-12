import { StrapiCollectionApi } from "@core/http";
import { Post } from "./model";
import { PostFields } from "./fields";
import { PostRelations } from "./relations";

export const postsApi = new StrapiCollectionApi<
  Post,
  PostFields,
  PostRelations
>("posts");
