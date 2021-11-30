
import './App.css';
import { Route,Routes } from 'react-router';
import "./css/navigation.css"
// import "./css/banner.css"
import "./css/footer.css"
// import "./css/introduction.css"
// import "./css/chooseCountry.css"
import Teams from './Team/team'
// import "./css/customerReview.css"
 import Partner from './Partner/partner';
 import Form from './ContactForm/contact'
import Navigation from './components/Navigation';
 import WhatAbout from './WhatAbout/whatAbout';
 import Warranty from './Warranty/warranty';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  return (
   <>
     <Navigation/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/whatAbout" element={<WhatAbout/>}/>
       <Route path="/warranty" element={<Warranty/>}/>
       <Route path="/teams" element={<Teams/>}/>
       <Route path="/partner" element={<Partner/>}/>
       <Route path="/contactUs" element={<Form/>}/>
     </Routes>
   </>
  );
}

export default App;
