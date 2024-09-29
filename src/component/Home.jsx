import React from 'react';
import img1 from '../assets/img1.jpg';
import CardDetails from './CardDetails';

function Home() {
  return (
  <>
  <CardDetails img={img1} title={"Desert"} description={"The desert is a vast, arid landscape defined by its stark beauty and extreme conditions. Characterized by rolling sand dunes, rocky plateaus, and sparse vegetation, it thrives under intense sunlight during the day, with temperatures often soaring. At night, the desert transforms as temperatures plummet, revealing a stunning canopy of stars. Despite its harsh environment, the desert is home to a variety of resilient wildlife and plants, each uniquely adapted to survive in the challenging climate. The silence here is profound, punctuated only by the gentle whisper of the wind and the occasional call of a distant animal."} textColor={"text-white"}/>
  </>
  );
}

export default Home;
