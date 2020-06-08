import express from "express";
import path from "path";
import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import App from "../src/App";
import configureStore from "../src/core/configureStore";

const PORT = process.env.PORT || 3003;

const app = express();

// serve contents from the build directory as static files
app.use(express.static(path.resolve(__dirname, "..", "/build")));

//This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
  // Create a new Redux store instance
  const store = configureStore();
  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState));
}
function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Hacker News</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/recipes/server-rendering/#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\\u003c"
          )}
        </script>
      </body>
    </html>
    `;
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
