import { requestRobots, setSearchField } from '../actions';
import { connect } from 'react-redux';
// import CardList from '../components/CardList';
import CardList_2 from '../components/CardList_2';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { searchStringInObjectValues } from '../services/string-in-object-vals'

import {
  useEffect,
  // useState
} from 'react';
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
  // const [loaded, setLoaded] = useState(false)
  const { searchField, onSearchChange, robots, onRequestRobots, isPending } = props
  console.log("render App")
  const filteredRobots = robots.filter(robot => searchStringInObjectValues(searchField, robot))

  useEffect(() => {
    onRequestRobots()
  },
    []
  ) //execute only when didMount

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      {isPending ? <h1>Loading...</h1> : <Scroll><CardList_2 currentRobots={filteredRobots} /></Scroll>}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)