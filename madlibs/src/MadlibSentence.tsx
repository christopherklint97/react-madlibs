
function MadlibSentence({ displayMadlib }) {

  const sentence = displayMadlib ? displayMadlib : undefined; 

  const restart = ()

  return (
    <div>
      <h2>{sentence}</h2>
      <button onClick={restart}>Restart</button>
    </div>
  )
}

export default MadlibSentence;