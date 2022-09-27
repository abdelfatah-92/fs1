
const App = () => {
 const part1 = 'Fundamentals of React'
 const exercises1 = 10
 const part2 = 'Using props to pass data'
 const exercises2 = 7
 const part3 = 'State of a component'
 const exercises3 = 14
 const course = 'Half Stack application development'

 const Headers = (props) => {
  return (
      <h1>{props.course}</h1>
    )
  }
 const Contenent = () => {
   return (
     <>
      <p>{part1} {exercises1}</p>
      <p>{part2} {exercises2}</p>
      <p>{part3} {exercises3}</p>
     </>
    )
  }
 const Total = () => {
   return (
     <>
     <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
     </>
    )
  }
  return (
    <div>
      <Headers course ={course} />
      <Contenent />
      <Total />
    </div>
  )
}

export default App;
