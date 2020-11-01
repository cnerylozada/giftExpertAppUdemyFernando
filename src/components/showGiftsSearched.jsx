import React, { useEffect, useState } from "react";
import { getGiftBySearch } from "../services/gifts";
import { Card, Loading } from "../_commons/molecules";

const ShowGiftsSearched = ({ gift }) => {
  const [srcList, setSrcList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getGiftBySearch(gift).then((_) => {
      setSrcList(_);
      setIsLoading(false);
    });
  }, [gift]);
  if (isLoading) return <Loading text="Cargando ..." color="blueDark" />;

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {srcList &&
        srcList.map((_) => (
          <div className="w-3/12">
            <Card key={_.url} src={_.url} title={_.title} />
          </div>
        ))}
    </div>
  );
};

export default ShowGiftsSearched;
