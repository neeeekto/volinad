import { StrapiSingleApi } from "@core/http";
import { Root } from "./model";

export const rootApi = new StrapiSingleApi<Root>("root");
