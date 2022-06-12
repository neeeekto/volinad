import { StrapiSingleApi } from "@core/http";
import { Global } from "./model";
import { GlobalFields } from "./fields";
import { GlobalRelations } from "./relations";

export const globalApi = new StrapiSingleApi<
  Global,
  GlobalFields,
  GlobalRelations
>("global", {
  populate: ["seo"],
});
