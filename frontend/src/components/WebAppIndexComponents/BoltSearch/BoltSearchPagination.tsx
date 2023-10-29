"use client";

import { UsePaginationProps, usePagination } from "react-instantsearch";
import { isModifierClick } from "./utils/BoltSearchUtils";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { useCallback } from "react";

type PaginationItemProps = Omit<React.ComponentProps<"a">, "onClick"> & {
  onClick: NonNullable<React.ComponentProps<"a">["onClick"]>;
  isDisabled: boolean;
};

const PaginationItem = ({
  isDisabled,
  href,
  onClick,
  ...props
}: PaginationItemProps) => {
  return (
    <a
      onClick={(e) => {
        if (isModifierClick(e)) {
          return;
        }
        e.preventDefault();
        if (!isDisabled) onClick(e);
      }}
      {...props}
    />
  );
};

const CustomPagination = (props: UsePaginationProps) => {
  const {
    pages,
    currentRefinement,
    nbPages,
    isFirstPage,
    isLastPage,
    refine,
    createURL,
  } = usePagination(props);

  const firstPageIndex = 0;
  const previousPageIndex = currentRefinement - 1;
  const nextPageIndex = currentRefinement + 1;
  const lastPageIndex = nbPages - 1;
  const firstPageIdexCallBack = useCallback(
    () => refine(firstPageIndex),
    [refine, firstPageIndex],
  );

  const previousPageIndexCallBack = useCallback(
    () => refine(previousPageIndex),
    [],
  );

  const nextPageIndexCallBack = useCallback(() => refine(nextPageIndex), []);

  const lastPageIndexCallBack = useCallback(() => refine(lastPageIndex), []);
  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <PaginationItem
          isDisabled={isFirstPage}
          onClick={firstPageIdexCallBack}
          href={createURL(firstPageIndex)}
          className={`inline-flex cursor-pointer items-center border-t-2 border-transparent  pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`}
        >
          <ChevronDoubleLeftIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Début
        </PaginationItem>
      </div>
      <div className="-mt-px flex w-0 flex-1">
        <PaginationItem
          isDisabled={isFirstPage}
          onClick={previousPageIndexCallBack}
          href={createURL(previousPageIndex)}
          className="inline-flex cursor-pointer items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Précedent
        </PaginationItem>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {pages.map((page) => {
          const label = page + 1;
          return (
            <PaginationItem
              key={page}
              isDisabled={false}
              onClick={() => refine(page)}
              href={createURL(page)}
              aria-label={`Page ${label}`}
              className={`${
                currentRefinement === page
                  ? "border-indigo-500"
                  : "border-transparent hover:border-gray-300 hover:text-gray-700"
              } inline-flex cursor-pointer items-center border-t-2 px-4 pt-4 text-sm font-medium text-gray-500 `}
            >
              {label}
            </PaginationItem>
          );
        })}

        {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <PaginationItem
          isDisabled={isLastPage}
          onClick={nextPageIndexCallBack}
          href={createURL(nextPageIndex)}
          className="inline-flex cursor-pointer items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Suivent
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </PaginationItem>
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <PaginationItem
          isDisabled={isLastPage}
          onClick={lastPageIndexCallBack}
          href={createURL(lastPageIndex)}
          className=" inline-flex cursor-pointer items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Fin
          <ChevronDoubleRightIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </PaginationItem>
      </div>
    </nav>
  );
};

export default CustomPagination;
