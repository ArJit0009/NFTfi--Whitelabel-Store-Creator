import React from "react";
import { Router, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import { connect } from "react-redux";
import Main from "./modules/main/index";
import BaseComponent from "./modules/baseComponent";
import { history } from "./managers/history";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import BlogComponent from "./modules/screen/blog";
import Advancescreen from "./modules/screen/advancescreen";
import Generalscreen from "./modules/screen/generalscreen";

class Routes extends BaseComponent {
  componentDidMount() {}

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={history}>
          <Switch>
            <Route exact path={"/"} component={Main} />
            <Route exact path={"/blog"} component={BlogComponent} />
            <Route exact path={"/advancesetting"} component={Advancescreen} />
            <Route exact path={"/generalsetting"} component={Generalscreen} />
            <Redirect exact from="/generalsetting" to="/" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Routes);
