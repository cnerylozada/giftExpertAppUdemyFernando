import { useEffect, useState } from "react";
import { InputNormal } from "./_commons/atoms/inputs";
import { Icons } from "./_commons/atoms/icons";
import { ShowGiftsSearched } from "./components";

function App() {
  const [gift, setGift] = useState("");

  return (
    <div className="mt-4">
      <div className="w-8/12 mx-auto">
        <div className="mb-4">
          <InputNormal
            label="Gift to search"
            placeholder="Enter an name"
            onChange={setGift}
          />
        </div>
        <ShowGiftsSearched gift={gift} />
        <Icons name="home" />
      </div>
    </div>
  );
}

export default App;
