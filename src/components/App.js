import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NavBar from "./modules/NavBar";
import HomePage from "./pages/HomePage";
import LocationIndexPage from "./pages/LocationIndexPage";
// import LoginPage from "./pages/LoginPage";
import LocationShowPage from "./pages/LocationShowPage";

class App extends Component {
  state = {
    locations: ["santiago", "valparaiso", "torres", "colchuagua"]
  };
  render() {
    const { locations } = this.state;

    return (
      <div>
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/locations/chile"
              render={props => {
                return <LocationIndexPage {...props} locations={locations} />;
              }}
            />
            <Route
              exact
              path="/locations/chile/:id"
              render={props => {
                return <LocationShowPage {...props} locations={locations} />;
                // component={LocationShowPage}
              }}
            />
            <Route
              exact
              path="/locations/chile/santiago"
              render={props => {
                return <LocationShowPage {...props} locations={locations} />;
              }}
            />
            {/* <Route exact path="/login" component={LoginPage} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
