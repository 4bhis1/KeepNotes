import React, { useContext, useState } from "react";
import Cards from "../Components/Cards";
import Input from "../Components/Input";
import { Theme } from "../Context/Provider";
import { data } from "../Data/data";
import { ColorForCards, RandomColor } from "../Theme/Cards/ColorForCards";
import Nav from "./Nav";

const Main = () => {

  let {themeMode, changeTheme, colorFunction, view , changeView} = useContext(Theme)


  return (
    <>
      <Nav />

      <Input data={data} />

      {/* <Demo /> */}

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
