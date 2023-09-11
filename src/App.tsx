// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Footer from './Pages/Footer';
// import HomePage from './Pages/HomePage';
// import HowItWorks from './Pages/HowItWorks';
// import Navbar from './Pages/Navbar';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Routes path='/HomePage' element={<HomePage/>}></Routes>
//           <Route path='/HowItWorks' element={<HowItWorks />} />
//         </Routes>
//         {/* <HomePage /> */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Pages/Footer';
import HomePage from './Pages/HomePage';
import HowItWorks from './Pages/HowItWorks';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} /> {/* Default route */}
          <Route path='/HowItWorks' element={<HowItWorks />} />
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;

