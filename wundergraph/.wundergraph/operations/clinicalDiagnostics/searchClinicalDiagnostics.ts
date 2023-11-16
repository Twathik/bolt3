import { createOperation, z } from "../../generated/wundergraph.factory";
import {
  SearchParams,
  SearchParamsWithPreset,
} from "typesense/lib/Typesense/Documents";
import typesenseClient from "../../typesense/client";
import { ClinicalDiagnosticsInterface } from ".wundergraph/typesense/ClinicalDiagnosticsInterface";

interface hit {
  FormattedTitle: string;
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
      query_by: "FormattedTitle",
      sort_by: "priority:desc,charCount:asc",
      limit_hits: 15,
      page: 1,
      per_page: 15,
    };

    const search_result = await typesenseClient
      .collections("clinical-diagnostics")
      .documents()
      .search(params);

    const hits: hit[] =
      search_result.hits?.map((hit) => {
        const { FormattedTitle } = hit.document as ClinicalDiagnosticsInterface;
        return {
          FormattedTitle,
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
