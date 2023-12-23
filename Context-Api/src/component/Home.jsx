import { useValue } from "../contextApi/NoteContext";

const Home = () => {
  const [value, setValue] = useValue();
  return (
    <div>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(value)}</pre>
    </div>
  );
};

export default Home;
