import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calendar from './pages/calendar';
import Contacts from './pages/contacts';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/home';
import Meetings from './pages/meetings';
import Membership from './pages/membership';
import Photos from './pages/photos';
import SailorsPoint from './pages/sailorsPoint';
function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/meetings" component={Meetings} />
            <Route path="/membership" component={Membership} />
            <Route path="/photos" component={Photos} />
            <Route path="/sailorsPoint" component={SailorsPoint} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
