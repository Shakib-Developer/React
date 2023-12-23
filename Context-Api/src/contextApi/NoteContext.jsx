import { createContext, useContext } from "react";
import { useState } from "react";

const valuText = createContext();

const NoteContext = (props) => {
  const [value, setValue] = useState({
    age: 65,
    name: "Ahammed",
  });
  return (
    <div>
      <valuText.Provider value={[value, setValue]}>
        {props.children}
      </valuText.Provider>
    </div>
  );
};

const useValue = () => useContext(valuText);

export { useValue, NoteContext };
