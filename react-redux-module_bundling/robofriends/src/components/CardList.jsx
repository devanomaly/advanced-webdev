import Card from './Card'
import { robots } from '../robots';
import { useEffect, useState } from 'react'
import { searchStringInObjectValues } from '../services/string-in-object-vals'

export default function CardList({ searchFields }) {
  // REMINDER! Keeping the useEffect here was a better strategy: 2 re-renders vs 4 if currentRobots state was managed by App!
  const [currentRobots, setRobots] = useState(robots)

  useEffect(() => {
    const filteredRobots = robots.filter(robot => searchStringInObjectValues(searchFields, robot))
    setRobots(filteredRobots)
  }, [searchFields])

  return (
    <>
      {currentRobots.map(robot => {
        return <Card key={robot.id} id={robot.id} email={robot.email} username={robot.username} />
      })}
    </>
  )
}