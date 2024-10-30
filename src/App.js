import Navbar from './navbar';
import './App.css';
import touristSites from './turist.js';
import Card from './card.js';
import Footer from './Footer.js';

function App() {
  const someElements = touristSites.map((item,index) => (
    <Card
      key={item.name} // Unique key prop
      Image={item.image} // Corrected
      name={item.name} 
      location={item.location}// Corrected
      country={item.country} // Corrected
      description={item.description}
    />
  ));

  return (
    <div>

      <Navbar/>
      <div className="product-list">
        {someElements}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
