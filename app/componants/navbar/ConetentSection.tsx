import Image from "next/image";

export default function HowTrade() {
  return (
    <main className=" bg-linear-to-b from-[#050b1e] to-[#020617] text-white relative">
      <div
        className="absolute -left-40 bottom-0 md:w-[400px] w-[300px] h-[300px] 
              bg-blue-700/70 blur-[120px] rounded-full"
      ></div>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-center text-4xl md:text-6xl font-bold mb-16">
          Apprenez à <span className="text-blue-500">trader le marché</span>
          dans les deux sens
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center w-11/12 mx-auto">
          <div>
            <h3 className="text-xl text-center font-bold mb-4 text-blue-500">
              Le prix du marché augmente
            </h3>

            <div className="relative w-full aspect-4/3 rounded-xl border border-[#dbdce922] bg-white/5 overflow-hidden">
              <Image
                src="/tradingup.jpg"
                alt="Le marché monte"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center space-y-6">
            <p className="text-gray-400 text-xl leading-relaxed">
              Tous les clients de Moneta Markets peuvent tirer profit des
              mouvements haussiers et baissiers de plus de 1000 instruments
              négociables, tels que le Forex, les CFD sur actions, les indices,
              les matières premières, et bien plus.
            </p>

            <p className="font-bold text-xl">
              Profitez des cycles de marché haussiers et baissiers avec Moneta
              Markets !
            </p>

            <button className="mt-14 px-8 py-4 hover:cursor-pointer rounded-lg bg-blue-600 hover:bg-blue-800 transition font-bold">
              Apprenez à trader
            </button>
          </div>

          <div>
            <h3 className="text-xl text-center font-bold mb-4 text-blue-500">
              Le prix du marché baisse
            </h3>

            <div className="relative w-full aspect-[4/3] rounded-xl border border-[#dbdce922] bg-white/5 overflow-hidden">
              <Image
                src="/tradingdown.jpg"
                alt="Le marché baisse"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
