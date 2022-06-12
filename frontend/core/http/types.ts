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

export interface QueryPagination {
  "pagination[withCount]": boolean;
  "pagination[page]": number;
  "pagination[pageSize]": number;
  "pagination[start]": number;
  "pagination[limit]": number;
}

export interface QueryFields<TData> {
  fields: Array<keyof TData>;
}

export interface QueryPopulate<TData> {
  populate: Array<keyof TData>;
}

export interface ListQueryParameters<TFields = any, TRelations = any>
  extends QueryPopulate<TRelations>,
    QueryFields<TFields>,
    QueryPagination {
  sort: Sort;
}

export interface Entity<TData> {
  id: number | string;
  attributes: TData;
}

export interface MediaFields extends IHaveDateAt {
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

export interface Media extends Entity<MediaFields> {}
