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

      <p>
        LSBC has grown from six men with boats under 22&#39; looking for a place
        to keep them in the water, to a fantastic facility for small boating
        enthusiasts. We provide dockage, haul out facilities and many other
        conveniences for members, and we also have the unique ambience of a
        &quot;club&quot;.
      </p>

      <br />
      <p>
        Our members are treated to a variety of social events which vary from
        monthly &quot;Happy Hours&quot; to Fishing &amp; Holiday events for
        members and their families. We have grown immensely over the past 50
        plus years, from a hole in the ground that accommodated a few boats to a
        family oriented Boat Club that can reflect on these years with pride and
        a sense of accomplishment.
      </p>

      <br />

      <p>
        Thanks to the sweat-equity and donations of our members, we have been
        able to provide the special atmosphere and surroundings that our members
        have come to enjoy, appreciate and expect from our club.
      </p>
    </div>
  );
};

export default About;
