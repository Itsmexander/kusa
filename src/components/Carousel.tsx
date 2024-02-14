import React from "react";
import { Carousel } from "antd";

const App: React.FC = () => (
  <Carousel>
    <div className="h-[22.2rem]">
      <img
        src="/assets/home-banner.svg"
        className="h-full w-full rounded-xl bg-center bg-no-repeat object-cover"
        alt=""
      />
    </div>
    <div className="h-[22.2rem]">
      <img
        src="/assets/home-banner.svg"
        className="h-full w-full rounded-xl bg-center bg-no-repeat object-cover"
        alt=""
      />
    </div>
    <div className="h-[22.2rem]">
      <img
        src="/assets/home-banner.svg"
        className="h-full w-full rounded-xl bg-center bg-no-repeat object-cover"
        alt=""
      />
    </div>
    <div className="h-[22.2rem]">
      <img
        src="/assets/home-banner.svg"
        className="h-full w-full rounded-xl bg-center bg-no-repeat object-cover"
        alt=""
      />
    </div>
  </Carousel>
);

export default App;
