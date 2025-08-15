import { useState, useEffect } from "react";

export const useIsPhone = () => {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const checkIsPhone = () => {
      setIsPhone(window.innerWidth < 768);
    };

    checkIsPhone();
    window.addEventListener("resize", checkIsPhone);

    return () => window.removeEventListener("resize", checkIsPhone);
  }, []);

  return isPhone;
};
