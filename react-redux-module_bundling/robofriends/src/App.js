import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { useState } from 'react';
import { robots } from './robots';
import './App.css'

export default function App() {
  const [currentSearchField, setSearchField] = useState('')
  console.log("search for", currentSearchField)
  console.log("renderizou App de novo")
  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox setSearch={setSearchField} />
      <CardList robots={robots} searchFields={currentSearchField} />
    </div>
  )
}