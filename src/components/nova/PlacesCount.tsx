import { useEffect, useState } from "react";

export function PlacesCount() {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`/api/latest-places?t=${Date.now()}`, { cache: "no-store", signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((payload: { total?: number } | null) => {
        if (payload && typeof payload.total === "number" && payload.total > 0) {
          setTotal(payload.total);
        }
      })
      .catch(() => {});

    return () => controller.abort();
  }, []);

  if (total === null) return null;

  return (
    <span>
      <strong>{total}</strong> {total > 1 ? "lieux" : "lieu"} à découvrir
    </span>
  );
}
