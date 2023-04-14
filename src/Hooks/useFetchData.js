import { useState, useEffect } from "react";

const fetchData = async (setState, url) => {
  try {
    const resp = await fetch(url, {
      credentials: "include",
    });
    const jresp = await resp.json();
    setState((prevState) => {
      return {
        ...prevState,
        loading: false,
        response: jresp.status === 200 ? jresp.msg : [],
        error: jresp.status !== 200 ? jresp.msg : null,
      };
    });
  } catch (e) {
    setState((prevState) => {
      return {
        ...prevState,
        loading: false,
        error: e.message,
      };
    });
  }
};

export default function useFetchData(url) {
  const [responseState, setResponseState] = useState({
    loading: true,
    response: [],
    error: null,
  });
  useEffect(() => {
    // fetchData(setResponseState, url);
    /* setTimeout used to simulate loading. Will be removed */
    setTimeout(() => fetchData(setResponseState, url), 1000);
  }, [url]);
  return [responseState];
}
