"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import { useEffect } from "react";

export function useAppRouter() {
  const router = useRouter();

  const { push } = router;

  router.push = async (...args: Parameters<typeof push>) => {
    NProgress.start();
    return push(...args);
  };

  return router;
}

export default function EndProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);
  return null;
}
