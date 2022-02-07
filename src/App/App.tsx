import React from "react";
import "./global.css";

function App() {
  return (
    <div className="wrap">
      <header className="bg-black h-px-90 basic-flex fixed w-full">
        <div className="content text-white basic-flex">
          <img className="w-px-80 h-px-38" src="/img/logo.png" alt="" />
          <nav className="basic-flex space-x-10">
            <button type="button" className="">
              About inDJ
            </button>
            <button type="button" className="">
              RoadMap
            </button>
            <button type="button" className="">
              Team
            </button>
            <button type="button" className="">
              WhitePaper
            </button>
            <button type="button" className="">
              Contackt US
            </button>
            <button type="button" className="">
              <img className="w-6 h-6" src="/img/lang.png" alt="" />
            </button>
          </nav>
        </div>
      </header>
      <section className="one"></section>
    </div>
  );
}

export default App;
