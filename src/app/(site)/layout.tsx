import { type ReactNode } from "react";
import "keen-slider/keen-slider.min.css";

interface Props {
  children: ReactNode;
}

function layout({ children }: Props) {
  return <div className="bg-white min-h-screen">{children}</div>;
}

export default layout;
