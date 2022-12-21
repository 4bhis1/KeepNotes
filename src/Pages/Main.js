import React, { useState } from "react";
import Cards from "../Components/Cards";
import Displayer from "../Components/Displayer";
import Input from "../Components/Input";
import RCE from "../Components/ReachCodeEditor";
import RecordAudio from "../Components/Recorder";
import Nav from "./Nav";

const Main = () => {
  let data;

  // const func = async () => {
  //   console.log("will get trigered");
  //   await fetch("http://localhost:4000/tetsinghere", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     // We convert the React state to JSON and send it as the POST body
  //     body: JSON.stringify({ name: "Abhishek kumar", food: "Hakka noddles" }),
  //   });

  //   // console.log(">>>>>>", data);
  // };

  let data2;
  // const func2 = async () => {
  //   console.log(">>>>>> func2 ");
  //   data2 = await fetch("http://localhost:4000/tetsinghere");
  //   console.log(">>>>>>> data 2", data2);
  // };

  let list = [
    { done: false, text: "Abhishek" },
    { done: true, text: "Ankit" },
  ];

  return (
    <>
      {/* <Displayer /> */}
      {/* <RecordAudio /> */}
      <Nav />
      <Input />
      {/* <RCE /> */}

      {/* <div style={{ display: "flex" }}>
         <Cards
          title="something to add"
          color={"#c0c0c0"}
          isList={true}
          list={list}
        />

        <Cards
          title="something to remove"
          color={"light-blue"}
          isList={false}
          list={list}
          note={"hmmm ye bhi ho jayega"}
        /> 
      </div> */}
    </>
  );
};

export default Main;
