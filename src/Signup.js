import React, { useState } from "react";
import { postData } from "./Data";
const Signup = () => {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const registerUser = (e) => {
    e.preventDefault(e);
    const frmData = new FormData(document.getElementById("frmSaveUser"));
    postData(frmData, "save_registered_user")
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form"  id="frmSaveUser" onSubmit={registerUser}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            <div className="text-center">
              Already have an account?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>First Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter first name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter last name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Phone number</label>
              <input
                type="Phone number"
                className="form-control mt-1"
                placeholder="Enter Phone number"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Dont have an account?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign Up
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Phone Number</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="e.g 07..."
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Signup;
