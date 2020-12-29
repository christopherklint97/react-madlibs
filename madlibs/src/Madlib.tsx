import React, { useState } from "react";
import NewMadlibForm, { MadlibProps } from "./NewMadlibForm";

function Madlib() {
  const [madlib, setMadlib] = useState(false);
  const [sentence, setSentence] = useState("");

  const create = (newMadlib: MadlibProps) => {
    setMadlib(true);
    setSentence(
      `There was a ${newMadlib.color} ${newMadlib.noun} who was loved by a ${newMadlib.adj} ${newMadlib.noun2}.`
    );
  };

  const restart = (evt: React.MouseEvent) => {
    setMadlib(false);
  };

  return (
    <div>
      <h1>Madlib!</h1>
      {madlib ? (
        <div>
          <h2>{sentence}</h2>
          <button onClick={restart}>Restart</button>
        </div>
      ) : (
        <NewMadlibForm createMadlib={create} />
      )}
    </div>
  );
}

export default Madlib;
