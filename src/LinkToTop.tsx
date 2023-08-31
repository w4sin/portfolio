import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function LinkToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname != "/")
      setTimeout(() => window.scrollTo(0, 0), 50)
  }, [pathname]);

  return null;
}