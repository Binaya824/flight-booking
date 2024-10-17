import FlightCard from "@/components/FlightCard/FlightCard";
import Search from "@/components/Search/Search";
import Filters from "@/components/ui/filters";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[80vw] relative">
      <Search />
      <div className="w-full relative mt-5 flex justify-between px-2">

      <div className="w-[35%] relative">
        <Filters />
      </div>
      <div className="w-[64%] relative flex flex-col gap-3">
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
      </div>
      </div>
    </div>
  );
}
