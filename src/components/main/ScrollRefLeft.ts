import { useEffect, useRef } from "react";

//CODE COPIED, WAS NOT WRITTEN BY ME

export function useHorizontalScrollLeft() {
    const elRef = useRef();
    useEffect(() => {
      const el:any = elRef.current;
      if (el) {
        const onWheel = (e: { deltaY: number; preventDefault: () => void; }) => {
          if (e.deltaY == 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth"
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }