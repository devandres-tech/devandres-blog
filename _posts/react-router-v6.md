---
title: "What's knew in React Router v6"
date: '2022-01-01'
description: 'React router v6 features'
---

React router version 6 is here with lots of improvements! React router now matches the URL against your route config to enable a dynamic layout mechanism. Your UI layouts will reflect segments of the URL allowing you to build a full user interface that maps to your URL.

# Route Configuration

Here's a a what a typical route configuration will look like compared to previous versions:

```jsx
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { App } from './App'
import { PageLayout, NewPlayerForm, Player, PlayerStats } from './components'
import {
  Home,
  Players,
  Teams,
  Matches,
  Contact,
  NotFound
} from './routes'

const rootElement = document.getElementById('root')
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='players' element={<Players />}>
          <Route index element={<PlayerStats />} />
          <Route path=':playerId' element={<Player />} />
          <Route path='new' element={<NewPlayerForm />} />
        </Route>
      </Route>
      <Route element={<PageLayout />}>
        <Route path='/teams' element={<Teams />} />
        <Route path='/matches' element={<Matches />} />
      </Route>
      <Route path='/contact-us' element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  rootElement
)
```

Now we are required to wrap our routes in a `<BrowserRouter />` component. We also have the ability to nest routes. In previous versions of react router route configuration was based on ordering and for certain routes you had to add the `exact` prop. In v6 react router will pick the most specific route for you without doing any of that. For example, the URL `/players/new` will match these two routes:

```jsx
<Route path="players/:playerId" element={<Player />} />
<Route path="players/new" element={<Player />} />
```

In this case, `/players/new` is a more specific match than `/players/:playerId` so it will render the `<NewPlayerForm />` component. Notice that the route `/players/new` sits below the route `players/:playerId` so ordering is not taken into account.

# Nested Routes

Nested routes are probably one of the most important features of react router v6. Nested routes
allow for dynamic layouts, so no need to worry about creating complex layout code.

When routes are nested so will their paths (child inheriting the parent). Following our previous example, the defined paths are:

- `"/"`
- `"/players"`
- `"/players/new"`
- `"/players/:playerId"`
- `"/teams"`
- `"/matches"`
- `"/contact-us"`
