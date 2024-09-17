import React from "react";

export const useFetch = (url: string) => {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const response = await fetch(url);
        const responseJson = await response.json();
        setData(responseJson);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData(url);
  }, [url]);

  return { data };
};
