import React, { useState } from "react";

const Nav = () => {

  let [view,updateView] = useState('row')

  return (
    <>
      <div
        style={{
          backgroundColor: "#c0c0c0",
          padding: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Logo</div>
          <div>Keep Notes</div>
        </div>
        <div>
          <input type={"text"} placeholder={"enter here to search"} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Theme Toggler</div>
          <div onClick={()=>{
            if (view === 'row') updateView('col')
            else updateView('row')
          }}>List View</div>
        </div>
      </div>
    </>
  );
};

export default Nav;
