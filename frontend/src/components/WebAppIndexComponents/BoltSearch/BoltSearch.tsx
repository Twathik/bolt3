/* eslint-disable react/no-unescaped-entities */
"use client";
import { GiMagnifyingGlass } from "react-icons/gi";
import { useCallback, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import BoltSearchSkeleton from "@/components/GeneralComponents/AppSkeletons/BoltSearchSkeleton";
import _ from "lodash";
import BoltSearchPagination from "./BoltSearchPagination";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import createTypesenseClient from "@/lib/typesense/typesense";
import type {
  patientSearchInput,
  patientSearchResponse,
} from "@/lib/typesense/searchPatient";
import searchPatient from "@/lib/typesense/searchPatient";
import { useToast } from "@/components/ui/use-toast";
import type { PublicUser } from "@/components/wg-generated/client";
import useConsultationListUpdater from "@/components/GeneralComponents/Consultation/useConsultationListUpdater";
import { useBoltStore } from "@/stores/boltStore";
import { ReadyState } from "react-use-websocket";

const BoltSearch = ({ user }: { user: PublicUser | undefined }) => {
  const [page, setPage] = useState(1);
  const [queryString, setQueryString] = useState<string>("");
  const [sex, setSex] = useState<"M" | "F" | null>(null);
  const [loading, setLoading] = useState(false);
  useConsultationListUpdater({ refreshInterval: 0 });
  const socket = useBoltStore((s) => s.socket);

  const [searchData, setSearchData] = useState<
    patientSearchResponse | undefined
  >();
  const { toast } = useToast();

  useEffect(() => {
    let req = true;

    if (user) {
      setLoading(true);
      const client = createTypesenseClient(
        user.customClaims?.searchApiKey ?? ""
      );

      const search = async (): Promise<void> => {
        const searchParams: patientSearchInput = {
          query_string: queryString,
          page,
          limit_hits: 100,
        };
        if (sex !== null) searchParams.sexe = sex;
        if (req) {
          const data = await searchPatient({ client, searchParams });
          setSearchData(data);
        }
        setLoading(false);
      };
      try {
        search();
      } catch (error) {
        toast({
          title: "Une erreur a survenue",
          description:
            "La recherche n'a pa pu s'effectuer, veuillez rafraichir la page puis recommancer",
          variant: "destructive",
        });
        setLoading(false);
      }
    }
    return () => {
      req = false;
    };
  }, [page, queryString, sex, toast, user]);

  const onChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      let res = _.debounce(() => setQueryString(event.target.value), 500);
      res();
    },
    []
  );

  const onFilterChange = useCallback((value: "M" | "F") => {
    setSex(value);
  }, []);

  return (
    <>
      <h2 className="text-3xl text-slate-500 flex flex-row gap-5 justify-center m-4">
        Bolt search
        <span className="w-5">
          <GiMagnifyingGlass />
        </span>
      </h2>
      <div className="flex flex-row">
        <Input
          placeholder="Nom  -  prénom  -  année de naissance"
          onChange={onChange}
          className="flex-1"
          type="text"
        />
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Filtres</AccordionTrigger>
          <AccordionContent>
            <RadioGroup onValueChange={onFilterChange}>
              <div className="flex flex-row gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="F" id="F" />
                  <Label htmlFor="F">Femmes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="M" id="M" />
                  <Label htmlFor="M">Hommes</Label>
                </div>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="w-full flex flex-col">
        {loading ? (
          <BoltSearchSkeleton />
        ) : socket && socket?.readyState === ReadyState.OPEN ? (
          searchData !== undefined ? (
            <BoltSearchPagination
              data={searchData}
              setPage={setPage}
              page={page}
            />
          ) : (
            <></>
          )
        ) : (
          <div>
            Initialisation de l'index de recherche en cours, veuillez patienter
            ...
          </div>
        )}
      </div>
    </>
  );
};

export default BoltSearch;
