import { useAuth } from "../component/auth.jsx";

const Home = () => {
  const [auth, setAuth] = useAuth();
  console.log(auth);
  return (
    <div>
      <h1>Home Page {auth}</h1>
    </div>
  );
};

export default Home;
