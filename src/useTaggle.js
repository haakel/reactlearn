import { useState } from "react";
// e10 - 4:33:53
export const useTaggle = (intialValue = false) => {
  const [state, setstate] = useState(intialValue);
  const toggle = () => {
    setstate((prev) => !prev);
  };
  return [state, toggle];
};
