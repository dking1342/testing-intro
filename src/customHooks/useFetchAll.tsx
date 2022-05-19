import { useEffect, useState } from "react";
import { fetchStatus } from "../types/fetches";

const useFetchAll = (url: string) => {
  const [status, setStatus] = useState<fetchStatus>({
    loading: true,
    error: "",
  });
  const options: any = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  const fetchData = async (url: string) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    let result = fetchData(url);
    result
      .then((res) => {
        setStatus((prev) => ({
          ...prev,
          loading: false,
          payloads: res,
        }));
        return res;
      })
      .catch((err) => {
        setStatus((prev) => ({
          ...prev,
          loading: false,
          error: "Error",
        }));
        return err;
      });
  }, []);

  return status;
};

export default useFetchAll;
