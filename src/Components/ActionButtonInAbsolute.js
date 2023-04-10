import React, { useState } from "react";
import View from "./View";

import { AiOutlinePlus } from "react-icons/ai";

const ActionButtonInAbsolute = ({ onPress }) => {
  const [hover, updateHover] = useState(false);
  return (
    <View>
      <View
        style={{
          position: "absolute",
          bottom: 50,
          right: 50,
          height: 50,
          width: hover ? 130 : 30,
          bgColor: "green",
          justifyContent: hover ? "space-between" : "center",
          alignItems: "center",
          paddingHorizontal: 10,
          borderRadius: 100,
          cursor: "pointer",
          boxShadow: "0px 0px 50px 0px rgb(146, 209, 146)",
          transition: "linear 0.1s",
          flexWrap: "nowrap",
          userSelect: "none",
          color: "white",
        }}
        onMouseEnter={() => {
          updateHover(true);
        }}
        onMouseLeave={() => {
          updateHover(false);
        }}
        onClick={onPress}
      >
        {hover && (
          <View style={{ flexWrap: "nowrap", color: "white" }}>Add More</View>
        )}
        <AiOutlinePlus style={{ fontSize: 30, fontWeight: 700 }} />
      </View>
    </View>
  );
};

export default ActionButtonInAbsolute;
