import { requestRobots, setSearchField } from '../actions';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { useEffect, useState } from 'react';
import './App.css'

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
})
const mapDispatchToProps = dispatch => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
})

function App(props) {
  const [loaded, setLoaded] = useState(false)
  const { searchField, onSearchChange, robots, onRequestRobots } = props

  useEffect(() => {
    // console.log("useEffect disparou");
    // console.log("store state\n", store.getState())
    if (!loaded) {
      onRequestRobots()
      setLoaded(true)
    }
  }, [loaded]) //execute only when didMount

  // console.log("renderizou App de novo")

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      {loaded ? <Scroll><CardList robots={robots} searchFields={searchField} /></Scroll> : <h1>Loading...</h1>}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)