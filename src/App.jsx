import { BrowserRouter, Route, Routes } from "react-router-dom";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Body from "./components/Body";
import Profile from "./components/Profile"
import Login from "./components/Login";
import Feed from "./components/Feed";
function App() {
  return (
    <>
      <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          {/* <Route path="/" element={<div>base page</div>}/> */}
          {/* <Route path="/test" element={<div>test page</div>}/> */}
          {/* <Route path="/login" element={<div className="text-white text-3xl">login page</div>}/> */}

          <Route path="/" element={<Body />}>
          <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>

      </Provider>

    </>
  );
}

export default App;
