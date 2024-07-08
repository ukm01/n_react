import './App.css';


const Header = () => {
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo"  src="https://cdn.dribbble.com/userupload/4288550/file/original-00eebac2e5b6d4546817cbb73172ac89.jpg?resize=752x" alt="logo-img"  />

      </div>
      <div className="nav-items">
       <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>contact Us</li>
        <li>Cart</li>
       </ul>
      </div>

    </div>
  )

}

const RestaurantCard = () => {
  return(
    <div className='res-card' style={{backgroundColor:"#f0f0f0"}}>
      <img className="res-logo" alt="res-logo" src=""></img>
      <h3>Meghna Foods</h3>
    </div>
  )
}

const Body = () => {
  return(
    <div className='body'>
      <div className="search">Search</div>
      <div className='res-container'>
        <RestaurantCard />

      </div>
    </div>
  )

}




function App() {
  return (
    <div className="App">
      <Header />
      <Body></Body>
      
    </div>
  );
}

export default App;
