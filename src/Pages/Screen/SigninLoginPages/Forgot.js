import React from "react";
import { useNavigate } from "react-router-dom";
import View from "../../../Components/View";

const Forgot = () => {
  const Navigate = useNavigate();

  return (
    <View style={{ bgColor: "blue", flex: 1 }}>
      <View style={{ flexDirection: "column" }}>
        <View>Login</View>
        <View>
          <input type="text" placeholder="Email" />
        </View>

        <View>Submit</View>
        <View>Or</View>
        <View>Login with Google</View>

        <View
          onClick={() => {
            Navigate("/signup");
          }}
        >
          Don't have account? Create One
        </View>

        <View
          onClick={() => {
            Navigate("/login");
          }}
        >
          Already have account? Login
        </View>
      </View>
    </View>
  );
};

export default Forgot;
