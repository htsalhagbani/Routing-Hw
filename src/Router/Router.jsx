import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from '../App';
import CardDetails from '../component/CardDetails';
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img6.jpg'
import img4 from '../assets/img7.webp'
import img5 from '../assets/img9.jpg'
import ErrorPage from '../Errors/Errors';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
    },
    {
        path: "/Sea",
        element:<CardDetails img={img2} title={"Sea"} description={"The sea is a vast expanse of saltwater that covers much of the Earth's surface, teeming with life and mystery. Its rhythmic waves crash against shorelines, creating a soothing sound that calms the soul. The sea is a vibrant ecosystem, home to a diverse array of marine life, from colorful coral reefs to majestic whales. The hues of the water shift from deep blues to bright turquoise, reflecting the sky and the sun's rays. It plays a vital role in regulating the climate, influencing weather patterns and providing resources for countless communities. The sea captivates with its beauty and depth, inviting exploration and offering a sense of tranquility."} textColor={"text-white"}/>,
      },
      {
        path: "/Valley",
        element:<CardDetails img={img3} title={"Valley"} description={"A valley is a low-lying area of land nestled between hills or mountains, often carved by the slow passage of rivers and glaciers. It is characterized by its lush greenery, fertile soil, and diverse ecosystems. Valleys can vary in shape and size, from wide, flat expanses to narrow, steep-walled gorges. They often serve as vital habitats for wildlife and are crucial for agriculture, providing essential resources for communities. The gentle sounds of flowing water and the rustle of leaves create a serene atmosphere, making valleys peaceful retreats for nature lovers and adventurers alike. With their breathtaking views and vibrant landscapes, valleys embody the beauty and tranquility of the natural world."} textColor={"text-white"}/>,
      },
      {
        path: "/Forest",
        element:<CardDetails img={img4} title={"Forest"} description={"A forest is a dense and vibrant ecosystem filled with towering trees, lush undergrowth, and a rich tapestry of plant and animal life. It serves as a vital habitat for countless species, from birds and mammals to insects and fungi. The canopy, formed by the upper branches of trees, filters sunlight, creating a dappled light effect on the forest floor. Forests play a crucial role in regulating the Earth's climate, producing oxygen, and absorbing carbon dioxide. The air is often fragrant with the scent of damp earth and foliage, while the sounds of rustling leaves, chirping birds, and distant animal calls create a symphony of nature. Whether it's a serene stroll along a winding path or an adventurous trek, forests offer a peaceful escape and a sense of wonder at the beauty of the natural world."} textColor={"text-white"}/>,
      },
      {
        path: "/Cave",
        element:<CardDetails img={img5} title={"Cave"} description={"A cave is a natural underground chamber, often formed by the erosion of rock over millennia. These dark, mysterious spaces can vary greatly in size and shape, from small, narrow passages to vast caverns adorned with stunning stalactites and stalagmites. Caves provide unique ecosystems, harboring specialized wildlife such as bats, insects, and various species of fungi and algae. The air inside is often cool and damp, with echoes that carry the slightest sound. Caves have been significant to human history, serving as shelters, places of worship, and sites for ancient artwork. Their intriguing formations and hidden depths evoke a sense of adventure and curiosity, making them fascinating destinations for explorers and nature enthusiasts alike."} textColor={"text-white"}/>,
      },
  ]);


export default router