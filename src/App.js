import { useState } from "react";

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [newVote, setNewVote] = useState(Array(7).fill(0))
  const rand = Math.floor(Math.random()*7) 
  const handleClick = () => {
    setSelected(rand)
  }
  const handleVoteClick = () => {
    const v = [...newVote]
    v[selected] += 1
    setNewVote(v) 
  }
 
    const a = Math.max(...newVote)
    const b = newVote.indexOf(a)
    const c = anecdotes[b]

  return (
    <div>
     <h1>anecdote of the day</h1>
     <p>{anecdotes[selected]}</p>
     <p>has {newVote[selected]} votes</p>
     <button onClick={handleClick}>next anecdotes</button>
     <button onClick={handleVoteClick}>votes</button>
     <h2>anecdotes with most votes</h2>
     <div>{c}</div>
    </div>
  )
}
export default App;
  

