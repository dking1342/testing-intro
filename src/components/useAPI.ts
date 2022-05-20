import { useState, useEffect } from "react";
import { APIData } from "../types/apicomponents";

export const useAPI = () => {
  const [data, setData] = useState<APIData>();

  useEffect(() => {
    let isMounted = true;
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        if(isMounted) {
          setData(data);
        }
      });
    return () => {
      isMounted = false;
    }
  }, []);

  return data;
}