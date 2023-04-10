import React from "react";
import View from "../../Components/View";
import myImage1 from "../../Images/cr1.jpeg"
const LeftSectionImage = () => {
  return (
    <View
      style={{
        bgColor: "lightBlue",
        height: "100vh",
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <image src={myImage1} alt={"my Image"} style={{height : "50px", width : "50px"}}/>
    </View>
  );
};

export default LeftSectionImage;
