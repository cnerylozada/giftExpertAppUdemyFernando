import { useEffect, useState } from "react";
import { InputNormal } from "./_commons/atoms/inputs";
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
      </div>
    </div>
  );
}

export default App;
