import logo from '../logo.svg'
export default function Page1({ onRouteChange }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page 2
        </p>
      </header>
      <button
        onClick={() => onRouteChange('page1')}
      >Page1</button>
      <button
        onClick={() => onRouteChange('page3')}
      >Page3</button>
    </div>
  )
}