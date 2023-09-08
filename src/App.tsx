
// import Banner from './components/Banner/Banner';
// import Guide from './components/Guide/Guide';
// // import Guide from './components/Guide/Guide';
// import Index from './components/Index'
// // import NavBar from './components/NavBar/NavBar'
// import Vehicle from './components/Vehicles/Vehicle';
// import Working from './components/Working/Working';
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
     {/* <Index/>
     <NavBar/>
     <Banner/>
  <Working/>
 <Guide/>
 <Vehicle/> */}
    </div>
  );
}

export default App;
