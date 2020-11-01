import React, { useEffect, useState } from "react";
import { getGiftBySearch } from "../services/gifts";
import { TextNormal } from "../_commons/atoms/texts";
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
    <>
      {srcList && (
        <>
          <div className="border-b mb-4">
            <TextNormal size="medium">{gift}</TextNormal>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            {srcList.map((_) => (
              <div className="w-3/12">
                <Card key={_.url} src={_.url} title={_.title} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ShowGiftsSearched;
