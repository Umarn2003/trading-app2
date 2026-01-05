'use client';

import { useEffect, useRef } from 'react';

export default function ThreeSteps() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#050b1c]" />

      <div
        ref={sectionRef}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center steps-wrapper"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-20">
          <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            Start Trading in 3 Simple Steps
          </span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="step">
            <span className="number">1</span>
            <div>
              <h3>REGISTER</h3>
              <p>Open a live account and start trading in just minutes.</p>
            </div>
          </div>

          <span className="arrow">→</span>

          <div className="step delay-2">
            <span className="number">2</span>
            <div>
              <h3>FUND</h3>
              <p>Fund your account using a wide range of funding methods.</p>
            </div>
          </div>

          <span className="arrow delay-2">→</span>

          <div className="step delay-3">
            <span className="number">3</span>
            <div>
              <h3>TRADE</h3>
              <p>Access 1000+ instruments across all asset classes.</p>
            </div>
          </div>
        </div>

        <div className="mt-28">
          <button className="cta-btn">Get Started</button>
        </div>
      </div>

      <style jsx>{`
        /* INITIAL STATE */
        .step,
        .arrow {
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.7s ease-out;
        }

        /* SHOW STATE */
        .steps-wrapper.show .step,
        .steps-wrapper.show .arrow {
          opacity: 1;
          transform: translateY(0);
        }

        /* STAGGER */
        .delay-2 {
          transition-delay: 0.5s;
        }

        .delay-3 {
          transition-delay: 0.5s;
        }

        /* STEP STYLES */
        .step {
          display: flex;
          gap: 16px;
          text-align: left;
          max-width: 320px;
        }

        .number {
          font-size: 6rem;
          font-weight: 500;
          background: linear-gradient(to bottom, #60a5fa, #2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
        }

        h3 {
          color: white;
          font-weight: 700;
          font-size: 1.25rem;
        }

        p {
          color: #9ca3af;
          font-size: 1.1rem;
        }

        .arrow {
          font-size: 3rem;
          background: linear-gradient(to right, #3b82f6, #1e40af);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: none;
        }

        @media (min-width: 768px) {
          .arrow {
            display: block;
          }
        }
            .cta-btn {
            background: #dc2626;
            color: white;
            padding: 16px 48px;
            border-radius: 8px;
            font-weight: 600;
            transition: transform 0.3s;
            box-shadow: 0 0 8px #dc2626;
            animation: glowPulse 1s infinite alternate;
            }

            .cta-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 0 15px #dc2626, 0 0 30px #dc2626;
            animation: none;
            }

            @keyframes glowPulse {
            0% {
                box-shadow: 0 0 5px #dc2626;
            }
            100% {
                box-shadow: 0 0 20px #dc2626;
            }
            }

      `}</style>
    </section>
  );
}


