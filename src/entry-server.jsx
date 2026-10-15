import React from "react";
import { renderToStaticMarkup, renderToString } from "react-dom/server";
import { HeadProvider } from "react-head";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { PUBLIC_PATHS } from "./routePaths";

export { PUBLIC_PATHS };

export function render(url) {
  const headTags = [];
  const appHtml = renderToString(
    <React.StrictMode>
      <HeadProvider headTags={headTags}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HeadProvider>
    </React.StrictMode>,
  );

  return {
    appHtml,
    headHtml: renderToStaticMarkup(headTags),
  };
}
