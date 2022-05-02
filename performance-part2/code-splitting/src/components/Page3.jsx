import logo from '../logo.svg'
export default function Page1({ onRouteChange }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <button
        onClick={() => onRouteChange('page1')}
      >Page1</button>
      <button
        onClick={() => onRouteChange('page2')}
      >Page2</button>
    </div>
  )
}