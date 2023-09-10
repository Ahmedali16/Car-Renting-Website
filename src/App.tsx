
import Customer from './Pages/Customer';
import Footer from './Pages/Footer';
import Services from './Pages/Services';
import Work from './Pages/Work';
import Card from './Rentcomponents/CarRentCard/Card';
import Banner from './Rentcomponents/Home/Banner';
import NavBar from './Rentcomponents/Navbar/Navbar';
import PicCar from './Rentcomponents/PicCars/PicCar';
import Brands from './Rentcomponents/RentBrands/Brands';
function App() {
  return (
    <div className="App">
 
 <NavBar/>
 <Banner/>
 <PicCar/>
 <Brands/>
<Card/>

{/* from pages */}
<Work/>
<Services/>
<Customer/>
<Footer/>

    </div>
  );
}

export default App;
