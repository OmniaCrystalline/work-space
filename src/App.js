/** @format */
import "./App.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router";

const LazyList = React.lazy(() => import("./components/List/List"));
const LazyLayout = React.lazy(() => import("./components/Layout/Layout"));
const LazyOrders = React.lazy(() => import("./components/Orders/Orders"));
const LazyArchive = React.lazy(() => import("./components/Archive/Archive"));
const LazyForm = React.lazy(() => import("./components/Add/Add"));


function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Suspense fallback={<div>Loading...</div>}><LazyLayout/></Suspense>}>
        <Route
          index
          path='/add'
          element={<Suspense fallback={<div>Loading...</div>}><LazyForm/></Suspense>}
        />
        <Route
          path='/edit'
          element={
            <Suspense fallback={<div>Loading....</div>}>
              <LazyList />
            </Suspense>
          }
        />
        <Route
          path='/orders'
          element={<Suspense fallback={<div>Loading...</div>}><LazyOrders/></Suspense>}
        />
        <Route
          path='/archive'
          element={<Suspense fallback={<div>Loading...</div>}><LazyArchive/></Suspense>}
        />
      </Route>
    </Routes>
  );
}

export default App;
