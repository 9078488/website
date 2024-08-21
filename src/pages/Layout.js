import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { useNavigate, Outlet  } from "react-router-dom";
import { useEffect } from "react";

function LayOut() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
      if(!accessToken) {
          navigate("/signin");
          return;
      }
  })

  return (
    <>
      <header>
        <ResponsiveAppBar />
      </header>
      <main>       
        <Outlet />
      </main>
    </>
  );
}

export default LayOut;