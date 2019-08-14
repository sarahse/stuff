import React from "react";
import { navigate } from "hookrouter";

const Login: React.FC = ({ props }: any) => {
  const loginUser = () => {
    // if user is logged in successfully
    navigate("/");
  };

  return (
    <form>
      <input type="name" />
      <input type="email" />
      <button onClick={loginUser}>Login</button>
    </form>
  );
};

export default Login;
