import React, { useEffect, useRef, useState } from "react";
import View from "../Components/View";

import { BsFillPlusSquareFill, BsFolder, BsThreeDots } from "react-icons/bs";
import { BiBookAlt } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineStar, AiOutlineBell } from "react-icons/ai";
import { MdFolder, MdOutlineCategory } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import { CiTimer } from "react-icons/ci";
import Modal from "../Components/Modal";
import { useNavigate } from "react-router-dom";

const IconsAndText = ({
  icon,
  text,
  action,
  bold = false,
  options = false,
  actionsOfOptions,
}) => {
  let [hover, updateHover] = useState(false);
  let [hoverOfOptions, updateHoverOfOptions] = useState(false);

  let [refOfThreeDots, updateRefofThreeDots] = useState(useRef(null));

  let [showModalClick, updateShowModalClick] = useState(false);

  useEffect(() => {
    updateRefofThreeDots(refOfThreeDots);
  }, []);

  return (
    <>
      {showModalClick && (
        <Modal
          parentRef={refOfThreeDots}
          onClose={() => {
            updateShowModalClick(false);
          }}
        >
          <View style={{ flexDirection: "column" }}>
            {actionsOfOptions.map((value, index) => (
              <View
                onClick={value.onAction}
                key={index}
                style={{ cursor: "pointer" }}
              >
                {value.name}
              </View>
            ))}
          </View>
        </Modal>
      )}
      <View
        style={{
          marginBottom: 10,
          alignItems: "center",
          cursor: "pointer",
          // flex: 1,
          justifyContent: "space-between",
        }}
      >
        <View
          onClick={action}
          onMouseEnter={() => {
            updateHover(true);
          }}
          onMouseLeave={() => {
            updateHover(false);
          }}
          style={{ flex: 1 }}
        >
          <View style={{ color: hover ? "white" : "lightBlack" }}>{icon}</View>
          <View
            style={{
              marginLeft: 10,
              fontWeight: bold ? 600 : 500,
              color: hover ? "white" : "lightWhite",
              fontSize: 17,
            }}
          >
            {text}
          </View>
        </View>
        {options && (
          <View
            reference={refOfThreeDots}
            onMouseEnter={() => {
              updateHoverOfOptions(true);
            }}
            onMouseLeave={() => {
              updateHoverOfOptions(false);
            }}
            onClick={() => {
              updateShowModalClick(true);
            }}
            style={{
              color: hoverOfOptions ? "white" : "lihgtBlack",
            }}
          >
            <BsThreeDots />
          </View>
        )}
      </View>
    </>
  );
};

const LeftTaskNav = () => {
  const Navigate = useNavigate();
  return (
    <View
      style={{
        bgColor: "black",
        height: "100vh",
        width: "20%",
        flexDirection: "column",
      }}
    >
      <View style={{ padding: 10, flexDirection: "column" }}>
        <View
          style={{
            marginBottom: 20,
            alignItems: "center",
          }}
        >
          <MdOutlineCategory />
          <View style={{ marginLeft: 10 }}>Categories</View>
        </View>

        {/* <View
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
      </View> */}
        <View style={{ padding: 10, flexDirection: "column" }}>
          <IconsAndText
            icon={<BiBookAlt />}
            text={"Note"}
            action={() => {
              Navigate("/notes");
            }}
            bold={true}
          />
          <IconsAndText
            icon={<FiEdit />}
            text={"White Board"}
            action={() => {
              Navigate("/whiteBoard");
            }}
            bold={true}
          />
          <IconsAndText
            icon={<AiOutlineBell />}
            text={"Reminders"}
            action={() => {
              Navigate("/reminders");
            }}
            bold={true}
          />
          <IconsAndText
            icon={<CiTimer />}
            text={"Habits"}
            action={() => {
              Navigate("/habits");
            }}
            bold={true}
          />
          <IconsAndText
            icon={<AiOutlineBell />}
            text={"Money manage"}
            action={() => {
              Navigate("/moneyManage");
            }}
            bold={true}
          />
          <IconsAndText
            icon={<AiOutlineStar />}
            text={"Favourites"}
            action={() => {
              Navigate("/fav");
            }}
            bold={true}
          />
          <IconsAndText
            icon={<FaTrashAlt />}
            text={"Trash"}
            action={() => {
              Navigate("/trash");
            }}
            bold={true}
          />
        </View>
      </View>

      <View style={{ padding: 10, flexDirection: "column", flex: 1 }}>
        <View
          style={{
            justifyContent: "space-between",
            marginBottom: 20,
            alignItems: "center",
          }}
        >
          <View>
            <VscLibrary />
            <View style={{ marginLeft: 10 }}>Libraries</View>
          </View>
          <AiOutlinePlus />
        </View>

        <View
          style={{
            paddingLeft: 10,
            paddingTop: 10,
            flex: 1,
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          {Array(3)
            .fill("a")
            .map((x, y) => (
              <IconsAndText
                icon={<BsFolder />}
                text={"Library"}
                action={() => {
                  Navigate("/library");
                }}
                bold={false}
                options={true}
                actionsOfOptions={[
                  {
                    name: "Delete",
                    onAction: () => {
                      console.log("Yes pressed this delete");
                    },
                  },
                  {
                    name: "Rename",
                    onAction: () => {
                      console.log("Yes pressed this Rename");
                    },
                  },
                ]}
              />
            ))}
        </View>
      </View>
    </View>
  );
};

export default LeftTaskNav;
