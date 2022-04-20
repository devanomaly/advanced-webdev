import { setSearchField } from '../actions';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { useEffect, useState } from 'react';
import './App.css'

const mapStateToProps = state => ({ searchField: state.searchField })
const mapDispatchToProps = dispatch => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value))
})

function App(props) {
  const [currentUserList, setUserList] = useState([{}])
  const [loaded, setLoaded] = useState(false)
  const { searchField, onSearchChange } = props

  useEffect(() => {
    console.log("useEffect disparou");
    // console.log("store state\n", store.getState())
    if (!loaded) {
      (async () => {
        const resJSON = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
        setUserList(resJSON)
        setLoaded(true)
      }
      )();
    }
  }, [loaded]) //execute only when didMount

  console.log("search for", searchField)
  console.log("renderizou App de novo")

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      {loaded ? <Scroll><CardList robots={currentUserList} searchFields={searchField} /></Scroll> : <h1>Loading...</h1>}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)