import Card from './Card'
import { useEffect, useState } from 'react'
import { searchStringInObjectValues } from '../services/string-in-object-vals'

export default function CardList({ robots, searchFields }) {
  console.log("renderizou CardList")
  // REMINDER! Keeping the filter logic here in useEffect was a better strategy: 2 App re-renders vs 4 App re-renders if currentRobots state was managed by App!
  const [currentRobots, setRobots] = useState(robots)

  useEffect(() => {
    const filteredRobots = robots.filter(robot => searchStringInObjectValues(searchFields, robot))
    setRobots(filteredRobots)
  }, [searchFields])
  
  return (
    <>
      {currentRobots.map(robot => {
        return <Card key={robot.id} id={robot.id} email={robot.email} username={robot.username} website={robot.website}/>
      })}
    </>
  )
}