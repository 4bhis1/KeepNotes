import React, { useEffect, useRef, useState } from "react";
import RCE from "./ReachCodeEditor";
const Input = () => {
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

  useEffect(() => {}, []);

  console.log(
    // "--<><><>",
    // showListNote,
    // "text in list",
    // textInList,
    // refObject,
    "text in note",
    textInNote
  );

  return (
    <div>
      {showListNote.note ? (
        showListNote.list ? (
          <div>List here</div>
        ) : (
          // Note here
          <div style={{ flexDirection: "column", display: "flex" }}>
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
            />
            <RCE />
          </div>
        )
      ) : (
        <div style={{ display: "flex" }}>
          <input
            onClick={() => {
              updateShowListNote({ ...showListNote, note: true });
            }}
            value={"Take a note..."}
          />
          <div
            onClick={() => {
              updateShowListNote({ list: true, note: true });
            }}
          >
            Checkbox
          </div>
        </div>
      )}
    </div>
  );

  //   let [show, updateShow] = useState(false);
  //   let [showList, updateShowList] = useState(false);

  //   let [inputInListText, updateInputInListText] = useState("");
  //   let [inputInNoteText, updateInputInNoteText] = useState("");

  //   let inputInListRef = useRef(null);

  //   useEffect(() => {
  //     if (showList) {
  //       console.log(inputInListRef.current.isF);
  //       inputInListRef.current.focus();
  //     }
  //   }, [showList]);

  //   //   console.log("--<><><><><", show, showList);
  //   return (
  //     <div>
  //       {show ? (
  //         showList ? (
  //           <div>
  //             <input
  //               type={"text"}
  //               ref={inputInListRef}
  //               onBlur={() => {
  //                 updateShow(false);
  //                 updateShowList(false);
  //               }}
  //               value={inputInListText}
  //               onChange={(e) => {
  //                 updateInputInListText(e.target.value);
  //               }}
  //             />
  //             <div>Code for showing extra Checkbox</div>
  //           </div>
  //         ) : (
  //           <div style={{ flexDirection: "column", display: "flex" }}>
  //   <input
  //     type={"text"}
  //     ref={inputInListRef}
  //     onBlur={() => {
  //       updateShow(false);
  //       updateShowList(false);
  //     }}
  //     value={inputInNoteText}
  //     onChange={(e) => {
  //       updateInputInNoteText(e.target.value);
  //     }}
  //   />
  //   <textarea />
  //           </div>
  //         )
  //       ) : (
  //         <div style={{ display: "flex" }}>
  //           <input
  //             type={"text"}
  //             onFocus={() => {
  //               updateShow(true);
  //             }}
  //             onBlur={() => {
  //               updateShow(false);
  //             }}
  //             value="Take a note..."
  //           />
  //           <div
  //             onClick={() => {
  //               updateShowList(true);
  //               updateShow(true);
  //             }}
  //           >
  //             List
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
};

export default Input;
