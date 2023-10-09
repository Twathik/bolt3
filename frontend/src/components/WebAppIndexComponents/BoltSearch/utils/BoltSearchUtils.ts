"use client";

import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";

const typesenseInstantsearchAdapter = new TypesenseInstantsearchAdapter({
  server: {
    apiKey: "xyz", // Be sure to use an API key that only allows search operations
    nodes: [
      {
        host: "search.bolt3.local",
        port: 80,
        path: "", // Optional. Example: If you have your typesense mounted in localhost:8108/typesense, path should be equal to '/typesense'
        protocol: "http",
      },
    ],
    cacheSearchResultsForSeconds: 2 * 60, // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
  },

  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  query_by is required.
  additionalSearchParameters: {
    query_by: "lastName,firstName,search_ddn_year",
    limit_hits: 50,
    page: 10,
    per_page: 5,
  },
});

export const searchClient = typesenseInstantsearchAdapter.searchClient;

export function isModifierClick(event: React.MouseEvent) {
  const isMiddleClick = event.button === 1;

  return Boolean(
    isMiddleClick ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey,
  );
}
