import { useEffect } from "react";

export function useClickAway(onClickAway: () => void, ref: any) {
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  function handleClick(event: any) {
    if (ref.current && !ref.current.contains(event.target)) onClickAway();
  }
}
