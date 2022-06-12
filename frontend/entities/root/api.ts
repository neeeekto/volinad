import { StrapiSingleApi } from "@core/http";
import { Root } from "./model";
import { RootFields } from "@entities/root/fields";
import { RootRelations } from "@entities/root/relations";

export const rootApi = new StrapiSingleApi<Root, RootFields, RootRelations>(
  "root"
);
