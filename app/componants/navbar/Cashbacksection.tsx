import Image from "next/image";

export default function TradeandEarn() {
  return (
    <section className="relative bg-linear-to-b from-[#050b1e] to-[#020617] py-28 ">
      <div
        className="absolute right-0 top-10 md:w-[400px] w-[300px] h-[300px] 
              bg-blue-700/60 blur-[120px] rounded-full"
      ></div>
      <div className="mx-auto max-w-7xl px-6 mt-26 mb-20">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-20">
          Déposez. Négociez. Gagnez.
        </h2>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative flex justify-center items-center">
            <div className="relative w-[420px] h-[260px]">
              <div
                className="
        absolute top-4 left-6
        w-72 h-28
        flex items-center justify-center
        rounded-2xl
        bg-[#050814]
        text-white text-5xl font-extrabold tracking-wide
        border-[2.5px] border-red-500
        shadow-[0_0_18px_rgba(239,68,68,0.8),0_0_40px_rgba(239,68,68,0.6)]
        rotate-[-6deg]
      "
              >
                CASH
              </div>

              <div
                className="
        absolute bottom-6 right-6
        w-72 h-28
        flex items-center justify-center
        rounded-2xl
        bg-[#050814]
        text-white text-5xl font-extrabold tracking-wide
        border-[2.5px] border-blue-500
        shadow-[0_0_18px_rgba(59,130,246,0.8),0_0_40px_rgba(59,130,246,0.6)]
        rotate-[6deg]
      "
              >
                BACK
              </div>
            </div>
          </div>

          <div className="max-w-lg">
            <p className="text-3xl  text-gray-400">
              Désormais, chaque fois que vous alimentez votre compte réel avec
              <span className="text-white font-semibold"> 100 $</span> ou plus,
              nous vous offrons un
              <span className="text-white font-semibold"> bonus de 50 %</span>.
              Ensuite, lorsque vous commencerez à négocier le Forex, l'or ou le
              pétrole, votre bonus se convertira en argent réel !
            </p>

            <button
              className="
                mt-10
                inline-flex items-center justify-center
                rounded-lg
                bg-blue-600
                px-6 py-3
                text-lg font-semibold text-white
                transition
                hover:bg-blue-500
                hover:shadow-[0_0_25px_rgba(37,99,235,0.8)]
              "
            >
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
