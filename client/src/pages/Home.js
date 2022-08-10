import React from "react";
import DropdownTab from "../components/Dropdown";

function Home() {
  return (
    <div className="bg-slate-200 py-4">
      <div className="container items-center mx-auto pb-64 bg-slate-200">
        <div>
          <DropdownTab></DropdownTab>
        </div>
      </div>
    </div>
  );
}

export default Home;

