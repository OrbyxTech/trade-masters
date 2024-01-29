import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div
      className="w-full h-[90vh]"
      style={{
        background: "url(/images/background.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Hero />
    </div>
  );
}
