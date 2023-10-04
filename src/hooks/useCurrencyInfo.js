import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    //effect because we want api call only when hook is mounted!
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json()) //response ko json me convert karna
      .then((res) => setData(res[currency]));
  }, [currency]);
  return data;
}
export default useCurrencyInfo;
//
