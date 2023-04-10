import React, { useState } from "react";
import View from "./View";

import { FaCloudMoon, FaCloudSun } from "react-icons/fa";

function LihtAndDarkModeSwitch({
  darkMode,
  updateDarkMode,
  backgroundColor,
  onClick,
}) {
  // let [toggle,updateToggle] = useState(true)
  return (
    <View
      style={{
        display: "flex",
        borderRadius: 20,
        cursor: "pointer",
        marginHorizontal: 20,
        position: "relative",
        alignItems: "center",
        // paddingHorizontal: 10,
        width: 40,
      }}
      onClick={() => {
        updateDarkMode((data) => !data);
      }}
    >
      <View
        style={{
          bgColor: "lightBlue",
          width: 40,
          height: 15,
          borderRadius: 30,
          position: "absolute",
          zIndex: 0,
        }}
      />
      <View
        style={{
          zIndex: 1,
        }}
      >
        <View
          style={{
            borderRadius: "100%",
            backgroundColor: darkMode ? "white" : "yellow",
            // position: "absolute",
            transition: "linear 0.5s",

            ...(darkMode
              ? { transform: "translateX(-5px)" }
              : { transform: "translateX(15px)" }),
          }}
        >
          {darkMode ? (
            <FaCloudMoon
              style={{ height: 30, width: 30, color: "rgb(117 98 98)" }}
            />
          ) : (
            <FaCloudSun style={{ height: 30, width: 30, color: "#d76217" }} />
          )}
        </View>
      </View>
    </View>
  );
}

export default LihtAndDarkModeSwitch;
