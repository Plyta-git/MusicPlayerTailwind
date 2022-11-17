import React from "react";
import ArtistBaner from "./ArtistBaner";
import TopBar from "./TopBar";
import { useHorizontalScroll } from "./ScrollRef";

type BoxProps = {
  children?: React.ReactNode;
  className: string;
};

export default function Main({ children, className }: BoxProps) {
  const scrollRef: React.MutableRefObject<any> = useHorizontalScroll();
  return (
    <div className={className}>
      <div className=" mt-8 mx-24">
        <TopBar />
        <h1 className=" mt-12 text-3xl">Explore new</h1>
        <div
          ref={scrollRef}
          className=" scroll-smooth	 flex-nowrap flex overflow-hidden overflow-y-hidden"
        >
          <ArtistBaner />
        </div>
        <div className=" w-full grid grid-cols-2 ">
          <div>
            <h1 className=" mt-4 text-3xl">Popular</h1>
          </div>
          <div>
            <h1 className=" mt-4 text-3xl">Mood</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
