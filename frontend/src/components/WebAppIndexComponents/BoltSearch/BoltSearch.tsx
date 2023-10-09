"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { searchClient } from "@/components/WebAppIndexComponents/BoltSearch/utils/BoltSearchUtils";
import CustomSortBy from "@/components/WebAppIndexComponents/BoltSearch/BoltSearchSortBySex";
import CustomPagination from "@/components/WebAppIndexComponents/BoltSearch/BoltSearchPagination";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch";
import Hit from "./BoltSearchHits";
import CustomFilterBySex from "./BoltSearchFilterSex";

const BoltSearch = () => {
  return (
    <>
      <h2 className="text-center text-2xl text-slate-500">Bolt search</h2>
      <InstantSearch indexName="patients" searchClient={searchClient}>
        <SearchBox
          placeholder="Nom - prénom - année de naissance"
          classNames={{
            root: "relative mt-2 rounded-md shadow-sm h-12",
            resetIcon: "hidden",
            input:
              "block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 h-12",
          }}
          submitIconComponent={() => (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
          )}
          translations={{
            resetButtonTitle: "recommencer",
            submitButtonTitle: "valider",
          }}
        />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Filtrer les résultats</AccordionTrigger>
            <AccordionContent>
              <CustomFilterBySex attribute="sexe" sortBy={["name:asc"]} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <ul role="list" className="grid grid-cols-1">
          <Hits hitComponent={Hit} />
        </ul>
        <CustomPagination />
      </InstantSearch>
    </>
  );
};

export default BoltSearch;
