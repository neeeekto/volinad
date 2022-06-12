import { useQuery, useQueryClient } from "react-query";
import { pagesApi } from "@entities/page/api";

export const usePagesQuery = () =>
  useQuery(["pages"], () => pagesApi.get({}).then((x) => x.data));

export const usePagesQueryPrefetch = () => {
  const client = useQueryClient();
  return client.prefetchQuery(["pages"], () =>
    pagesApi.get({}).then((x) => x.data)
  );
};
