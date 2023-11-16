import { createOperation, z } from "../../generated/wundergraph.factory";
import {
  SearchParams,
  SearchParamsWithPreset,
} from "typesense/lib/Typesense/Documents";
import typesenseClient from "../../typesense/client";
import { AlgerianDrugsWithRxInterface } from "../../typesense/AlgerianDrugsWithRxInterface";

interface hit {
  id: string;
  drugTemplate: string;
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
      query_by:
        "NOM_COMMERCIALE,DCI,DOSAGE,LABORATOIRES_DETENTEUR_DE_LA_DECISION_D_ENREGISTREMENT",
      // sort_by: "priority:desc,charCount:asc",
      limit_hits: 15,
      page: 1,
      per_page: 15,
    };

    const search_result = await typesenseClient
      .collections("drugs")
      .documents()
      .search(params);

    const hits: hit[] =
      search_result.hits?.map((hit) => {
        const { id, drugTemplate } =
          hit.document as AlgerianDrugsWithRxInterface;
        return { drugTemplate, id };
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
