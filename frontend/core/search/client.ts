import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

export const searchClient = instantMeiliSearch(
  process.env.NEXT_PUBLIC_MEILI_SEARCH_URL!,
  process.env.NEXT_PUBLIC_MEILI_SEARCH_KEY!
);
