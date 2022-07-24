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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9703741164935!2d90.42340071478476!3d23.784069284572755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c793ffffffff%3A0x7aefdbe12c0d44e3!2sSuffix%20IT!5e0!3m2!1sen!2sbd!4v1626157761213!5m2!1sen!2sbd"
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
