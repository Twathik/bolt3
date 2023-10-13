import { XCircleIcon } from "@heroicons/react/24/outline";
import React, { ReactNode } from "react";

interface ErrorNotificationInterface {
  title: string;
  description: string;
  icon?: ReactNode;
  closeCallback?: () => void;
}
function ErrorNotification({
  title,
  icon,
  description,
  closeCallback,
}: ErrorNotificationInterface) {
  return (
    <div className="w-1/2 rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          {icon ?? (
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          )}
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{title}</h3>
          <div className="mt-2 text-sm text-red-700">{description}</div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              {closeCallback && (
                <button
                  type="button"
                  onClick={closeCallback}
                  className="ml-3 rounded-md bg-red-50 px-2 py-1.5 text-sm font-medium text-red-800 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-green-50"
                >
                  Fermer
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorNotification;
