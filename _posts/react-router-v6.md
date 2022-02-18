---
title: "What's knew in React Router v6"
date: '2022-01-01'
description: 'React router v6 features'
---

React router version 6 is here with lots of improvements! React router now matches the URL against your route config to enable a dynamic layout mechanism. Your UI layouts will reflect segments of the URL allowing you to build a full user interface that maps to your URL. Here is what a typical route config will look like in react router v6:

```jsx
import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route
 } from "react-router-dom";

import { App } from "./App";
import { Home, Posts, NewPostForm} from "./routes";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="players" element={<Players />}>
          <Route index element={<PlayerStats />} />
          <Route path=":playerId" element={<Player />} />
          <Route path="new" element={<NewPlayerForm />} />
        </Route>
      </Route>
      <Route element={<PageLayout />}>
        <Route path="contact-us" element={<Contact />} />
        <Route path="/about" element={<Matches />} />
      </Route>
      <Route path="/privacy" element={<Teams />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
```
