import React, { useContext, useEffect, useState } from "react";
import Cards from "../Components/Cards";
import Displayer from "../Components/Displayer";
import Input from "../Components/Input";
import Modal from "../Components/Modal";
import RCE from "./components/ReachCodeEditor";
import RecordAudio from "../Components/Recorder";
import View from "../Components/View";
// import Habits from "./Habits";
import LeftTaskNav from "./LeftTaskNav";
import Nav from "./Nav";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Notes from "./Screen/Notes";
import Login from "./Screen/SigninLoginPages/Login";
import Signup from "./Screen/SigninLoginPages/Signup";
import LeftSectionImage from "./Screen/LeftSectionImage";
import Forgot from "./Screen/SigninLoginPages/Forgot";
import OTP from "./Screen/SigninLoginPages/OTP";
import Habits from "./Screen/Habits/Habits";

const Main = () => {
  let login = true;

  return (
    // <View>
    //   <LeftTaskNav />
    //   <View style={{ bgColor: "green", flex: 1, flexDirection: "column" }}>
    //     <Nav />
    //     <View style={{ flex: 1 }}>
    //       <Habits />
    //     </View>
    //   </View>
    // </View>

    <Router>
      {!login ? (
        <View>
          <LeftSectionImage />
          <Routes>
            <Route exact path="/" element={<Navigate to={"/login"} />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/forgot-password" element={<Forgot />} />
            <Route exact path="/confirm-otp" element={<OTP />} />
          </Routes>
        </View>
      ) : (
        <View style={{ overflow: "hidden" }}>
          <LeftTaskNav />
          <View style={{ bgColor: "green", flex: 1, flexDirection: "column", height: "100vh" }}>
            <Nav />
            <View style={{ flex: 1, overflow: "hidden" }}>
              <Routes>
                <Route exact path="/" element={<Navigate to={"/notes"} />} />
                <Route exact path="/notes" element={<Notes />} />
                <Route exact path="/habits" element={<Habits />} />
                <Route exact path="/whiteBoard" element={<Habits />} />
                <Route exact path="/reminders" element={<Habits />} />
                <Route exact path="/fav" element={<Habits />} />
                <Route exact path="/trash" element={<Habits />} />
                <Route exact path="/moneyManage" element={<Habits />} />
                <Route exact path="/library" element={<Habits />} />
                {/* <Route exact path="/anime" element={<FisrtScreen />} /> */}
                {/* 
                <Route exact path="/movies/:movieId" element={<MovieWatch />} />
                <Route exact path="/series/:seriesId" element={<Main />} />
                <Route exact path="/anime/watch" element={<Main />} /> 
              */}
              </Routes>
            </View>
          </View>
        </View>
      )}
    </Router>
    // <>
    //   {/* <Displayer />
    //   <RecordAudio />
    //   <Nav />
    //   <Input /> */}
    //   <RCE />

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
