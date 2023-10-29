import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useMutation } from "@/lib/wundergraph";
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

interface searchInput {
  query_string: string;
  limit_hits?: number;
  page?: number;
  per_page?: number;
  sexe?: "M" | "F";
}

const BoltSearch = () => {
  const { data, trigger, isMutating } = useMutation({
    operationName: "patients/search_patients",
  });
  const [page, setPage] = useState(1);
  const [queryString, setQueryString] = useState<string | null>(null);
  const [sex, setSex] = useState<"M" | "F" | null>(null);

  useEffect(() => {
    let req = true;

    if (queryString !== null) {
      const search = async () => {
        const inputs: searchInput = {
          query_string: queryString,
          page,
          limit_hits: 100,
        };
        if (sex !== null) inputs.sexe = sex;
        if (req) await trigger(inputs);
      };
      search();
    }
    return () => {
      req = false;
    };
  }, [page, queryString, sex, trigger]);

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
        {isMutating ? (
          <BoltSearchSkeleton />
        ) : data !== undefined ? (
          <BoltSearchPagination data={data} setPage={setPage} page={page} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default BoltSearch;
