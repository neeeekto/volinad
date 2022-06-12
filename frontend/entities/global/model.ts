import { GlobalFields } from "./fields";
import { GlobalRelations } from "./relations";
import { Entity } from "@core/http";

export interface Global extends Entity<GlobalFields & GlobalRelations> {}
