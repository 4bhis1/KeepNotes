import React, { useState } from "react";
import Avatar from "../Components/Avatar";
import View from "../Components/View";

const Nav = () => {
  let [view, updateView] = useState("row");

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
        <View style={{ display: "flex", justifyContent: "space-between" }}>
          <View>Theme Toggler</View>
          {/* <View
            onClick={() => {
              if (view === "row") updateView("col");
              else updateView("row");
            }}
          >
            List View
          </View> */}

          <Avatar name={"Abhishek Kumar"} />
        </View>
      </View>
    </>
  );
};

export default Nav;
