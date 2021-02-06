import React from "react";
import { RegisterBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import "./register.scss";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="register-background" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="Enter full name" />
        <Gap width="" height={18} />
        <Input label="Email" placeholder="Enter email" />
        <Gap width="" height={18} />
        <Input label="Password" placeholder="Enter password" />
        <Gap width="" height={50} />
        <Button title="Register" onClick={() => history.push("/login")} />
        <Gap height={100} />
        <Link title="Back to Login" onClick={() => history.push("/login")} />
      </div>
    </div>
  );
};

export default Register;
