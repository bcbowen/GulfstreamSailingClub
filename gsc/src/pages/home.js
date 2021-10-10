import Sponsors from '../components/sponsors';

const About = () => {
  return (
    <div className="ui text container">
      <h1>About Us</h1>

      <p>
        The Gulfstream Sailing Club, founded in 1957, is one of Broward
        County&apos;s oldest sailing clubs.
        <br />
        The Sailing Club is run by its members who are volunteers and are
        committed to preserving fun, safety and affordability in Fort Lauderdale
        yachting.
        <br />
        Boat ownership is not a prerequisite!
        <br />
        We are an active club, holding and participating in many activities and
        events, including:
      </p>

      <ul>
        <li>
          Races on the ocean and at the lake in Hollywood throughout the year
        </li>
        <li>Our annual Beach Bash each August</li>
        <li>
          Our annual Gulfstream Sailing Club Regatta, which began in 1991,
          continues to this day with multiple sailing clubs participating each
          year
        </li>
        <li>Sailing lessons for Adults and Children at Sailors Point.</li>
      </ul>
      <p>
        In case you are interested, you can read the current Club bylaws&nbsp;
        <a
          href="http://gulfstreamsailingclub.org/inc/Bylaws201810_1.pdf"
          target="_new"
        >
          here
        </a>
        .
      </p>

      <Sponsors />

      <br />
    </div>
  );
};

export default About;
