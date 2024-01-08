import { useState, useEffect } from "react";
export default function useCustom(){
    const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);
  return count;
}

