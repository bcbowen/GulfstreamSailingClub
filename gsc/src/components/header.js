import React from 'react';
import { Link } from 'react-router-dom';
import '../css/gsc.css';

const Header = () => {
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="row">
          <div className="left floated left aligned eight wide column">
            <img src="../images/gsc_logo_sm.jpg" alt="GSC Burgee" />
          </div>

          <div className="right floated right aligned eight wide column">
            <div className="Banner">
              <h1 className="Hot">Gulfstream Sailing Club</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Home
        </Link>
        <div className="right menu">
          <Link to="/SailorsPoint" className="item">
            Sailors Point
          </Link>
          <Link to="/Contacts" className="item">
            Contacts
          </Link>
          <Link to="/Meetings" className="item">
            Meetings
          </Link>
          <Link to="/Calendar" className="item">
            Calendar
          </Link>
          <Link to="/Photos" className="item">
            Photos
          </Link>
          <Link to="/Membership" className="item">
            Membership
          </Link>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Header;
