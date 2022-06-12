import { IHaveDateAt } from "../../entities/common.types";

export interface PageData {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface MetaWitPageData {
  pagination: PageData;
}

export interface Result<TRes, TMeta = void> {
  data: TRes;
  meta: TMeta;
}

export interface ApiError {
  error: {
    status: number;
    name: string;
    message: string;
    details: any;
  };
}

export enum Sort {
  Asc = "asc",
  Desc = "desc",
}

export interface ListQueryParameters<TFields = any, TRelations = any> {
  sort: Sort;
  "pagination[withCount]": boolean;
  "pagination[page]": number;
  "pagination[pageSize]": number;
  "pagination[start]": number;
  "pagination[limit]": number;
  fields: Array<keyof TFields>;
  populate: Array<keyof TRelations>;
}

export interface Entity<TData> {
  id: number | string;
  attributes: TData;
}

export interface Media extends IHaveDateAt {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
}
