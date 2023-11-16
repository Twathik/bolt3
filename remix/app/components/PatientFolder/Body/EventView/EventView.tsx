import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/lib/utils";
import type { ClinicalEventsGetClinicalEventsResponseData } from "@/components/generated/models";
import { Link } from "@remix-run/react";

const clinicalTypes: { [k: string]: string } = {
  DIAGNOSTIC: "bg-cyan-900 hover:bg-cyan-700",
  PRESCRIPTION: "bg-orange-400 hover:bg-orange-700",
};

export default function EventView({
  clinicalEvents,
}: {
  clinicalEvents:
    | ClinicalEventsGetClinicalEventsResponseData["mainDb_clinicalEvents"];
}) {
  return (
    <ul className="relative m-2 flex w-full flex-col divide-y divide-gray-100 overflow-y-scroll">
      {clinicalEvents.map((clinicalEvent) => (
        <li
          key={clinicalEvent.id}
          className="flex w-full items-center justify-between gap-x-6 py-5">
          <div className="min-w-0">
            <div className="flex items-start gap-x-3">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {clinicalEvent.eventType}
              </p>
              <p
                className={classNames(
                  clinicalTypes[clinicalEvent.eventType],
                  "mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
                )}>
                {clinicalEvent.empty ? "vierge" : "données disponibles"}
              </p>
            </div>
            <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
              <p className="whitespace-nowrap">
                Due on{" "}
                <time dateTime={clinicalEvent.updatedAt}>
                  {clinicalEvent.updatedAt}
                </time>
              </p>
              <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <p className="truncate">
                Creé par Dr {clinicalEvent.user.fullName}
              </p>
            </div>
          </div>
          <div className="flex flex-none items-center gap-x-4">
            <Link
              prefetch="intent"
              to={`/edit-clinical-event/${clinicalEvent.id}`}
              className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">
              Modifier
              <span className="sr-only">, {clinicalEvent.eventType}</span>
            </Link>
            <Menu as="div" className="relative flex-none">
              <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                <span className="sr-only">Options</span>
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={classNames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900"
                        )}>
                        Edit
                        <span className="sr-only">
                          , {clinicalEvent.eventType}
                        </span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={classNames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900"
                        )}>
                        Move
                        <span className="sr-only">
                          , {clinicalEvent.eventType}
                        </span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={classNames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900"
                        )}>
                        Delete
                        <span className="sr-only">
                          , {clinicalEvent.eventType}
                        </span>
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </li>
      ))}
    </ul>
  );
}
