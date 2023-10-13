import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React, { ReactNode } from "react";

interface SuccessNotificationInterface {
  title: string;
  description: string;
  icon?: ReactNode;
  closeCallback?: () => void;
}
function SuccessNotification({
  title,
  icon,
  description,
  closeCallback,
}: SuccessNotificationInterface) {
  return (
    <div className="w-1/2 rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          {icon ? (
            icon
          ) : (
            <CheckCircleIcon
              className="h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          )}
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">{title}</h3>
          <div className="mt-2 text-sm text-green-700">
            <p>{description}</p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              {closeCallback && (
                <button
                  type="button"
                  onClick={closeCallback}
                  className="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
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

export default SuccessNotification;
