import axios from "axios";
import React, { useRef, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const SearchBar = () => {
  const [searchKey, setSearchKey] = useState("");
  const [mainSearchData, setMainSearchData] = useState({});
  const [searchData, setSearchData] = useState([]);
  const inputRef = useRef();
  const handleOnchange = useDebounce(async (search) => {
    setSearchKey(search);
    setSearchData([]);
    if (search) {
      try {
        const { data } = await axios.get(
          `https://api.bmapsbd.com/search/autocomplete/web?search=${search}`
        );
        if (data) {
          setSearchData(data?.places);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, 500);

  const handleSearch = async (id) => {
    setMainSearchData({});
    try {
      const { data } = axios.get(`https://api.bmapsbd.com/place/${id}`);
      setMainSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(mainSearchData);
  return (
    <>
      <div className="w-[750px] px-5">
        <div>
          <h1 className="font-[700] text-[30px] py-5 pl-1">
            <span className="text-[#4c5976]">Bari</span>
            <span className="text-[#2ddbac]">koi</span>
          </h1>
        </div>
        <div className="bg-slate-50 shadow-xl rounded-lg flex items-center justify-between px-2">
          <input
            list="places"
            name="placeName"
            id="placeName"
            autoComplete="off"
            ref={inputRef}
            placeholder="Search for a place"
            className="w-[80%] p-4 bg-slate-50 outline-none rounded-lg"
            onChange={(e) => handleOnchange(e.target.value)}
          />
          <div className="cursor-pointer">
            {searchKey ? (
              <button
                onClick={() => {
                  inputRef.current.value = "";
                  setSearchKey("");
                  setSearchData([]);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#0e0f11] font-[700] p-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              <button className="outline-none shadow-lg rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 bg-[#2ddbac] p-2 rounded-lg text-white font-[500]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
        {searchData?.length > 0 && (
          <div className="p-3 bg-slate-50 shadow-xl rounded-lg h-60 border-[1px] border-slate-200 overflow-y-auto">
            {searchData?.map((place, i) => {
              return (
                <div
                  className="flex items-center space-x-6 border-b-[1px] border-slate-200 py-4 cursor-pointer"
                  key={i}
                  onClick={() => handleSearch(place?.uCode)}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-[18px] text-slate-700 font-[400]">
                      {place?.Address}
                    </h1>
                    <h2 className="text-[15px] text-slate-500 font-[300]">
                      {place?.new_address}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
