import { useState, useEffect } from "react";

const useLaunchData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const actualData = await fetch(
        `https://api.spacexdata.com/v5/launches/latest`
      ).then((response) => response.json());
      setLoading(false);
      setData(actualData);
    };
    getData();
  }, []);
  return {
    loading,
    data,
  };
};
export default useLaunchData;
