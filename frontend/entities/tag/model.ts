import { TagFields } from "@entities/tag/fields";
import { TagRelations } from "@entities/tag/relations";
import { Entity } from "@core/http";

export interface Tag extends Entity<TagFields & TagRelations> {}
