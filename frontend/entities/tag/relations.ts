import { Entity, Result } from "@core/http";
import { PostFields } from "../post/fields";

export interface TagRelations {
  posts: Result<Entity<PostFields>>[];
}
