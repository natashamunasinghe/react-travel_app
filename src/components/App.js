import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NavBar from "./modules/NavBar";
import HomePage from "./pages/HomePage";
import LocationIndexPage from "./pages/LocationIndexPage";
import LoginPage from "./pages/LoginPage";
import LocationShowPage from "./pages/LocationShowPage";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/locations" component={LocationIndexPage} />
            {/* <Route exact path="/locations/:id" component={LocationShowPage} /> */}
            <Route exact path="/show" component={LocationShowPage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
