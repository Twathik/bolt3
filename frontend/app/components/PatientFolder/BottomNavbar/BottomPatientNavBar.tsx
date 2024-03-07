import HistoricOverview from "./HistoricOverview";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi";
import { Button } from "@/ui/components/ui/button";
import { useCallback, useMemo, useState } from "react";
import { patientFolderBottomMenuElements } from "./MenuElements";
import { useBoltStore } from "@/stores/boltStore";

function BottomPatientNavBar() {
  const [menuPage, setMenuPage] = useState<number>(0);
  const patient = useBoltStore((store) => store.patient);

  const patientBottomMenu = useMemo(
    () =>
      patientFolderBottomMenuElements({
        patientId: patient?.id ?? "",
      }),
    [patient]
  );

  const isFirst = menuPage == 0;
  const isLast = menuPage == patientBottomMenu.length - 1;
  const next = useCallback(() => {
    if (!isLast) setMenuPage((page) => page + 1);
  }, [isLast]);
  const previous = useCallback(() => {
    if (!isFirst) setMenuPage((page) => page - 1);
  }, [isFirst]);

  return (
    <div className="bottom-0 flex min-w-full">
      <div className="mx-auto mb-5 grid h-20 w-4/5 grid-cols-12 justify-center rounded-xl border-y-2 border-slate-800 py-4 shadow-lg sm:px-6">
        <div className="col-span-10 min-w-max">
          <div className="justify-center">
            <div className="grid grid-cols-12 items-center">
              <Button
                disabled={isFirst}
                className="col-span-1"
                variant="secondary"
                onClick={previous}>
                <span className="w-6 h-6">
                  <HiChevronDoubleLeft />
                </span>
              </Button>
              <div className="col-span-10 mx-2 flex flex-row gap-4">
                {patient &&
                  !patient.onTrash &&
                  patientBottomMenu[menuPage].map((el) => (
                    <div key={el.id}>{el.button}</div>
                  ))}
              </div>
              <Button
                disabled={isLast}
                className="col-span-1"
                variant="secondary"
                onClick={next}>
                <span className="w-6 h-6">
                  <HiChevronDoubleRight />
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex justify-center">
          <HistoricOverview />
        </div>
      </div>
    </div>
  );
}

export default BottomPatientNavBar;
