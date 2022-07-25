import React from "react";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="container mx-auto w-full">
      <div className="">
        <div className="flex space-x-2">
          <SearchBar />
          <div className="w-[calc(100vw-550px)]  h-screen">
            <iframe
              src=""
              width="100%"
              className="h-screen"
              title="barikoi"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
