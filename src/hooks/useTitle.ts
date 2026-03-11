import { useEffect } from "react";

export function useTitle(title: string): void {
  // Keeps browser tab title aligned with the active page.
  useEffect(() => {
    document.title = `${title} | Shopping Cart`;
  }, [title]);
}
