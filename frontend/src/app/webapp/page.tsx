"use client";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import "./algolia.css";

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
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
    query_by: "lastName,firstName",
  },
});

const searchClient = typesenseInstantsearchAdapter.searchClient;

const Hit = ({ hit }: { hit: any }) => {
  console.log({ hit });
  return <div></div>;
};

export default function Webapp() {
  return (
    <section className="md:workspace-min-height flex flex-col">
      <section className="grid grid-flow-row grid-cols-2 gap-4">
        <div>1</div>
        <div className="p-9">
          <InstantSearch indexName="patients" searchClient={searchClient}>
            <SearchBox />
            <Hits hitComponent={Hit} />
          </InstantSearch>
        </div>
      </section>
    </section>
  );
}
