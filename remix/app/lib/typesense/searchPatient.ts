import { format } from "date-fns";
import type { Client } from "typesense";
import type {
  SearchParams,
  SearchParamsWithPreset,
} from "typesense/lib/Typesense/Documents";

export interface patientSearchInput {
  query_string: string;
  limit_hits?: number;
  page?: number;
  per_page?: number;
  sexe?: "M" | "F";
}

export interface patientHit {
  id: string;
  lastName: string;
  firstName: string;
  formatted_ddn: string;
  sexe: "M" | "F";
}

export interface RawPatientDocumentResultInterface {
  ddn: number;
  ddn_year: number;
  firstName: string;
  id: string;
  lastName: string;
  search_ddn_year: string;
  sexe: "M" | "F";
}

export interface patientSearchResponse {
  hits: patientHit[];
  found: number;
  page: number;
  search_time_ms: number;
}

const searchPatient = async ({
  client,
  searchParams,
}: {
  client: Client;
  searchParams: patientSearchInput;
}): Promise<patientSearchResponse | undefined> => {
  try {
    const { query_string, page, limit_hits, per_page, sexe } = searchParams;
    const params: SearchParams | SearchParamsWithPreset = {
      q: query_string,
      query_by: "lastName,firstName,search_ddn_year",
      // filter_by: `sexe: ${sexe}`,
      limit_hits: limit_hits ?? 5,
      page: page ?? 1,
      per_page: per_page ?? 5,
    };
    if (sexe) params.filter_by = `sexe: ${sexe}`;

    const search_result = await client
      .collections("patients")
      .documents()
      .search(params);

    const hits: patientHit[] =
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
    const searchResponse: patientSearchResponse = {
      hits,
      found: search_result.found,
      page: search_result.page,
      search_time_ms: search_result.search_time_ms,
    };

    return searchResponse;
  } catch (error) {
    throw Error("Patient search error");
  }
};

export default searchPatient;
