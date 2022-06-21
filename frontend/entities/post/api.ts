import {
  fetchAPI,
  ListQueryParameters,
  MetaWitPageData,
  Result,
  StrapiCollectionApi,
} from "@core/http";
import { Post } from "./model";
import { PostFields } from "./fields";
import { PostRelations } from "./relations";

class PostApi extends StrapiCollectionApi<Post, PostFields, PostRelations> {
  constructor() {
    super("posts");
  }

  bySlug(
    slug: PostFields["slug"],
    params?: Partial<ListQueryParameters<PostFields, PostRelations>>
  ) {
    return fetchAPI<Result<Array<Post>, MetaWitPageData>>(`/posts`, {
      ...params,
      "filters[slug][$eq]": slug,
    });
  }
}

export const postsApi = new PostApi();
