// This version of CardList only renders the robot list passed in the props
import Card from './Card'

export default function CardList_2({ currentRobots }) {

  return (
    <>
      {currentRobots.map(robot => {
        return <Card key={robot.id} id={robot.id} email={robot.email} username={robot.username} website={robot.website} />
      })}
    </>
  )
}