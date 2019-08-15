import React from "react";
import "./scss/app.scss";
import { useRoutes, A } from "hookrouter";
import Routes from "./router";
import NoPageFound from "./pages/noPageFound";

const App: React.FC = () => {
  const routeResult = useRoutes(Routes);
  return (
    <div className="app" id="app">
      <div id="header">
        <A className="app-link" href="/login">
          Login
        </A>
        <A className="app-link" href="/">
          Dashboard
        </A>
      </div>
      <div id="container">{routeResult || <NoPageFound />}</div>
      <div id="footer">
        <div className="credits">
          Background image by{" "}
          <a
            className="link-text"
            target="_blank"
            href="https://instagyou.online/user/jibarofoto"
            rel="noopener noreferrer"
          >
            Luis Quintero
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
