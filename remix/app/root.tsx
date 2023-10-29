import stylesheet from "@/tailwind.css";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Toaster } from "./ui/components/ui/toaster";
import GlobalProgressBar from "./components/GeneralComponents/ProgressBar/GlobalProgressBar";
import AppFloatingActionButton from "./components/GeneralComponents/FAB/AppFloatingActionButton";
import { useSubscription } from "./lib/wundergraph";
import useTabsStore from "./stores/tabsStore";
import { useEffect } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  const { data } = useSubscription({
    operationName: "global/closeAllTabsSubscription",
  });
  const { closeTabs } = useTabsStore();

  useEffect(() => {
    if (data) closeTabs();
  }, [closeTabs, data]);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <GlobalProgressBar />
        <Outlet />
        <AppFloatingActionButton />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Toaster />
      </body>
    </html>
  );
}
