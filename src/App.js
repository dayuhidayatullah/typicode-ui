import "./App.css";
import { Provider } from "react-redux";
import store from "./appRedux/store";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Landing from "./containers/Landing";
import Home from "./containers/Home";
import Login from "./containers/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
function App() {
  return (
    <Provider store={store}>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" extact element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
