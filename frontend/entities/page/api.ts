import { StrapiCollectionApi } from "@core/http";
import { Page } from "./model";
import { PageFields } from "./fields";
import { PageRelations } from "./relations";

export const pagesApi = new StrapiCollectionApi<
  Page,
  PageFields,
  PageRelations
>("pages");
