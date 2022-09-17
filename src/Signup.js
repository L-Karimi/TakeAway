import { default as Modal }  from "./Modal";
import React, { useState } from "react";
import { postData } from "./Data";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  let [authMode, setAuthMode] = useState("signin");
  const [messageModal, setIsMessageModal] = useState(false);
  const [response, setResponse] = useState(false);
  const navigate = useNavigate();

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const registerUser = (e) => {
    e.preventDefault(e);
    const frmData = new FormData(document.getElementById("frmSaveUser"));
    postData(frmData, "save_registered_user")
      .then((data) => {
        console.log(data);
        setResponse(["User is registered successfully!"]);
        setIsMessageModal(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginUser = (e) => {
    e.preventDefault(e);
    const frmData = new FormData(document.getElementById("frmLoginUser"));
    postData(frmData, "login_registered_user")
      .then((data) => {
        console.log(data);
        if (data.user.length !== 0) {
          saveDataInStorage(data);
        } else {
          setResponse(["Sorry, password or phone Number is incorrect!"]);
          setIsMessageModal(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const saveDataInStorage = (data) => {
    if (typeof Storage !== "undefined") {
      localStorage.setItem("first_name", data.user[0].first_name);
      localStorage.setItem("last_name", data.user[0].last_name);
      localStorage.setItem("phone_number", data.user[0].phone_number);
      navigate('/Profile')

    } else {
      setResponse(["Sorry, something went wrong, please contact Admin"])
    }
  }
  //close message modal
  const closeMessageModal = () => {
    setIsMessageModal(false);
    setTimeout(function () {
      // window.location.replace("/manage-user");
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
                name="first_name"
                className="form-control mt-1"
                placeholder="Enter first name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"

                className="form-control mt-1"
                placeholder="Enter last name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Phone number</label>
              <input
                type="Phone number"
                name="phone_number"
                className="form-control mt-1"
                placeholder="Enter Phone number"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
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
      <form className="Auth-form" id="frmLoginUser" onSubmit={loginUser}>
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
              name="phone_number"

            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" >
              Submit
            </button>
          </div>
        </div>
      </form>
      <Modal
        modalIsOpen={messageModal}
        closeModal={closeMessageModal}
        background="#0047AB"
        body={<p className="text-white font-weight-bold h4">{response}</p>}
      />
    </div>
  );
};
export default Signup;
