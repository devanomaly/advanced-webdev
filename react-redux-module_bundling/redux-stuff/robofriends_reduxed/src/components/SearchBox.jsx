export default function SearchBox({ setSearch }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
    </div>
  )
}