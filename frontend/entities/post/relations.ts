import { Entity, Result } from "@core/http";
import { Tag } from "@entities/tag";
import { PostFields } from "@entities/post/fields";

export interface PostRelations {
  tags: Result<Tag>[];
  posts: Result<Entity<PostFields & PostRelations>>[];
}
