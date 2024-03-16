import { v4 as uuid } from "uuid";
import type { Client } from "typesense";
import type {
  SearchParams,
  SearchParamsWithPreset,
  SearchResponse,
} from "typesense/lib/Typesense/Documents";

export interface prescriptionSearchInput {
  query_string: string;
  limit_hits?: number;
  page?: number;
  per_page?: number;
  sexe?: "M" | "F";
}

export interface prescriptionHit {
  id: string;
  prescriptionId: string;
  drugTemplate: string;
  labo: string;
  DCI: string;
  nomCommercial: string;
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
  miniatureImageLink: string;
  dosage: string;
  forme: string;
}

export interface RawPrescriptionDocumentResultInterface {
  id: string;
  prescriptionId: string;
  drugTemplate: string;
  labo: string;
  DCI: string;
  nomCommercial: string;
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
  miniatureImageLink: string;
  dosage: string;
  forme: string;
}

export interface prescriptionSearchResponse {
  hits: prescriptionHit[];
  found: number;
  page: number;
  search_time_ms: number;
}

const searchPrescription = async ({
  client,
  searchParams,
}: {
  client: Client;
  searchParams: prescriptionSearchInput;
}): Promise<prescriptionSearchResponse | undefined> => {
  try {
    const { query_string, page, limit_hits, per_page, sexe } = searchParams;
    const params: SearchParams | SearchParamsWithPreset = {
      q: query_string || "",
      query_by: "nomCommercial,DCI,dosage,labo,classPharmaco",
      include_fields:
        "id,nomCommercial,drugTemplate,labo,DCI,PPA,TR,vignetteColor,classPharmaco,classTherapeutique,conditionnement,liste,pays,remboursable,prodLocal,comercialisé,img,miniatureImageLink,dosage,forme",
      // sort_by: "priority:desc,charCount:asc",
      limit_hits: limit_hits ?? 10,
      page: page ?? 1,
      per_page: per_page ?? 10,
      search_cutoff_ms: 100,
    };
    if (sexe) params.filter_by = `sexe: ${sexe}`;

    const search_result: SearchResponse<RawPrescriptionDocumentResultInterface> =
      await client.collections("drugs").documents().search();

    const hits: prescriptionHit[] =
      search_result.hits?.map((hit) => {
        const {
          id,
          drugTemplate,
          labo,
          DCI,
          PPA,
          TR,
          nomCommercial,
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
          miniatureImageLink,
          dosage,
          forme,
        } = hit.document;
        return {
          id,
          prescriptionId: uuid(),
          drugTemplate,
          labo,
          nomCommercial,
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
          miniatureImageLink,
          dosage,
          forme,
        };
      }) ?? [];
    const searchResponse: prescriptionSearchResponse = {
      hits,
      found: search_result.found,
      page: search_result.page,
      search_time_ms: search_result.search_time_ms,
    };

    return searchResponse;
  } catch (error) {
    throw Error("Prescription search error");
  }
};

export default searchPrescription;
