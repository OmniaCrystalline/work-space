/** @format */
import "./App.css";
import { Route, Routes } from "react-router";
import { HookForm } from "./components/Add/Add";
import { List } from "./components/List/List";
import { Layout } from "./components/Layout/Layout";
import { Orders } from "./components/Orders/Orders";
import { Archive } from "./components/Archive/Archive";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index path='/add' element={<HookForm />} />
        <Route path='/edit' element={<List />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/archive' element={<Archive/>}/>
      </Route>
    </Routes>
  );
}

export default App;
