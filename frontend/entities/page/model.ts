import { PageFields } from "./fields";
import { PageRelations } from "./relations";
import { Entity } from "@core/http";

export interface Page extends Entity<PageFields & PageRelations> {}
