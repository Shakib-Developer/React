import React from "react";
import { useValue } from "../contextApi/NoteContext";

const About = () => {
  const [value, setValue] = useValue();
  return (
    <div>
      <h1>About Page {JSON.stringify(value.name)}</h1>
    </div>
  );
};

export default About;
