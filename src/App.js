import { AiOutlineLogout } from "react-icons/ai";
import RouteList from "./routes/RouteList";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const isLoggedIn = Cookies.get("logged_in");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("sign-in", { replace: true });
    }
  }, [isLoggedIn]);

  const logOutSession = () => {
    Cookies.remove("token");
    Cookies.remove("user_type");
    Cookies.remove("logged_in");
    navigate("/sign-in", { replace: true });
  };

  return (
    <div className="h-screen">
      <div className="p-4 border-2 drop-shadow-md flex justify-between items-center">
        <h1>Bike Lease Application</h1>
        <AiOutlineLogout
          onClick={() => logOutSession()}
          className={
            !isLoggedIn
              ? `invisible`
              : `-rotate-90 text-xl cursor-pointer
        hover:text-sky-500`
          }
        />
      </div>
      <RouteList />
    </div>
  );
}

export default App;
