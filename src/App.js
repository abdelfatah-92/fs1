import { useState } from "react";

const Statistics = (props) => {
 const {text, hanleEvent, text2} = props
 console.log(props)
  return (
    <div>{text} {hanleEvent} {text2}</div>
  )
}
const Button = (props) => {
  return (
    <button onClick={props.hanleEvent}>{props.text}</button>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  // handeling clicks 
  const handleGoodClick = () => {
    setAll(all+1)
    setGood(good+1)
    setAverage((good+1-bad)/(all+1))
    setPositive(((good+1)/(all+1))*100)
  }
  const handleNeutralClick = () => {
    setAll(all+1)
    setNeutral(neutral+1)
    setAverage((good - bad)/(all+1))
    setPositive(((good)/(all+1))*100)
  }
  const handleBadClick = () => {
    setAll(all+1)
    setBad(bad+1)
    setAverage((good-bad-1)/(all+1))
    setPositive(((good)/(all+1))*100)
  }
  if (good === 0 && bad === 0 && neutral === 0){
    return(
      <>
         <h1>Give feedback</h1>
         <button onClick= {handleGoodClick}>good</button>
         <button onClick= {handleNeutralClick}>neutral</button>
         <button onClick= {handleBadClick}>bad</button>
         <h1>statistics</h1>
         <p>No feedback given</p>
      </>
    )}
 return (
  <div>
   <h1>Give feedback</h1>
   <Button hanleEvent={handleGoodClick} text='good' />
   <Button hanleEvent={handleNeutralClick} text='neutral' />
   <Button hanleEvent={handleBadClick} text='bad' />
   <h1>statistics</h1>
   <Statistics text="good" hanleEvent= {good} />
   <Statistics text="neutral" hanleEvent= {neutral} />
   <Statistics text="bad" hanleEvent= {bad} />
   <Statistics text="all" hanleEvent= {all} />
   <Statistics text="average" hanleEvent= {average} />   
   <Statistics text="positive" hanleEvent= {positive} text2= "%"/>
  </div>
 )
}

export default App;
