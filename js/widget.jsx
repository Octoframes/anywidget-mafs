import * as React from "react";
// import QRCode from "react-qr-code";
import { Mafs, Coordinates } from "mafs";
import { createRender, useModelState } from "@anywidget/react";
import "mafs/core.css";

export const render = createRender(() => {
  const [content] = useModelState("content");
  // return <h1>{content}</h1> ;
    return (
    <Mafs>
      <Coordinates.Cartesian />
    </Mafs>
  );
});





