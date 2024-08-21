import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import LayOut from "./pages/Layout";
import SignIn from "./pages/SignIn";
import Faith from "./pages/Faith";
import NotFound from "./pages/NotFound";
import Crypto from "./pages/Crypto";
import Todo from "./pages/Todo";
import Relationship from "./pages/Relationship";


function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />} >
            <Route path="/faith" element={<Faith />} ></Route>
            <Route path="/crypto" element={<Crypto />} ></Route>
            <Route path="/relationship" element={<Relationship />} ></Route>
            <Route path="/todo" element={<Todo />} ></Route>
          </Route>
          <Route path="/signin" element={<SignIn />} ></Route>
          <Route path="*" element={<NotFound />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;