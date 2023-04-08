import { useState, useEffect } from "react";

export function useWindow() {
  // initialize state with undefined value so server and client renders match
  const [width, setWidth] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (window) {
      // handler to call on window resize
      const handleResize = () => setWidth(window.innerWidth)
      // add event listener
      window.addEventListener("resize", handleResize)
      // update state with initial window size
      handleResize()
      // cleanup
      return () => window.removeEventListener(
        "resize", handleResize
      )
    }
  }, [/** empty array ensures effect is only run on mount */])

  return width
}