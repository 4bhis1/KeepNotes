import React, { useRef, useState } from "react";
import RCE from "../Pages/components/ReachCodeEditor";
import { BsCheck2Square } from "react-icons/bs";

const Input = ({ data }) => {
  let [showListNote, updateShowListNote] = useState({
    list: false,
    note: false,
  });

  let [textInList, updateTextInList] = useState({
    firstInputText: "",
    firstInputFocus: false,
    secondInputText: "",
    secondInputFocus: false,
  });

  let [textInNote, updateTextInNote] = useState({
    firstInputText: "",
    firstInputFocus: false,
    secondInputText: "",
    secondInputFocus: false,
  });

  let refObject = {
    firstInputInNote: useRef(null),
    firstInputInList: useRef(null),
    secondInputInNote: useRef(null),
    secondInputInList: useRef(null),
  };

  return (
    <div>
      {showListNote.note ? (
        showListNote.list ? (
          <div>List here</div>
        ) : (
          // Note here
          <div
            style={{
              display: "flex",
              backgroundColor: "aqua",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 800,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "lime",
              }}
            >
              <input
                type={"text"}
                placeholder={"title"}
                value={textInNote.firstInputText}
                ref={refObject.firstInputInNote}
                onFocus={() => {
                  console.log("focused", textInNote);
                  updateTextInNote({ ...textInNote, firstInputFocus: true });
                }}
                onBlur={() => {
                  updateTextInNote({ ...textInNote, firstInputFocus: false });
                }}
                onChange={(e) => {
                  updateTextInNote({
                    ...textInNote,
                    firstInputText: e.target.value,
                  });
                }}
                style={{ width: 700 }}
              />
              <RCE />
            </div>
          </div>
        )
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "blue",
          }}
        >
          <div
            style={{
              width: 800,
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input
              onClick={() => {
                updateShowListNote({ ...showListNote, note: true });
                // console.log("---<><><>",refObject.secondInputInNote)
                // refObject.secondInputInNote.current.focus()
              }}
              value={"Take a note..."}
              onFocus={() => {
                console.log("FOcused");
              }}
            />
            <div
              onClick={() => {
                updateShowListNote({ list: true, note: true });
              }}
              style={{ fontSize: 24, paddingLeft: 10 }}
            >
              <BsCheck2Square />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
