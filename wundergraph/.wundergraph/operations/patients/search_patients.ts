import { createOperation, z } from "../../generated/wundergraph.factory";
import {
  SearchParams,
  SearchParamsWithPreset,
} from "typesense/lib/Typesense/Documents";
import { RawPatientDocumentResultInterface } from ".wundergraph/typesense/PatientDocumentInterface";
import typesenseClient from "../../typesense/client";
import { format } from "date-fns";

interface hit {
  id: string;
  lastName: string;
  firstName: string;
  formatted_ddn: string;
  sexe: "M" | "F";
}

interface searchResponse {
  hits: hit[];
  found: number;
  page: number;
  search_time_ms: number;
}

const inputSchema = z.object({
  query_string: z.string().max(50),
  limit_hits: z.number().max(500).min(5).nullish(),
  page: z.number().max(100).min(1).nullish(),
  per_page: z.number().min(5).max(10).nullish(),
  sexe: z.enum(["M", "F"]).nullish(),
});

export default createOperation.mutation({
  input: inputSchema,
  handler: async ({ input }) => {
    const { limit_hits, page, query_string, per_page, sexe } = input;
    const params: SearchParams | SearchParamsWithPreset = {
      q: query_string,
      query_by: "lastName,firstName,search_ddn_year",
      // filter_by: `sexe: ${sexe}`,
      limit_hits: limit_hits ?? 5,
      page: page ?? 1,
      per_page: per_page ?? 5,
    };
    if (sexe) params.filter_by = `sexe: ${sexe}`;

    const search_result = await typesenseClient
      .collections("patients")
      .documents()
      .search(params);

    const hits: hit[] =
      search_result.hits?.map((hit) => {
        const { ddn, firstName, lastName, sexe, id } =
          hit.document as RawPatientDocumentResultInterface;
        const highlight = hit.highlight as any;
        return {
          formatted_ddn: format(new Date(ddn), "dd/MM/yyyy"),
          firstName: highlight?.firstName?.snippet ?? firstName,
          lastName: highlight?.lastName?.snippet ?? lastName,
          sexe,
          id,
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
