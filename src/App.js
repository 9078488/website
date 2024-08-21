import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import LayOut from "./pages/Layout";
import SignIn from "./pages/SignIn";
import Faith from "./pages/Faith";
import NotFound from "./pages/NotFound";
import Crypto from "./pages/Crypto";


function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />} >
            <Route path="/faith" element={<Faith />} ></Route>
            <Route path="/crypto" element={<Crypto />} ></Route>
          </Route>
          <Route path="/signin" element={<SignIn />} ></Route>
          <Route path="*" element={<NotFound />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;