import React, { useEffect, useRef, useState } from "react";
import View from "./View";

import { SiAudiomack } from "react-icons/si";
import { BsListCheck } from "react-icons/bs";
import { BiText, BiImageAdd, BiBold } from "react-icons/bi";
import { FiDownloadCloud } from "react-icons/fi";
import { CiSaveUp1 } from "react-icons/ci";
import {
  RiCheckboxBlankLine,
  RiCheckFill,
  RiCheckDoubleFill,
} from "react-icons/ri";

import { MdDelete } from "react-icons/md";

const RCE = () => {
  const type = ["do", "doing", "done", "txt", "bld", "mic", "img"];
  const [cursorAtIndex, updateCursorAtIndex] = useState(0);

  let [text, updateText] = useState([{ type: type[3], data: "" }]);
  let [todoCompleteWidth, updateTodoCompleteWidth] = useState({
    doing: 0,
    done: 0,
  });

  useEffect(() => {
    reference.current.focus();

    let width = mainDivRef.current.offsetWidth;
    let do1 = 0,
      doing = 0,
      done = 0;
    for (let i of text) {
      if (i["type"] === type[0]) do1++;
      else if (i["type"] === type[1]) doing++;
      else if (i["type"] === type[2]) done++;
    }
    if (do1 || doing || done)
      updateTodoCompleteWidth({
        doing: (doing / (do1 + doing + done)) * width,
        done: (done / (do1 + doing + done)) * width,
      });
  }, [cursorAtIndex, text]);

  let reference = useRef(null);
  let mainDivRef = useRef(null);
  useEffect(() => {
    reference.current.style.height = "0px";
    const scrollHeight = reference.current.scrollHeight;
    reference.current.style.height = scrollHeight + "px";
  }, [text]);

  return (
    <View
      style={{
        height: 200,
        width: 300,
        bgColor: "blue",
        position: "relative",
        flexDirection: "column",
        display: "flex",
        borderRadius: 10,
        overflow: "hidden",
        paddingTop: 10,
        paddingHorizontal: 5,
      }}
      reference={mainDivRef}
    >
      <View
        style={{
          // flex: 1,
          height: 5,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <View
          style={{ bgColor: "green", width: todoCompleteWidth.done || 0 }}
        />
        <View
          style={{ bgColor: "yellow", width: todoCompleteWidth.doing || 0 }}
        />
      </View>
      {/* <textarea /> */}
      <View style={{ display: "block", flex: 1 }}>
        {text.map((val, index) => {
          let value = val.data;
          let tempType = val.type;
          return (
            <div
              style={{
                display: "flex",
                backgroundColor: "lightblue",
                margin: 0,
                padding: 0,
              }}
              key={index}
            >
              {(tempType === type[0] ||
                tempType === type[1] ||
                tempType === type[2]) && (
                <View
                  onClick={() => {
                    let d = text[index]["type"];
                    let check =
                      d === type[0]
                        ? type[1]
                        : d === type[1]
                        ? type[2]
                        : type[0];
                    let temp = [
                      ...text.slice(0, index),
                      { type: check, data: text[index]["data"] },
                      ...text.slice(index + 1),
                    ];

                    updateText(temp);
                  }}
                  style={{ cursor: "pointer", paddingTop: 3, paddingRight: 5 }}
                >
                  {tempType === type[0] && <RiCheckboxBlankLine />}
                  {tempType === type[1] && <RiCheckFill />}
                  {tempType === type[2] && <RiCheckDoubleFill />}
                </View>
              )}
              <textarea
                style={{
                  border: 0,
                  outline: "none",
                  backgroundColor: "lightblue",
                  flex: 1,
                  color: "white",
                  paddingLeft: 5,
                  fontSize: 16,
                  resize: "none",
                  overflowY: "hidden",
                  textDecoration:
                    tempType === type[1] ? "line-through" : "none",
                  fontWeight: tempType === type[4] ? 800 : 400,
                }}
                onFocus={() => {
                  updateCursorAtIndex(index);
                }}
                type={text}
                value={value}
                ref={cursorAtIndex === index ? reference : void 0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const temp = [
                      ...text.slice(0, index + 1),
                      { type: type[3], data: "" },
                      ...text.slice(index + 1),
                    ];
                    updateText(temp);
                    updateCursorAtIndex(index + 1);
                  } else if (e.key === "Backspace" && !text[index]["data"]) {
                    if (value.length < 1 && cursorAtIndex !== 0) {
                      let temp = [
                        ...text.slice(0, index),
                        ...text.slice(index + 1),
                      ];
                      updateCursorAtIndex(index - 1);
                      updateText(temp);
                    }
                  } else if (e.key === "Tab") {
                    e.preventDefault();
                    let temp = [
                      ...text.slice(0, index),
                      e.target.value.substring(0, e.target.selectionStart + 1) +
                        "  " +
                        e.target.value.substring(e.target.selectionStart + 1),
                      ...text.slice(index + 1),
                    ];
                    updateCursorAtIndex(index);
                    updateText(temp);
                  } else if (e.key === "ArrowDown") {
                    if (index !== text.length - 1)
                      updateCursorAtIndex(index + 1);
                  } else if (e.key === "ArrowUp") {
                    if (index !== 0) updateCursorAtIndex(index - 1);
                  }
                }}
                onChange={(e) => {
                  let temp = [
                    ...text.slice(0, index),
                    { type: text[index]["type"], data: e.target.value },
                    ...text.slice(index + 1),
                  ];
                  updateCursorAtIndex(index);
                  updateText(temp);
                }}
              />
            </div>
          );
        })}
      </View>

      {/* Actions for RCE starts here */}
      <View
        style={{
          // position: "absolute",
          bgColor: "lightWhite",
          // bottom: 0,
          // left: 0,
          // right: 0,
          // flex: 1,
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <View>
          <View
            style={{
              cursor: "pointer",
              padding: 5,
              paddingLeft: 0,
            }}
            onClick={() => {
              let temp = [
                ...text.slice(0, cursorAtIndex),
                {
                  type:
                    text[cursorAtIndex]["type"] === type[0] ? type[3] : type[0],
                  data: text[cursorAtIndex]["data"],
                },
                ...text.slice(cursorAtIndex + 1),
              ];

              updateText(temp);
            }}
          >
            <BsListCheck />
          </View>
          <View
            style={{
              cursor: "pointer",
              padding: 5,
              paddingLeft: 0,
            }}
            onClick={() => {
              let temp = [
                ...text.slice(0, cursorAtIndex),
                {
                  type: type[3],
                  data: text[cursorAtIndex]["data"],
                },
                ...text.slice(cursorAtIndex + 1),
              ];

              console.log("text -=-=>", temp);
              updateText(temp);
            }}
          >
            <BiText />
          </View>
          <View
            style={{
              cursor: "pointer",
              padding: 5,
              paddingLeft: 0,
            }}
            onClick={() => {
              let temp = [
                ...text.slice(0, cursorAtIndex),
                {
                  type: type[4],
                  data: text[cursorAtIndex]["data"],
                },
                ...text.slice(cursorAtIndex + 1),
              ];

              console.log("text -=-=>", temp);
              updateText(temp);
            }}
          >
            <BiBold />
          </View>
          <View
            style={{
              cursor: "pointer",
              padding: 5,
              paddingLeft: 0,
              paddingRight: 10,
            }}
            // onClick={() => {
            //   let temp = [
            //     ...text.slice(0, cursorAtIndex),
            //     {
            //       type:
            //         text[cursorAtIndex]["type"] === type[0] ? type[3] : type[0],
            //       data: text[cursorAtIndex]["data"],
            //     },
            //     ...text.slice(cursorAtIndex + 1),
            //   ];

            //   console.log("text -=-=>", temp);
            //   updateText(temp);
            // }}
          >
            <SiAudiomack />
          </View>

          <View
            style={{
              cursor: "pointer",
              padding: 5,
              paddingLeft: 0,
              paddingRight: 10,
            }}
            // onClick={() => {
            //   let temp = [
            //     ...text.slice(0, cursorAtIndex),
            //     {
            //       type:
            //         text[cursorAtIndex]["type"] === type[0] ? type[3] : type[0],
            //       data: text[cursorAtIndex]["data"],
            //     },
            //     ...text.slice(cursorAtIndex + 1),
            //   ];

            //   console.log("text -=-=>", temp);
            //   updateText(temp);
            // }}
          >
            <BiImageAdd />
          </View>
        </View>
        <View>
          <View
            style={{
              cursor: "pointer",
              padding: 5,
              paddingLeft: 0,
              paddingRight: 10,
              fontSize: 12,
              alignItems: "center",
            }}
          >
            Saved
          </View>
          <View
            style={{
              cursor: "pointer",
              padding: 5,
              paddingLeft: 0,
              paddingRight: 10,
            }}
            // onClick={() => {
            //   let temp = [
            //     ...text.slice(0, cursorAtIndex),
            //     {
            //       type:
            //         text[cursorAtIndex]["type"] === type[0] ? type[3] : type[0],
            //       data: text[cursorAtIndex]["data"],
            //     },
            //     ...text.slice(cursorAtIndex + 1),
            //   ];

            //   console.log("text -=-=>", temp);
            //   updateText(temp);
            // }}
          >
            <MdDelete />
          </View>
          <View
            style={{
              cursor: "pointer",
              padding: 5,
              paddingLeft: 0,
              paddingRight: 10,
            }}
            // onClick={() => {
            //   let temp = [
            //     ...text.slice(0, cursorAtIndex),
            //     {
            //       type:
            //         text[cursorAtIndex]["type"] === type[0] ? type[3] : type[0],
            //       data: text[cursorAtIndex]["data"],
            //     },
            //     ...text.slice(cursorAtIndex + 1),
            //   ];

            //   console.log("text -=-=>", temp);
            //   updateText(temp);
            // }}
          >
            <FiDownloadCloud />
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(RCE);
