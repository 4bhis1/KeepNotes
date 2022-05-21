import React, { useState } from "react";
import Cards from "../Components/Cards";
import Input from "../Components/Input";
import Nav from "./Nav";

const Main = () => {
  let list = [
    { done: false, text: "Abhishek" },
    { done: true, text: "Ankit" },
  ];


  return (
    <>
      {/* <Nav /> */}

      <Input />
    
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
