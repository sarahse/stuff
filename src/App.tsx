import React from "react";
import "./App.css";
import { useRoutes, A } from "hookrouter";
import Routes from "./router";
import NoPageFound from "./pages/noPageFound";

const App: React.FC = () => {
  const routeResult = useRoutes(Routes);
  return (
    <div className="App">
      <A href="/login">Login</A>
      <A href="/">Dashboard</A>
      {routeResult || <NoPageFound />}
    </div>
  );
};

export default App;
