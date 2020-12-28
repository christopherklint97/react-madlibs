/* eslint-disable no-empty-pattern */
import React, { useState } from 'react'

interface NewMadlibFormProps {
  createMadlib: ({ }) => void;
}

function NewMadlibForm({ createMadlib }: NewMadlibFormProps) {
  const [noun, setNoun] = useState('');
  const [noun2, setNoun2] = useState('');
  const [adj, setAdj] = useState('');
  const [color, setColor] = useState('');

  const handleNounChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNoun(evt.target.value);
  }

  const handleNoun2Change = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNoun2(evt.target.value);
  }

  const handleAdjChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setAdj(evt.target.value);
  }

  const handleColorChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setColor(evt.target.value);
  }

  const gatherInput = createMadlib ? (evt: React.FormEvent) => {
    evt.preventDefault();
    createMadlib({ noun, noun2, adj, color });
    setNoun('');
    setNoun2('');
    setAdj('');
    setColor('');
  } : undefined;

  return (
    <div>
      <form onSubmit={gatherInput}>
        <input id='noun' name='noun' type='text' onChange={handleNounChange} value={noun}/>
        <input id='noun2' name='noun2' type='text' onChange={handleNoun2Change} value={noun2}/>
        <input id='adj' name='adj' type='text' onChange={handleAdjChange} value={adj}/>
        <input id='color' name='color' type='text' onChange={handleColorChange} value={color} />
        <button type="submit">Get Story</button>
      </form>
    </div>
  )
}

export default NewMadlibForm;