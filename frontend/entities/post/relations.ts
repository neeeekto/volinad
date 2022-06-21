import { Entity, Media, Result } from "@core/http";
import { Tag } from "@entities/tag";
import { PostFields } from "@entities/post/fields";
import { SeoComponent } from "@entities/common.types";

export interface PostRelations {
  tags: Result<Tag[]>;
  posts: Result<Entity<PostFields & PostRelations>[]>;
  seo: SeoComponent;
  image: Result<Media>;
}
