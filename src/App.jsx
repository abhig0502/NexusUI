import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Profile from "./Profile";
import Login from "./Login";
function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          {/* <Route path="/" element={<div>base page</div>}/> */}
          {/* <Route path="/test" element={<div>test page</div>}/> */}
          {/* <Route path="/login" element={<div className="text-white text-3xl">login page</div>}/> */}

          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
