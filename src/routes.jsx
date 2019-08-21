import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Groups from './pages/Groups';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/groups/:group" component={Groups} />
      </div>
  );
}

export default AppRouter;