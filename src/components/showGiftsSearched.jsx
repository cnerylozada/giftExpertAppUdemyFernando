import React, { useEffect, useState } from "react";
import { getGiftBySearch } from "../services/gifts";
import { TextNormal } from "../_commons/atoms/texts";

const ShowGiftsSearched = ({ gift }) => {
  const [giftSrc, setGiftSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getGiftBySearch(gift).then((_) => {
      setGiftSrc(_[0]);
      setIsLoading(false);
    });
  }, [gift]);
  if (isLoading) return <TextNormal>Loading ...</TextNormal>;
  return <img src={giftSrc} />;
};

export default ShowGiftsSearched;
