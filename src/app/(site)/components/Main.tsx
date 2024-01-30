import Features from "./Features";
import ProfitShare from "./ProfitShare";
import Trading from "./Trading";
import UpTo1Million from "./UpTo1Million";

export default function Main() {
  return (
    <div className="mt-10">
      <Features />
      <UpTo1Million />
      <ProfitShare />
      <Trading />
    </div>
  );
}
