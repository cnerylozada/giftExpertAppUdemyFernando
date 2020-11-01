import React, { useEffect, useState } from "react";
import { getGiftBySearch } from "../services/gifts";
import { Card, Loading } from "../_commons/molecules";

const ShowGiftsSearched = ({ gift }) => {
  const [giftSrc, setGiftSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getGiftBySearch(gift).then((_) => {
      console.log(_);
      setGiftSrc(_[0]);
      setIsLoading(false);
    });
  }, [gift]);
  if (isLoading) return <Loading text="Cargando ..." color="blueDark" />;

  return <Card src={giftSrc} title="Mi gift name" />;
};

export default ShowGiftsSearched;
