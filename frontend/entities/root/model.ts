import { RootFields } from "./fields";
import { RootRelations } from "./relations";
import { Entity } from "@core/http";

export interface Root extends Entity<RootFields & RootRelations> {}
