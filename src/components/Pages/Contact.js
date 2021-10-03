import React from "react";
import Mailer from "../Mailer";
import { Redirect } from "react-router-dom";

export const Contact = () => {
  const user = JSON.parse(localStorage.getItem('token'));
  console.log(user);
  return (
    // <div>
    //  <Mailer />
    // </div>
    <div>
      {
        localStorage.getItem('token') ?
          <>

            {
              alert("You Still Logedin Please Logout!")
            }

            <Redirect to="/admin/addservice" />
          </>
          :
          <>
           <Mailer />

          </>
      }


    </div>
  );
};
export default Contact
