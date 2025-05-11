import useLogin  from "./hooks/useLogin";
import useLogout from "./hooks/useLogout";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import ProfileCard from "./components/ProfileCard";


const App = () => {
  const { login } = useLogin();

  const { user } = useContext(AuthContext);
console.log(user);


return (
  <div className="App">
    {user ? (
      <ProfileCard user={user} />
    ) : (
      <button className="btn login-btn" onClick={login}>
        Login With GitHub
      </button>
    )}
  </div>
);
};

export default App;


