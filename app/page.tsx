"use cilent";
import ContactForm from "./componants/ContactForm";
import { FAQForTrading } from "./componants/FAQs";
import TradeandEarn from "./componants/navbar/Cashbacksection";
import HowTrade from "./componants/navbar/ConetentSection";
import CustomerService from "./componants/navbar/ContactSection";
import GlobalMarkets from "./componants/navbar/GlobalMarkets";
import Hero from "./componants/navbar/Hero";
import BenefitsSection from "./componants/navbar/MonetaHero";
import RegulationAndPartners from "./componants/navbar/REgulated";
import ThreeSteps from "./componants/navbar/ThreeStages";
import TrustSection from "./componants/navbar/TradersTrade";
import TradeTable from "./componants/tradeTable";

export default function Home() {
  return (
    <div className="bg-linear-to-b from-[#050b1e] to-[#020617]">
      <Hero />
      <TradeTable />
      <div>
        <BenefitsSection />
      </div>

      <div>
        <RegulationAndPartners />
      </div>

      <div>
        <GlobalMarkets />
      </div>
      <div>
        <TradeandEarn />
      </div>
      <div>
        <HowTrade />
      </div>
      <div>
        <TrustSection />
      </div>
      {/* <CustomerService /> */}
      <ThreeSteps />
      <FAQForTrading />
      <ContactForm />
    </div>
  );
}
