import { useState } from "react";
import { InputNormal } from "./_commons/atoms/inputs";
import { ShowGiftsSearched } from "./components";
import "./output.css";

function App() {
  const [searchList, setSearchList] = useState([]);

  return (
    <div className="mt-4">
      <div className="w-8/12 mx-auto">
        <div className="mb-4">
          <InputNormal
            label="Gift to search"
            placeholder="Enter an name"
            onAddInput={setSearchList}
          />
        </div>
        {searchList.map((_) => (
          <div className="mb-4">
            <ShowGiftsSearched gift={_} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
