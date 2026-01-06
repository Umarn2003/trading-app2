"use client";

import Image from "next/image";
import { useState } from "react";
export default function TrustSection() {
  return (
    <section className="bg-gradient-to-b from-[#040814] to-[#02040b] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-4 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-center">
            <Image
              src="/thumb.png"
              alt="Like Icon"
              width={180}
              height={180}
              className="drop-shadow-[0_0_40px_rgba(59,130,246,0.8)] rounded-full object-fill h-40 w-80"
            />
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Find out why{" "}
            <span className="inline-flex items-center gap-2">
              traders like
              <span className="rounded-md bg-black/40 px-3 py-1 text-blue-500 shadow-inner">
                150,063+
              </span>
            </span>
            <br />
            to trade with Moneta Markets
          </h2>
        </div>
      </div>
    </section>
  );
}
