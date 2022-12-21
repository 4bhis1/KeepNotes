import React, { useEffect, useRef } from "react";
import View from "./View";

const Displayer = ({containerStyle, cardComponent}) => {
  const divRef = useRef(null);

  useEffect(() => {
    const div = divRef.current;
    const height = div.offsetHeight;
    const width = div.offsetWidth;
    console.log(`Height: ${height}, Width: ${width}`);
  }, []);

  return (
    <View
      style={{ backgroundColor: "lightblue", marginHorizontal: 30 ,...containerStyle}}
      reference={divRef}
      onClick={() => {
        console.log("euei");
      }}
    >
        Nice
    </View>
  );
};

export default Displayer;
