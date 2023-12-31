import { useBoltStore } from "@/stores/boltStore";
import {
  DocumentMagnifyingGlassIcon,
  UserIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";
import { Spotlight, closeSpotlight, spotlight } from "@mantine/spotlight";
import { Link } from "@remix-run/react";
import { useCallback, useEffect, useMemo } from "react";
import { badgeVariants } from "@/ui/components/ui/badge";
import CloseConsultation from "./CloseConsultation";
import CallPatient from "./CallPatient";

function ConsultationSpotlight() {
  const setListQuery = useBoltStore((s) => s.setListQuery);
  const patientSpotlights = useBoltStore((store) => store.displayedList);
  const setDisplayedList = useBoltStore((store) => store.setDisplayedList);
  const closeAppSpotlight = useCallback(() => {
    closeSpotlight();
  }, []);

  const filterList = useCallback(
    (query: string) => {
      setListQuery(query);
      setDisplayedList(5);
    },
    [setDisplayedList, setListQuery]
  );

  useEffect(() => {
    setDisplayedList(5);
  }, [setDisplayedList]);

  const actions = useMemo(
    () =>
      patientSpotlights.map((p) => (
        <Spotlight.Action
          highlightQuery={false}
          className="data-[selected=true]:bg-transparent"
          closeSpotlightOnTrigger={false}
          highlightColor="gray"
          key={p.id}>
          <div className="flex items-center justify-between gap-x-6 py-5 w-full">
            <div className="flex min-w-0 gap-x-4">
              <UserIcon className="w-6 h-6 text-slate-800" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {p.label}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {p.description}
                </p>
              </div>
            </div>
            <div className="flex gap-x-2 justify-end">
              <Link
                to={`/webApp/patient/${p.consultationList.patientId}`}
                prefetch="viewport"
                onClick={closeAppSpotlight}
                className={badgeVariants({
                  variant: "default",
                  className: "shadow-sm ring-1 ring-inset",
                })}>
                Ouvrir
              </Link>
              <CallPatient />
              <CloseConsultation patientSpotlight={p} />
            </div>
          </div>
        </Spotlight.Action>
      )),
    [closeAppSpotlight, patientSpotlights]
  );

  return (
    <>
      <div className="absolute flex scale-x-0 rounded-full bg-slate-600 p-2 text-white transition-all  duration-200  ease-out hover:bg-slate-800 hover:p-3 group-hover:-translate-y-16  group-hover:scale-x-100">
        <WindowIcon className="w-6" onClick={spotlight.open} />
      </div>
      <Spotlight.Root
        onQueryChange={filterList}
        shortcut="alt + L"
        scrollable
        maxHeight={500}>
        <Spotlight.Search
          placeholder="Search..."
          leftSection={
            <DocumentMagnifyingGlassIcon className="w-6 h-6 stroke-[1.5]" />
          }
        />
        <Spotlight.ActionsList>
          {actions.length > 0 ? (
            actions
          ) : (
            <Spotlight.Empty> Aucun resultat...</Spotlight.Empty>
          )}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}

export default ConsultationSpotlight;
