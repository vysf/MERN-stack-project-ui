import React from "react";
import { LoginBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="Login-Background" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Enter email" />
        <Gap width="" height={18} />
        <Input label="Password" placeholder="Enter password" />
        <Gap width="" height={50} />
        <Button title="Login" onClick={() => history.push("/")} />
        <Gap height={100} />
        <Link
          title="Not a member yet? Register"
          onClick={() => history.push("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
