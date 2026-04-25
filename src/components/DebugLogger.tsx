"use client";

import { useEffect } from "react";

export default function DebugLogger() {
  useEffect(() => {
    console.log("[aspooner.com] page loaded");
    console.log("[aspooner.com] href:", window.location.href);
    console.log("[aspooner.com] NODE_ENV:", process.env.NODE_ENV);
  }, []);

  return null;
}
