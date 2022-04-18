export default function Card(props) {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={props.id !== undefined ? `https://robohash.org/${props.id}?200x200` : ''} alt="robot pic" />
      <div>
        <h2>{props.username}</h2>
        <h4>{props.website}</h4>
        <p>{props.email}</p>
      </div>
    </div>
  )
}