import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect, useState } from "react";
import { Input } from "@/ui/components/ui/input";
import BoltSearchSkeleton from "@/components/GeneralComponents/AppUi/BoltSearchSkeleton";
import _ from "lodash";
import BoltSearchPagination from "./BoltSearchPagination";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/components/ui/accordion";
import { Label } from "@/ui/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/ui/components/ui/radio-group";
import { useBoltStore } from "@/stores/boltStore";
import createTypesenseClient from "@/lib/typesense/typesense";
import type {
  patientSearchInput,
  patientSearchResponse,
} from "@/lib/typesense/searchPatient";
import searchPatient from "@/lib/typesense/searchPatient";
import { useToast } from "@/ui/components/ui/use-toast";

const BoltSearch = () => {
  const user = useBoltStore((store) => store.user);
  const [page, setPage] = useState(1);
  const [queryString, setQueryString] = useState<string | null>(null);
  const [sex, setSex] = useState<"M" | "F" | null>(null);
  const [loading, setLoading] = useState(false);

  const [searchData, setSearchData] = useState<
    patientSearchResponse | undefined
  >();
  const { toast } = useToast();

  useEffect(() => {
    let req = true;

    if (queryString !== null) {
      setLoading(true);
      const client = createTypesenseClient(user.searchApiKey);

      const search = async () => {
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
  }, [page, queryString, sex, toast, user.searchApiKey]);

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
        Bolt search <MagnifyingGlassIcon className="w-5" />
      </h2>
      <div className="flex flex-row">
        <Input
          placeholder="Nom  -  prénom  -  année de naissance"
          onChange={onChange}
          className="flex-1"
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
        ) : searchData !== undefined ? (
          <BoltSearchPagination
            data={searchData}
            setPage={setPage}
            page={page}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default BoltSearch;
