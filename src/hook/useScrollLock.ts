import { useEffect } from "react";
import { useScrollLockStore } from "../store/scrollLock.store";

function useScrollLock() {
  const { isAnyComponentOpen, openComponents } = useScrollLockStore();

  useEffect(() => {
    if (isAnyComponentOpen()) {
      document.body.style.overflowY = "hidden ";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openComponents]);
}

export default useScrollLock;
