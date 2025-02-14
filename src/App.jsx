import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './Home';
import AttendeeDetails from './Layers/AttendeeDetails';
import TicketReady from './Layers/TicketReady';
import SelectTicket from './Layers/SelectTicket';
import Header from './Components/Header';
import Attend from './Layers/Attend';
 
const Layout = ()=>{
  return (
    <div>
      <Header />
      <Outlet />
      
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="attendeedetails" element={<AttendeeDetails />} />
          <Route path="ticketready" element={<TicketReady />} />
          <Route path="selectticket" element={<SelectTicket />} />
          <Route path='attend' element={<Attend />}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
