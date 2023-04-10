import "./App.css";
import Main from "./Pages/Main";
import ColorMode from "./Theme/ColorMode";
import { useState } from "react";
import { Theme } from "./Context/Provider";

function App() {
  let [themeMode, changeTheme] = useState(
    !window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  let views = ["row", "col"];
  let [view, changeView] = useState(views[0]);
  console.log(">>", process.env.REACT_APP_SERVER_URL);
  return (
    <Theme.Provider
      value={{
        themeMode: themeMode,
        changeTheme: changeTheme,
        colorFunction: ColorMode,
        view,
        changeView,
      }}
    >
      <Main />
    </Theme.Provider>
  );
}

export default App;
