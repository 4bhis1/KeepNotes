import React, { useState } from "react";
import Avatar from "../Components/Avatar";
import LihtAndDarkModeSwitch from "../Components/Switch";
import View from "../Components/View";

const Nav = () => {
  let [view, updateView] = useState("row");

  let [darkMode, updateDarkMode] = useState(false);

  return (
    <>
      <View
        style={{
          backgroundColor: "#c0c0c0",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <View>
          <input type={"text"} placeholder={"enter here to search"} />
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <LihtAndDarkModeSwitch
            darkMode={darkMode}
            updateDarkMode={updateDarkMode}
          />
          {/* <View
            onClick={() => {
              if (view === "row") updateView("col");
              else updateView("row");
            }}
          >
            List View
          </View> */}
          <View style={{ cursor: "pointer", position : "relative"  }} >
            <Avatar name={"Abhishek Kumar"} />
            {/* <View style={{position : "Absolute", top : 40, zInde : 2}}>
              Nice
            </View> */}
          </View>
        </View>
      </View>
    </>
  );
};

export default Nav;
