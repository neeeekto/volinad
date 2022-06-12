import React from "react";
import {
  Highlight,
  Hits,
  InstantSearch,
  SearchBox,
  Stats,
} from "react-instantsearch-dom";
import { searchClient } from "@core/search";

const Hit: React.FC<any> = ({ hit }) => (
  <Highlight attribute="title" hit={hit} />
);

export const Search = () => (
  <div className="ais-InstantSearch">
    <InstantSearch indexName="post" searchClient={searchClient}>
      <SearchBox searchAsYouType />
      {/*<Hits hitComponent={Hit} />*/}
    </InstantSearch>
  </div>
);
