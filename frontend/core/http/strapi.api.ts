import { Result, Entity, ListQueryParameters, MetaWitPageData } from "./types";
import { fetchAPI } from "./utils";

export class StrapiCollectionApi<
  TData extends Entity<TFields & TRelations>,
  TFields = any,
  TRelations = any
> {
  constructor(private readonly segment: string) {}

  get(id: string): Promise<Result<TData, {}>>;
  get(
    params: Partial<ListQueryParameters<TFields, TRelations>>
  ): Promise<Result<Array<TData>, MetaWitPageData>>;
  async get(
    idOrParams: string | Partial<ListQueryParameters<TFields, TRelations>>
  ) {
    if (typeof idOrParams === "string") {
      return fetchAPI<Result<TData, {}>>(`/${this.segment}/${idOrParams}`);
    } else {
      return fetchAPI<Result<Array<TData>, MetaWitPageData>>(
        `/${this.segment}`,
        idOrParams
      );
    }
  }
}

export class StrapiSingleApi<
  TData extends Entity<TFields & TRelations>,
  TFields = any,
  TRelations = any
> {
  constructor(private readonly segment: string) {}

  async get(): Promise<Result<TData>> {
    return fetchAPI<Result<TData>>(`/${this.segment}`);
  }
}
