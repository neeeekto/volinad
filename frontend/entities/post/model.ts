import { PostFields } from "./fields";
import { PostRelations } from "./relations";
import { Entity } from "@core/http";

export interface Post extends Entity<PostFields & PostRelations> {}
