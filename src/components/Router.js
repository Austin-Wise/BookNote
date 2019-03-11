import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "../pages/app/App";
import NotFound from "../pages/notfound/NotFound";

const Router = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route component={NotFound} />
        </Switch>
    </HashRouter>
);

export default Router;
