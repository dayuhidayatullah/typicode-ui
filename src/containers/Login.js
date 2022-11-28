import React, { useEffect, useState } from "react";
import { getDataUser } from "../appRedux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formValue, setFormValue] = useState({
    username: null,
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { error, isLogin } = useSelector((state) => state.user);
  console.info(error);
  const handleChangeForm = (key, value) => {
    setFormValue({ ...formValue, [key]: value });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(getDataUser({ ...formValue }));
    // console.info(e, "<<<< apasih");
  };
  useEffect(() => {
    if (window.localStorage.username) {
      navigate("/home");
    }
  }, [isLogin]);
  return (
    <div className="container">
      <div className="content-login">
        <p className="title-login">Login Page</p>
        {/* <div className="form-container"> */}
        <form className="form-container" onSubmit={(e) => handleSubmitForm(e)}>
          <input
            placeholder="username"
            className="form-item"
            onChange={(e) => handleChangeForm("username", e.target.value)}
            value={formValue.username}
          ></input>
          <input
            placeholder="password"
            className="form-item"
            onChange={(e) => handleChangeForm("username", e.target.value)}
            value={formValue.username}
            type="password"
          ></input>
          <button className="button-login-form">Login</button>
        </form>
        {error?.message && <p style={{ color: "#af2634" }}>{error?.message}</p>}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Login;
