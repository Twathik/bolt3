import React, { useCallback } from "react";
import { Input } from "@/components/ui/input";
import { useBoltStore } from "@/stores/boltStore";

function SpotlightFilter() {
  const setListQuery = useBoltStore((s) => s.setListQuery);

  const setDisplayedList = useBoltStore((store) => store.setDisplayedList);

  const filterList = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setListQuery(e.target.value);
      setDisplayedList(5);
    },
    [setDisplayedList, setListQuery]
  );
  return (
    <div>
      <Input type="text" placeholder="Nom - prenom" onChange={filterList} />
    </div>
  );
}

export default SpotlightFilter;
