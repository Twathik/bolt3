import { createOperation, z } from "../../generated/wundergraph.factory";
import {
  SearchParams,
  SearchParamsWithPreset,
} from "typesense/lib/Typesense/Documents";
import typesenseClient from "../../typesense/client";
import { DrugsInterface } from "../../typesense/AlgerianDrugsWithRxInterface";

interface hit {
  id: string;
  drugTemplate: string;
  labo: string;
  DCI: string;
  PPA: string;
  TR: string;
  vignetteColor: string;
  classPharmaco: string;
  classTherapeutique: string;
  conditionnement: string;
  liste: string;
  pays: string;
  remboursable: boolean;
  prodLocal: boolean;
  comercialisé: boolean;
  img: string;
}

interface searchResponse {
  hits: hit[];
  found: number;
  page: number;
  search_time_ms: number;
}

const inputSchema = z.object({
  query_string: z.string().max(50),
});

export default createOperation.mutation({
  input: inputSchema,
  handler: async ({ input }) => {
    const { query_string } = input;
    const params: SearchParams | SearchParamsWithPreset = {
      q: query_string,
      query_by: "nomCommercial,DCI,dosage,labo,classPharmaco",
      include_fields:
        "id,drugTemplate,labo,DCI,PPA,TR,vignetteColor,classPharmaco,classTherapeutique,conditionnement,liste,pays,remboursable,prodLocal,comercialisé,img",
      // sort_by: "priority:desc,charCount:asc",
      limit_hits: 10,
      page: 1,
      per_page: 10,
      search_cutoff_ms: 100,
    };

    const search_result = await typesenseClient
      .collections("drugs")
      .documents()
      .search(params);

    const hits: hit[] =
      search_result.hits?.map((hit) => {
        const {
          id,
          drugTemplate,
          labo,
          DCI,
          PPA,
          TR,
          vignetteColor,
          classPharmaco,
          classTherapeutique,
          conditionnement,
          liste,
          pays,
          remboursable,
          prodLocal,
          comercialisé,
          img,
        } = hit.document as DrugsInterface;
        return {
          id,
          drugTemplate,
          labo,
          DCI,
          PPA,
          TR,
          vignetteColor,
          classPharmaco,
          classTherapeutique,
          conditionnement,
          liste,
          pays,
          remboursable,
          prodLocal,
          comercialisé,
          img,
        };
      }) ?? [];
    const searchResponse: searchResponse = {
      hits,
      found: search_result.found,
      page: search_result.page,
      search_time_ms: search_result.search_time_ms,
    };
    return searchResponse;
  },
});
