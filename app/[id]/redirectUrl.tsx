"use client";

import { useEffect } from "react";

export default function RedirectUrl({ url }: { url: string }) {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return <></>;
}
