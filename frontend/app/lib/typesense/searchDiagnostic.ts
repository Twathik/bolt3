import type { Client } from "typesense";
import type {
  SearchParams,
  SearchParamsWithPreset,
} from "typesense/lib/Typesense/Documents";

export interface diagnosticSearchInput {
  query_string: string;
  limit_hits?: number;
  page?: number;
  per_page?: number;
}

export interface diagnosticHit {
  id: string;
  FormattedTitle: string;
}

export interface RawDiagnosticDocumentResultInterface {
  id: string;
  FormattedTitle: string;
}

export interface diagnosticSearchResponse {
  hits: diagnosticHit[];
  found: number;
  page: number;
  search_time_ms: number;
}

const searchDiagnostic = async ({
  client,
  searchParams,
}: {
  client: Client;
  searchParams: diagnosticSearchInput;
}): Promise<diagnosticSearchResponse | undefined> => {
  try {
    const { query_string, page, limit_hits, per_page } = searchParams;
    const params: SearchParams | SearchParamsWithPreset = {
      q: query_string,
      query_by: "FormattedTitle",
      sort_by: "priority:desc,charCount:asc",
      limit_hits: limit_hits ?? 15,
      page: page ?? 1,
      per_page: per_page ?? 15,
    };

    const search_result = await client
      .collections("clinical-diagnostics")
      .documents()
      .search(params);

    const hits: diagnosticHit[] =
      search_result.hits?.map((hit) => {
        const { id, FormattedTitle } =
          hit.document as RawDiagnosticDocumentResultInterface;
        return {
          id,
          FormattedTitle,
        };
      }) ?? [];
    const searchResponse: diagnosticSearchResponse = {
      hits,
      found: search_result.found,
      page: search_result.page,
      search_time_ms: search_result.search_time_ms,
    };

    return searchResponse;
  } catch (error) {
    throw Error("diagnostic search error");
  }
};

export default searchDiagnostic;
