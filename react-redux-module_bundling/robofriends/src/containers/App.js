import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { useEffect, useState } from 'react';
import './App.css'

export default function App() {
  const [currentUserList, setUserList] = useState([{}])
  const [loaded, setLoaded] = useState(false)
  const [currentSearchField, setSearchField] = useState('')

  useEffect(() => {
    console.log("useEffect disparou");
    if (!loaded) {
      (async () => {
        const resJSON = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
        setUserList(resJSON)
        setLoaded(true)
      }
      )();
    }
  }, [loaded]) //execute only when didMount

  console.log("search for", currentSearchField)
  console.log("renderizou App de novo")

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox setSearch={setSearchField} />
      {loaded ? <Scroll><CardList robots={currentUserList} searchFields={currentSearchField} /></Scroll> : <h1>Loading...</h1>}
    </div>
  )
}