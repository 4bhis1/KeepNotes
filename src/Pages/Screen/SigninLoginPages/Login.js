import React from "react";
import { useNavigate } from "react-router-dom";
import View from "../../../Components/View";

const Login = () => {
  const Navigate = useNavigate();

  return (
    <View style={{ bgColor: "blue", flex: 1 }}>
      <View style={{ flexDirection: "column" }}>
        <View>Login</View>
        <View>
          <input type="text" placeholder="Email" />
        </View>
        <View>
          <input type="text" placeholder="Password" />
        </View>
        <View
          onClick={() => {
            Navigate("/forgot-password");
          }}
        >
          Forgot Password
        </View>
        <View>Login Button</View>
        <View>Or</View>
        <View>Login with Google</View>

        <View
          onClick={() => {
            Navigate("/signup");
          }}
        >
          Don't have account? Create One
        </View>
      </View>
    </View>
  );
};

export default Login;
