import React from "react";

type BoxProps = {
  children?: React.ReactNode;
  
}

export default function TopBar() {
  return (
    <div className=" fill-secondary  flex justify-start w-ful text-secondary">
      <svg
        className=" hover:fill-white mr-8 "
        height="28px"
        transform="scale(-1,1)"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
      </svg>
      <svg
        className=" hover:fill-white mr-16"
        height="28px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
      </svg>
      <div className="flex">
        <svg
          className="mr-6 hover:fill-white"
          height="28px"
          enable-background="new 0 0 32 32"
          id="Glyph"
          version="1.1"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
            id="XMLID_223_"
          />
        </svg>
        <input
          type="text"
          className=" border-none text-white w-96 bg-transparent"
          placeholder="Search music"
        ></input>
      </div>
      <div className="flex ml-auto">
        <h1 className=" hover:text-white mr-3">Login</h1>
        <svg className="hover:fill-white" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 6C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4C12 5.10457 11.1046 6 10 6Z" />
          <path d="M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12Z" />
          <path d="M10 18C8.89543 18 8 17.1046 8 16C8 14.8954 8.89543 14 10 14C11.1046 14 12 14.8954 12 16C12 17.1046 11.1046 18 10 18Z" />
        </svg>
      </div>
    </div>
  );
}
