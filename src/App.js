import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import LayOut from "./pages/Layout";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import CryptoStategy from "./pages/CryptoStategy";
import AccordionTemplate from "./components/AccordionTemplate";
import faithcontents from "./contents/faithContentsList";
import relationshipcontents from "./contents/relationshipContentList";
import toDoContentList from "./contents/toDoContentList";



function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />} >
            <Route path="/faith" element={<AccordionTemplate params={faithcontents} />} ></Route>
            <Route path="/crypto-strategy" element={<CryptoStategy />} ></Route>
            <Route path="/relationship" element={<AccordionTemplate params={relationshipcontents} />} ></Route>
            <Route path="/todo" element={<AccordionTemplate params={toDoContentList} />} ></Route>
          </Route>
          <Route path="/signin" element={<SignIn />} ></Route>
          <Route path="*" element={<NotFound />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;