import { useState } from 'react'
import NewMadlibForm from './NewMadlibForm'
import MadlibSentence from './MadlibSentence'

function Madlib() {
  const [madlib, setMadlib] = useState(false);

  const create = (noun: string, noun2: string, adj: string, color: string) => {
    const sentence = `There was a ${color} ${noun} who was loved by a ${adj} ${noun2}`;
    display(sentence)
    setMadlib(true)
  }

  const display = (sentence: string) => sentence;

  return (
    <div>
      <h1>Madlib!</h1>
      {madlib ? 
        <MadlibSentence displayMadlib={display}/>
        : <NewMadlibForm createMadlib={create} />
    }
    </div>
  )
}

export default Madlib;