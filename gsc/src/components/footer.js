import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <br></br>
      <div className="ui inverted vertical footer segment">
        <div className="ui container" style={{ backgroundColor: '#07167d' }}>
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="four wide column">
              <div className="ui inverted link list">
                <Link to="/" className="item">
                  Home
                </Link>
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
            <div className="eight wide column">
              <h1 className="ui inverted header">Gulfstream Sailing Club</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
