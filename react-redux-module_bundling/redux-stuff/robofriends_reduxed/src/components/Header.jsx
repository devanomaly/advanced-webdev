import { memo } from 'react'; // USE WITH CAUTION!

export default memo(function Header() {
  console.log("render header")
  return (
    <h1 className='f1'>RoboFriends</h1>
  )
}, () => true)