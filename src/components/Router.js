import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../pages/app/App";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
