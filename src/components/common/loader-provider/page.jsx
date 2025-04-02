"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/components/common/loader/page";

export default function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    if (pathname === "/") { // Run loader only on home page
      setLoading(true);
      const timeout = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [pathname]); 

  return <>{loading ? <Loader /> : children}</>;
}
