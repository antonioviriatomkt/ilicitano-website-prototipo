"use client";

import { useEffect, useState } from "react";

/**
 * Prints a custom property's computed value. Reading it back off the document
 * rather than repeating it in the markup means the design system page cannot
 * advertise a duration or a curve that the stylesheet does not actually
 * define — including the collapsed values under prefers-reduced-motion.
 */
export function TokenValue({ token, className }: { token: string; className?: string }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const read = () =>
      setValue(getComputedStyle(document.documentElement).getPropertyValue(token).trim());
    read();

    // The reduced-motion tokens change under the user, not under the app.
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    query.addEventListener("change", read);
    return () => query.removeEventListener("change", read);
  }, [token]);

  // Empty until hydration; the label beside it already names the token, so
  // there is nothing to lay out around and nothing that can shift.
  return <span className={className}>{value}</span>;
}
