import { useState, useEffect, useMemo } from "react";

export default function useOnScreen(ref: React.RefObject<HTMLElement>) {
   const [isIntersecting, setIntersecting] = useState(false);

   const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0.98],
   };

   const observer = useMemo(
      () =>
         new IntersectionObserver(([entry]) =>{
            setIntersecting(entry.isIntersecting)}, options
         ),
      [ref]
   );

   useEffect(() => {
      observer.observe(ref.current!);
      return () => observer.disconnect();
   }, [observer, ref]);

   return isIntersecting;
}
