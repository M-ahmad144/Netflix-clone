import React from "react";
import background from "../assets/bg.jpg";

export default function BackgroundImage() {
  return (
    <div className="w-screen h-screen">
      <img className="w-full h-full" src={background} alt="background" />
    </div>
  );
}
