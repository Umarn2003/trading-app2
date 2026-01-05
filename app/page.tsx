import Image from "next/image";
import Hero from "./componants/navbar/Hero";
import CustomerService from "./componants/navbar/ContactSection";
import ThreeSteps from "./componants/navbar/ThreeStages";
import TradeTable from "./componants/tradeTable";

export default function Home() {
  return (
    <div className=" bg-linear-to-br from-[#050B1E] via-[#071330] to-[#050B1E]">
      <Hero />
      <TradeTable />
      <CustomerService />
      <ThreeSteps />
    </div>
  );
}
