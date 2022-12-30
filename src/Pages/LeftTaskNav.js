import React from "react";
import View from "../Components/View";

import { BsFillPlusSquareFill } from "react-icons/bs";
import { BiBookAlt } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineStar, AiOutlineBell } from "react-icons/ai";
import { MdFolder } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";

const IconsAndText = ({ icon, text, action, bold = false }) => (
  <View
    onPress={action}
    style={{
      marginBottom: 10,
      alignItems: "center",
      cursor: "pointer",
      //   flex: 1,
    }}
  >
    {icon}
    <View
      style={{
        marginLeft: 10,
        fontWeight: bold ? 600 : 500,
        color: "lightBlack",
        fontSize : 17
      }}
    >
      {text}
    </View>
  </View>
);

const LeftTaskNav = () => {
  return (
    <View
      style={{
        bgColor: "black",
        height: "100vh",
        width: "20%",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          alignItems: "center",
          color: "white",
          fontWeight: 600,
          cursor: "pointer",
          padding: 10,
        }}
      >
        <BsFillPlusSquareFill
          style={{ color: "", marginRight: 10, borderRadius: 5 }}
        />
        New note
      </View>
      <View style={{ padding: 10, flexDirection: "column" }}>
        <IconsAndText
          icon={<BiBookAlt />}
          text={"Note"}
          action={() => {
            console.log("Clicke here");
          }}
          bold={true}
        />
        <IconsAndText
          icon={<FiEdit />}
          text={"White Board"}
          action={() => {
            console.log("Clicke here");
          }}
          bold={true}
        />
        <IconsAndText
          icon={<AiOutlineBell />}
          text={"Reminders"}
          action={() => {
            console.log("Clicke here");
          }}
          bold={true}
        />
        <IconsAndText
          icon={<AiOutlineStar />}
          text={"Favourites"}
          action={() => {
            console.log("Clicke here");
          }}
          bold={true}
        />
        <IconsAndText
          icon={<FaTrashAlt />}
          text={"Trash"}
          action={() => {
            console.log("Clicke here");
          }}
          bold={true}
        />
      </View>

      <View style={{ padding: 10, flexDirection: "column", flex: 1 }}>
        <View
          style={{
            justifyContent: "space-between",
            marginBottom: 20,
            alignItems: "center",
          }}
        >
          <View>Categories</View>
          <AiOutlinePlus />
        </View>

        <View
          style={{
            paddingLeft: 10,
            paddingTop: 10,
            flex: 1,
            alignItems: "flex-start",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          {Array(5)
            .fill("a")
            .map((x, y) => (
              <IconsAndText
                icon={<MdFolder />}
                text={"Library"}
                action={() => {
                  console.log("Clicke here");
                }}
                bold={false}
              />
            ))}
        </View>
      </View>
    </View>
  );
};

export default LeftTaskNav;
