import { robots } from './robots';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

export default function App() {
  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  )
}