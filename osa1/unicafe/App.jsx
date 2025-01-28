import { useState } from 'react'

const StatisticLine = (props) => {

  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )

}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  
  console.log('all ', props.all)

  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="Good" value={props.good} />
          <StatisticLine text="Neutral" value={props.neutral} />
          <StatisticLine text="Bad" value={props.bad} />
          <StatisticLine text="All" value={props.all} />
          <StatisticLine text="Average" value={props.average/props.all} />
          <StatisticLine text="Positive" value={(props.good/props.all)*100} />
        </tbody>
      </table>
    </div>
  )

}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGoodClick = () => {
    setAll(all +1)
    setGood(good + 1)
    setAverage(average + 1)
  }

  const handleNeutralClick = () => {
    setAll(all +1)
    setNeutral(neutral + 1)
    setAverage(average + 0)
  }

  const handleBadClick = () => {
    setAll(all +1)
    setBad(bad + 1)
    setAverage(average - 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>

      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />

      <h1>Statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} />
    </div>
  )
}

export default App
