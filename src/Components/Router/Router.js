import { Route } from "wouter";
import MainContent from "../MainContent/MainContent";
import Dashboard from "../Dashboard/Dashboard";
const Router = () => (
  <>
    <Route path="/">{<MainContent />}</Route>
    <Route path="/dashboard">{<Dashboard />}</Route>
  </>
);

export default Router;
