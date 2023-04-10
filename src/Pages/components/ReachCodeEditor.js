import React, { useEffect, useRef, useState } from "react";
import View from "../../Components/View";

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
import moment from "moment";

let pageIdGlobal = "63ae9bbd38508e1ac5f4211e";

const RCE = ({ pageId = pageIdGlobal, pageNote }) => {
  const types = ["do", "doing", "done", "txt", "bld", "mic", "img"];

  const [cursorAtIndex, updateCursorAtIndex] = useState(0);
  const [setIntervalRef, updateSetIntervalRef] = useState();
  let [text, updateText] = useState([{ types: types[3], data: "" }]);
  let [todoCompleteWidth, updateTodoCompleteWidth] = useState({
    doing: 0,
    done: 0,
    count: 0,
  });
  let [heading, updateHeading] = useState();

  const fetchData = async () => {
    const temp = await fetch(`http://localhost:5010/notes/${pageId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const temp2 = await temp.json();
    console.log(">>>> temp2", temp2);
    updateHeading(temp2["result"]["heading"]);
    updateText(temp2["result    return () => "]["note"]);
  };

  useEffect(() => {
    fetchData();

    return async () => {
      let data;
      let heading;

      updateHeading((tempdata) => {
        heading = tempdata;
        return tempdata;
      });

      updateText((tempdata) => {
        data = tempdata;
        return tempdata;
      });

      await fetch(`http://localhost:5010/notes/${pageId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          note: data,
          heading,
          pinned: false,
          background: "blue",
        }),
      });

      clearInterval(setIntervalRef);
    };
  }, []);

  useEffect(() => {
    reference.current.focus();

    let width = mainDivRef.current.offsetWidth;
    let do1 = 0,
      doing = 0,
      done = 0;
    for (let i of text) {
      if (i["types"] === types[0]) do1++;
      else if (i["types"] === types[1]) doing++;
      else if (i["types"] === types[2]) done++;
    }
    if (do1 || doing || done)
      updateTodoCompleteWidth({
        doing: (doing / (do1 + doing + done)) * width,
        done: (done / (do1 + doing + done)) * width,
        count: do1 + doing + done,
      });
  }, [cursorAtIndex, text]);

  // console.log(">>> nice", todoCompleteWidth);

  let reference = useRef(null);
  let mainDivRef = useRef(null);
  useEffect(() => {
    reference.current.style.height = "0px";
    const scrollHeight = reference.current.scrollHeight;
    reference.current.style.height = scrollHeight + "px";
  }, [text]);

  let pingServerAfter30Sec = () => {
    return setInterval(async () => {
      let data;
      let heading;

      updateHeading((tempdata) => {
        heading = tempdata;
        return tempdata;
      });

      updateText((tempdata) => {
        data = tempdata;
        return tempdata;
      });

      await fetch(`http://localhost:5010/notes/${pageId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          note: data,
          heading,
          pinned: false,
          background: "blue",
        }),
      });
    }, 600);
  };

  useEffect(() => {
    if (!setIntervalRef) {
      updateSetIntervalRef(pingServerAfter30Sec());
    }
    return () => clearInterval(setIntervalRef);
  }, []);

  return (
    <>
      {/* Header of do doing done */}
      {!!todoCompleteWidth.count && (
        <View
          style={{
            // flex: 1,
            height: 5,
            // position: "absolute",
            // top: 0,
            // left: 0,
            // right: 0,
            borderRadius: 10,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            overflow: "hidden",
          }}
        >
          <View
            style={{ bgColor: "green", width: todoCompleteWidth.done || 0 }}
          />
          <View
            style={{ bgColor: "yellow", width: todoCompleteWidth.doing || 0 }}
          />
        </View>
      )}

      <View
        style={{
          height: 400,
          width: 400,
          bgColor: "#000000",
          position: "relative",
          flexDirection: "column",
          // display: "flex",
          overflow: "auto",
          ...(!todoCompleteWidth.count
            ? {
                borderRadius: 10,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }
            : {}),
          // marginTop: 10,
          // marginHorizontal: 5,
        }}
        reference={mainDivRef}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <View style={{ display: "block", flex: 1, margin: 10 }}>
          <View>
            <textarea
              style={{
                border: 0,
                outline: "none",
                backgroundColor: "black",
                color: "white",
                paddingLeft: 5,
                fontSize: 18,
                resize: "none",
                flex: 1,
                overflowY: "hidden",
                marginBottom: 10,
                fontWeight: 600,
                // height: 20,
              }}
              placeholder={"Title..."}
              value={heading}
              onChange={(e) => {
                updateHeading(e.target.value);
              }}
            />
          </View>
          {text.map((val, index) => {
            let value = val.data;
            let tempType = val.types;
            return (
              <View
                style={{
                  // backgroundColor: "lightblue",
                  margin: 0,
                  padding: 0,
                }}
                key={index}
              >
                {(tempType === types[0] ||
                  tempType === types[1] ||
                  tempType === types[2]) && (
                  <View
                    onClick={() => {
                      let d = text[index]["types"];
                      let check =
                        d === types[0]
                          ? types[1]
                          : d === types[1]
                          ? types[2]
                          : types[0];
                      let temp = [
                        ...text.slice(0, index),
                        { types: check, data: text[index]["data"] },
                        ...text.slice(index + 1),
                      ];

                      updateText(temp);
                    }}
                    style={{
                      cursor: "pointer",
                      paddingTop: 3,
                      paddingRight: 5,
                    }}
                  >
                    {tempType === types[0] && (
                      <RiCheckboxBlankLine style={{ color: "white" }} />
                    )}
                    {tempType === types[1] && (
                      <RiCheckFill style={{ color: "white" }} />
                    )}
                    {tempType === types[2] && (
                      <RiCheckDoubleFill style={{ color: "white" }} />
                    )}
                  </View>
                )}
                <textarea
                  style={{
                    border: 0,
                    outline: "none",
                    backgroundColor: "black",
                    flex: 1,
                    color: "white",
                    paddingLeft: 5,
                    fontSize: 16,
                    resize: "none",
                    overflowY: "hidden",
                    textDecoration:
                      tempType === types[1] ? "line-through" : "none",
                    fontWeight: tempType === types[4] ? 800 : 400,
                  }}
                  placeholder={
                    text.length === 1 ? "Write somwthing here..." : ""
                  }
                  onFocus={() => {
                    updateCursorAtIndex(index);
                  }}
                  types={text}
                  value={value}
                  ref={cursorAtIndex === index ? reference : void 0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      const temp = [
                        ...text.slice(0, index + 1),
                        { types: types[3], data: "" },
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
                        e.target.value.substring(
                          0,
                          e.target.selectionStart + 1
                        ) +
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
                      { types: text[index]["types"], data: e.target.value },
                      ...text.slice(index + 1),
                    ];
                    updateCursorAtIndex(index);
                    updateText(temp);
                  }}
                />
              </View>
            );
          })}
        </View>

        {/* Actions for RCE starts here */}
      </View>

      {/* actions starts here */}
      <View
        style={{
          // position: "absolute",
          bgColor: "lightBlack",
          // bottom: 0,
          // left: 0,
          // right: 0,
          // flex: 1,
          justifyContent: "space-between",
          paddingHorizontal: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
        onClick={(e) => {
          e.stopPropagation();
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
              console.log("Text 98 1", text);
              let temp = [
                ...text.slice(0, cursorAtIndex),
                {
                  types:
                    text[cursorAtIndex]["types"] === types[0]
                      ? types[3]
                      : types[0],
                  data: text[cursorAtIndex]["data"],
                },
                ...text.slice(cursorAtIndex + 1),
              ];
              console.log(
                "\n@@@ 98  file: ReachCodeEditor.js:390  temp:",
                temp
              );

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
                  types: types[3],
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
                  types: types[4],
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
            //       types:
            //         text[cursorAtIndex]["types"] === types[0] ? types[3] : types[0],
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
            //       types:
            //         text[cursorAtIndex]["types"] === types[0] ? types[3] : types[0],
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
            //       types:
            //         text[cursorAtIndex]["types"] === types[0] ? types[3] : types[0],
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
            //       types:
            //         text[cursorAtIndex]["types"] === types[0] ? types[3] : types[0],
            //       data: text[cursorAtIndex]["data"],
            //     },
            //     ...text.slice(cursorAtIndex + 1),
            //   ];

            //   console.log("text -=-=>", temp);
            //   updateText(temp);
            // }}

            onClick={() => {
              console.log("chanes", JSON.stringify(text));
            }}
          >
            <FiDownloadCloud />
          </View>
        </View>
      </View>
    </>
  );
};

export default React.memo(RCE);

{
  /* <Modal /> */
}
