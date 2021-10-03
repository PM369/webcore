import "./App.css";
 import NavBar from "./components/NavBar";
import ScrollButton from "./components/ScrollButton"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import ProductPricing from "../src/components/Pages/ProductPricing"
import Service from "../src/components/Pages/Service"
import { Contact } from "./components/Pages/Contact";
import Login from "./components/Admin/Login";
import Addservice from "./components/Admin/Addservice";
import Addtechnology from "./components/Admin/Addtechnology";
import Addprice from "./components/Admin/Addprice";
import Servicelist from "./components/Admin/Servicelist";
import UpdateServicelist from "./components/Admin/UpdateServicelist";
import Wave from 'react-wavify';
import Footer from "../src/components/Footer"
import Whatsapp from "./components/Whatsapp";
import Protected from './Protected'
// import ScrollToTop from "./components/ScrollToTop";
// import ScrollRestoration from 'react-scroll-restoration'


function App() {
  return (
  
    <Router>
      {/* <ScrollRestoration /> */}
        <NavBar />
        <Wave className="wave"
          fill='#F6EEE5'
          paused={false}
          options={{
            height: 80,
            amplitude: 40,
            speed: 0.20,
            points: 4
          }}

        />

        <div className="pages">
          <Switch>
            {/* <ScrollToTop /> */}
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/pricing" exact component={ProductPricing} />
            <Route path="/service" exact component={Service} />
            <Route path="/contact" exact component={Contact} />
          <Route path="/admin/login" exact component={Login} />
          {/* <Route path="/admin/addprice" exact component={Addprice} /> */}
          <Route path="/admin/addservice">
            <Protected exact Cmp={Addservice} />
          </Route>
          <Route path="/admin/addtech">
            <Protected exact Cmp={Addtechnology} />
          </Route>
          <Route path="/admin/addprice">
            <Protected exact Cmp={Addprice} />
          </Route>
          <Route path="/admin/servicelist">
            <Protected exact Cmp={Servicelist} />
          </Route>
          <Route path="/admin/updateservicelist/:id">
            <Protected exact Cmp={UpdateServicelist} />
          </Route>
            <Redirect to="/" />
          </Switch>
          <ScrollButton />
          <Footer />
          <Whatsapp />
        </div>
    </Router>

  
  );
}

export default App;
