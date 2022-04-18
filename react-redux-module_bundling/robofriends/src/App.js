import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { useState } from 'react';

export default function App() {
  const [currentSearchField, setSearchField] = useState('')
  console.log("search for", currentSearchField)
  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox setSearch={setSearchField} />
      <CardList searchFields={currentSearchField} />
    </div>
  )
}