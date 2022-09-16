
import React from 'react'

const Signup=()=>{
   
      
 
    //  };
    //     async function  signup()
    //     {
    //      let result = await axios.post("http://localhost:8000/api/register",user);
    //      setErrors('Registration Successful')
    //      setUser({name:"",email:"",password:""}) // To Clear all fields
  
    //      }  
      
     return(
             <div>
      <a className="hiddenanchor" id="signin"></a>

      <div className="login_wrapper">
        <div className="animate form login_form">
          <section className="login_content">
            <form id="login_form">
              <h1>
                <span className="display-5 text-success font-weight-bold">
                  My Login
                </span>
                <span className="display-5 text-info font-italic">
                  Experience
                </span>
              </h1>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  required={true}
                  name="firstname"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="lastName"
                  required={true}
                  name="lastName"
                />
              </div>
              <div>
                <input
                  type="number"
                  className="form-control"
                  placeholder="PhoneNumber"
                  required={true}
                  name="phonenumber"
                />
              </div>
              <div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required={true}
                  name="password"
                />

                <p style={{ color: "red" }}></p>
              </div>
              <div>
                <button type="submit" className="btn btn-info form-control">
                  Log in
                </button>
              </div>

              <div className="clearfix"></div>
              <div>
                <p>©2022 All Rights Reserved.</p>
              </div>
              <div className="separator"></div>
            </form>
          </section>
        </div>
      </div>
    </div>
     )


     }
export default Signup