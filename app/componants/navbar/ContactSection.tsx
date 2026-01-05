"use client";

import { Mail, Phone, MessageCircle } from "lucide-react";

export default function CustomerService() {
  return (
    <section className="relative w-full py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#050b1c]" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent blur-sm" />
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-sm" />
        <div className="absolute bottom-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent blur-sm" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1
          className="text-7xl font-bold 
            bg-linear-to-r 
            from-white 
            via-white
            to-neutral-600
            bg-clip-text text-transparent mb-2 mt-10"
        >
          Award winning customer service
        </h1>

        <p className="mt-8 text-gray-400  mx-auto text-2xl">
          Our dedicated, multilingual support team are here to provide you with
          an exceptional level of customer service and technical support, 24/5.
        </p>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex items-center gap-4 text-white cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center  justify-center">
              <Mail size={22} />
            </div>
            <span className="text-xl font-sans">support@monetamarkets.com</span>
          </div>

          <div className="flex items-center gap-4 text-white cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
              <Phone size={22} />
            </div>
            <span className="text-xl font-sans">+44 (113) 3204819</span>
          </div>

          <div className="flex items-center gap-4 text-white cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
              <MessageCircle size={22} />
            </div>
            <span className="text-xl font-sans">Live Chat</span>
          </div>
        </div>

        <div className="mt-36">
          <h1
            className="text-7xl font-bold 
                    bg-linear-to-r 
                    from-white 
                    via-white
                    to-neutral-600
                    bg-clip-text text-transparent mb-2"
          >
            Moneta Markets Clients
          </h1>

          <p className="mt-6 text-gray-400 text-2xl">
            We pride ourselves on exceptional client support. If you have any
            questions or need assistance, please contact us on the following
            numbers.
          </p>

          <div className="mt-6 space-y-2 text-gray-300 text-base md:text-lg">
            <p className="text-2xl">
              Phone (U.K):{" "}
              <span className="text-white font-medium text-2xl">
                +44 (113) 3204819
              </span>
            </p>
            <p className="text-2xl">
              Phone (International):{" "}
              <span className="text-white font-medium text-2xl">
                +61 2 8330 1233
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
