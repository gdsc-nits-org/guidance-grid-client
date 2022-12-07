import { useEffect } from "react";

function useEvent(event, handler, passive = false) {
  useEffect(() => {
    window.addEventListener(event, handler, passive);

    // This will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener(event, handler);
    };
  });
}

export default useEvent;
