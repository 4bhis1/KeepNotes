import React, { useEffect, useRef, useState } from "react";

import {BsCheck2Square} from "react-icons/bs"

const Input = ({data}) => {

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

  useEffect(()=>{
    if(!textInNote.firstInputFocus && !textInNote.secondInputFocus){
      console.log("tirggered",textInNote.firstInputFocus,textInNote.secondInputFocus)

      if (textInNote.firstInputText || textInNote.secondInputText){
      data.push({
        title : textInNote.firstInputText,
        pinned : false,
        color : "#c0c0c0",
        backgroundImage : "",
        note : true,
        isList : false,
        list : [ {done : "" , text : ""}]
      })
    }
      textInNote.firstInputText=""
      textInNote.secondInputText=""
      updateShowListNote({list : false, note : false})

      console.log(
        data
      );
    
    }
  },[textInNote.firstInputFocus,textInNote.secondInputFocus])


  return (
    <div>
      {showListNote.note ? (
        showListNote.list ? (
          <div>List here</div>
        ) : (
          // Note here
          <div style={{  display: "flex", backgroundColor : 'aqua', justifyContent: 'center'}}>
            <div style={{ width : 800 , display : 'flex', flexDirection: "column", alignItems : 'center', backgroundColor : 'lime'}}>
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
              style={{width : 700}}
            />
            <textarea
              placeholder="body..."
              ref={refObject.secondInputInNote}
              onFocus={() => {
                updateTextInNote({ ...textInNote, secondInputFocus: true });
              }}
              onBlur={() => {
                updateTextInNote({ ...textInNote, secondInputFocus: false });
              }}
              onChange={(e) => {
                updateTextInNote({
                  ...textInNote,
                  secondInputText: e.target.value,
                });
              }}
              style={{width:700}}
            />
            
            </div>
          </div>
        )
      ) : (
        <div style={{ display: "flex", alignItems : 'center', justifyContent : 'center', backgroundColor : 'blue',  }}>
          <div style={{width : 800, backgroundColor : 'white', display :'flex', justifyContent : 'center'}}>
          <input
            onClick={() => {
              updateShowListNote({ ...showListNote, note: true });
              // console.log("---<><><>",refObject.secondInputInNote)
              // refObject.secondInputInNote.current.focus()
              
            }}
            value={"Take a note..."}
            onFocus={()=>{
              console.log("FOcused")
            }}
          />
          <div
            onClick={() => {
              updateShowListNote({ list: true, note: true });
            }}
            style={{fontSize : 24, paddingLeft : 10}}
          >
            < BsCheck2Square />
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
