import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import Employment from "./components/Employment.js";
import Services from "./components/Services.js";
import ServicesPage from "./components/ServicesPage.js";
import ServicesPagePlus from "./components/ServicesPagePlus.js";
import JoinUs from "./components/JoinUs.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/joinOurTeam">
            <CssBaseline>
              <Container maxWidth="xl" disableGutters>
                <JoinUs />
                <Footer />
              </Container>
            </CssBaseline>
          </Route>
          <Route path="/contact">
            <CssBaseline>
              <Container maxWidth="xl" disableGutters>
                <Contact />
                <Footer />
              </Container>
            </CssBaseline>
          </Route>
          <Route path="/about">
            <CssBaseline>
              <Container maxWidth="xl" disableGutters>
                <About />
                <Footer />
              </Container>
            </CssBaseline>
          </Route>
          <Route path="/services">
            <CssBaseline>
              <Container maxWidth="xl" disableGutters>
                <ServicesPage />
                <ServicesPagePlus />
                <Footer />
              </Container>
            </CssBaseline>
          </Route>
          <Route path="/">
            <CssBaseline>
              <Container maxWidth="xl" disableGutters>
                <Home />
                <Employment></Employment>
                <Footer></Footer>
              </Container>
            </CssBaseline>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
