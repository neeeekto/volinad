module.exports = ({ env }) => ({
  meilisearch: {
    config: {
      host: env("MEILI_SEARCH_URL"),
      apiKey: env("MEILI_SEARCH_KEY"),
      post: {
        indexName: "post",
      },
    },
  },
});
