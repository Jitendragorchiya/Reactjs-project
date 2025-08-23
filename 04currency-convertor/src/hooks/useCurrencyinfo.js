import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) //convert the response to JSON
      .then((res) => setData(res[currency]));
  }, [currency]); //dependency array, when currency changes, this effect will run again

  return data; //return the data
}

export default useCurrencyInfo;
