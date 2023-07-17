import { Mafs, Coordinates } from "mafs"

import "mafs/core.css";
import "mafs/font.css";

export default function App() {
  return (
    <Mafs>
      <Coordinates.Cartesian />
    </Mafs>
  )
}