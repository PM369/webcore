import React from "react";
import About from "./About";
import Client from "./Client";
import Common from "./Common"
import Contact from "./Contact";
import Faq from "./Faq";
import ProductPricing from "./ProductPricing";
import Service from "./Service"
import { Redirect } from "react-router-dom";
import Technology from "./Technology";


export const Home = () => {
  // const history = useHistory();
  const user = JSON.parse(localStorage.getItem('token'));
  console.log(user);
  return (

    // <>
    //   <Common />
    //   <Service />
    //   <About />
    //   <Client />
    //   <ProductPricing />
    //   <Faq />
    //   <Contact />
    // </>

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
            <Common />
            <Service />
            <About />
            <Technology />
            <Client />
            <ProductPricing />
            <Faq />
            <Contact />
           

          </>
      }


    </div>
  );
};
