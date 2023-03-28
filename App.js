import './App.css';
import Card from './components/Card';
import Image1 from './images/icon-sedans.svg';
import Image2 from './images/icon-suvs.svg';
import Image3 from './images/icon-luxury.svg';

function App() {
  
  return (
    
    <div className="App">

      <div className='card2'>
        <Card Image = {Image1} Title = 'SEDAN' Text = 'Choose a sedan for its
       affordability and excellent fuel economy. 
       Ideal for cruising in the city or on your next road trip.'/>
      </div> 
      <div className='card3'>
        <Card Image = {Image2} Title = 'SUV' Text = 'Take an SUV for its spacious interior,
        power, and versatility. Perfect for your next family vacation and offroad
        adventures.'/>
      </div> 
      <div className='card4'>
        <Card Image = {Image3} Title = 'LUXURY' Text = 'Cruise in the best car brands
        without the bloated prices. Enjoy the enhanced comfort of a luxury rental and
        arrive in style.'/>
      </div> 
      
      
      

    </div>
  );
}

export default App;
