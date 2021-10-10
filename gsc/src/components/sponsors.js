import { useRef, useEffect } from 'react';
import * as SponsorJson from '../data/sponsors.json';

const Sponsors = () => {
  const imageRef = useRef();
  const timer = useRef();
  let index = 0;
  //let i = 1;
  const showSponsor = () => {
    imageRef.current.src = SponsorJson.sponsors[index].path;
    imageRef.current.href = SponsorJson.sponsors[index].href;
    imageRef.current.height = SponsorJson.sponsors[index].height;
    imageRef.current.width = SponsorJson.sponsors[index].width;

    const len = SponsorJson.sponsors.length;
    //console.log((index + 1) % len);
    index = len % (index + 1) === 0 ? index + 1 : 0;
    timer.current = window.setTimeout(() => showSponsor(), 5000);
    console.log(`showing sponsor ${index}`);
    //i++;
    //console.log(i);
  };

  useEffect(() => {
    timer.current = window.setTimeout(() => showSponsor(), 100);
    return () => {
      window.clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className="ui container">
      <img ref={imageRef} alt="Sponsor" />
    </div>
  );
};

export default Sponsors;
