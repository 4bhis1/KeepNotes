import React, { useContext, useEffect, useState } from "react";
import Cards from "../Components/Cards";
import Displayer from "../Components/Displayer";
import Input from "../Components/Input";
import Modal from "../Components/Modal";
import RCE from "../Components/ReachCodeEditor";
import RecordAudio from "../Components/Recorder";
import View from "../Components/View";
import LeftTaskNav from "./LeftTaskNav";
import Nav from "./Nav";

let userId = "63ae74ab20820f243525ca23";

const Main = () => {
  let [pages, updatePages] = useState();

  let [pageId, updatePageId] = useState();

  const dataUpdate = async () => {
    const temp = await fetch("http://localhost:5010/cn/getAllNotes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });

    const temp2 = await temp.json();
    console.log("data is here", temp2);

    updatePages(temp2["result"]);
  };

  useEffect(() => {
    dataUpdate();
  }, [pageId]);

  return (
    <View>
      <LeftTaskNav />
      <View style={{ bgColor: "green", flex: 1, flexDirection: "column" }}>
        <Nav />
        <View style={{ flex: 1 }}>

        </View>
      </View>
    </View>
    // <>
    //   {/* <Displayer />
    //   <RecordAudio />
    //   <Nav />
    //   <Input /> */}
    //   {/* <RCE /> */}

    //   {pageId && (
    //     <Modal
    //       onClose={() => {
    //         updatePageId();
    //       }}
    //     >
    //       <RCE pageId={pageId} />
    //     </Modal>
    //   )}

    //   <View
    //     style={{
    //       bgColor: "lightyellow",
    //       flexWrap: "wrap",
    //       padding: 10,
    //     }}
    //   >
    //     {pages ? (
    //       pages.map((value, index) => {
    //         const { _id, updatedon, pinned, background, heading, note } = value;

    //         return (
    //           <View
    //             style={{
    //               margin: 10,
    //               bgColor: "yellow",
    //               padding: 10,
    //               borderRadius: 10,
    //               cursor: "pointer",
    //               flexDirection: "column",
    //             }}
    //             key={`notes${index}`}
    //             onClick={() => {
    //               updatePageId(_id);
    //             }}
    //           >
    //             <View>{heading ? <View>{heading}</View> : void 0}</View>
    //             <View style={{ flexDirection: "column" }}>
    //               {note &&
    //                 note.map(({ data }, index) => (
    //                   <View key={`page${index}`}>{data}</View>
    //                 ))}
    //             </View>
    //           </View>
    //         );
    //       })
    //     ) : (
    //       <View>No data</View>
    //     )}
    //   </View>

    //   <View
    //     onClick={async () => {
    //       const temp = await fetch("http://localhost:5010/cn/notes", {
    //         method: "POST",
    //         headers: {
    //           Accept: "application/json",
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           createdBy: userId,
    //           note: [{ types: "", data: "" }],
    //         }),
    //       });

    //       const temp2 = await temp.json();

    //       console.log("temp2", temp2["result"]);
    //       updatePageId(temp2["result"]);
    //     }}
    //   >
    //     Clich here for new
    //   </View>
    // </>
  );
};

export default Main;
