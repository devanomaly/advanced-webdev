import logo from '../logo.svg'
export default function Page1({ onRouteChange }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page 1
        </p>
      </header>
      <button
        onClick={() => onRouteChange('page2')}
      >Page2</button>
      <button
        onClick={() => onRouteChange('page3')}
      >Page3</button>
    </div>
  )
}