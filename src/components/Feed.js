import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Posts from "./Posts/Posts";
import Albums from "./Albums/Albums";
import Users from "./Users/Users";
import Photos from "./Albums/Photos";

function Feed() {
  return (
    <Switch>
      <Route exact path="/users" component={Users} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/albums" component={Albums} />
      <Route exact path="/albums/:id?" component={Photos} />
      <Redirect to="/users" />
    </Switch>
  );
}

export default Feed;
