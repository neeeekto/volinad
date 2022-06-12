import { Result, Entity, ListQueryParameters, MetaWitPageData } from "./types";
import { fetchAPI } from "./utils";

export class StrapiCollectionApi<TData, TFields = any, TRelations = any> {
  constructor(private readonly segment: string) {}

  get(id: string): Promise<Result<Entity<TData>, {}>>;
  get(
    params: Partial<ListQueryParameters<TFields, TRelations>>
  ): Promise<Result<Array<Entity<TData>>, MetaWitPageData>>;
  async get(
    idOrParams: string | Partial<ListQueryParameters<TFields, TRelations>>
  ) {
    if (typeof idOrParams === "string") {
      return fetchAPI<Result<Entity<TData>, {}>>(
        `/${this.segment}/${idOrParams}`
      );
    } else {
      return fetchAPI<Result<Array<Entity<TData>>, MetaWitPageData>>(
        `/${this.segment}`,
        idOrParams
      );
    }
  }
}

export class StrapiSingleApi<TData> {
  constructor(private readonly segment: string) {}

  async get(): Promise<Result<Entity<TData>>> {
    return fetchAPI<Result<Entity<TData>>>(`/${this.segment}`);
  }
}
