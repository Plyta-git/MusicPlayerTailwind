import React from "react";
import ArtistBaner from "./ArtistBaner";
import TopBar from "./TopBar";
import { useHorizontalScrollLeft } from "./ScrollRefLeft";
import PopularList from "./PopularList";
import MoodPanels from "./MoodPanels";

type BoxProps = {
  children?: React.ReactNode;
  className: string;
};

export default function Main({ children, className }: BoxProps) {
  const scrollRefLeft: React.MutableRefObject<any> = useHorizontalScrollLeft();
  return (
    <div className={className}>

      <div className=" mt-8 mx-24">
        <TopBar />
        <h1 className=" mt-12 text-3xl">Explore new</h1>
        <div
          ref={scrollRefLeft}
          className=" scroll-smooth	 flex-nowrap flex overflow-hidden overflow-y-hidden"
        >
          <ArtistBaner />
        </div>

        <div className=" w-full grid grid-cols-2 gap-4">
          <div className=" ">
            <h1 className=" my-4 text-3xl">Popular</h1>
            <PopularList />
          </div>
          <div>
            <h1 className=" my-4 text-3xl">Mood</h1>
            <MoodPanels />
          </div>
        </div>

      </div>
    </div>
  );
}
