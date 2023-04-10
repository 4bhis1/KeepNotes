import React from "react";
import { useNavigate } from "react-router-dom";
import View from "../../../Components/View";

const Signup = () => {
  const Navigate = useNavigate()
  return (
    <View style={{ bgColor: "blue", flex: 1 }}>
      <View style={{ flexDirection: "column" }}>
        <View>Signin</View>
        <View>
          <input type="text" placeholder="Email" />
        </View>
        <View>
          <input type="text" placeholder="Password" />
        </View>
        <View>Signin Button</View>
        <View>Or</View>
        <View>Signin with Google</View>

        <View onClick={()=>{
          Navigate("/login")
        }}>Already have account? Login</View>
      </View>
    </View>
  );
};

export default Signup;
