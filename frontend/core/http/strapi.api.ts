import {
  Result,
  Entity,
  ListQueryParameters,
  MetaWitPageData,
  QueryFields,
  QueryPopulate,
} from "./types";
import { fetchAPI } from "./utils";

export class StrapiCollectionApi<
  TData extends Entity<TFields & TRelations>,
  TFields = any,
  TRelations = any
> {
  constructor(private readonly segment: string) {}

  async getList(
    params: Partial<ListQueryParameters<TFields, TRelations>>
  ): Promise<Result<Array<TData>, MetaWitPageData>> {
    return fetchAPI<Result<Array<TData>, MetaWitPageData>>(
      `/${this.segment}`,
      params
    );
  }

  getOne(
    id: string,
    params?: Partial<QueryFields<TFields> & QueryPopulate<TRelations>>
  ): Promise<Result<TData>> {
    return fetchAPI<Result<TData>>(`/${this.segment}/${id}`, params);
  }
}

export class StrapiSingleApi<
  TData extends Entity<TFields & TRelations>,
  TFields = any,
  TRelations = any
> {
  constructor(
    private readonly segment: string,
    private readonly defaultParams: Partial<
      QueryFields<TFields> & QueryPopulate<TRelations>
    > = {}
  ) {}

  async get(
    params?: Partial<QueryFields<TFields> & QueryPopulate<TRelations>>
  ): Promise<Result<TData>> {
    return fetchAPI<Result<TData>>(`/${this.segment}`, {
      ...this.defaultParams,
      ...(params ?? {}),
    });
  }
}
