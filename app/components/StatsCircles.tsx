'use client';

import { useEffect, useRef, useState } from 'react';

type Stat = {
  value: number;
  label: string;
  suffix?: string;
};

const stats: Stat[] = [
  { value: 98, label: 'Retention Rate', suffix: '%' },
  { value: 19000, label: 'Happy Travellers', suffix: 'k' },
  { value: 1700, label: 'Tour Completed' },
  { value: 12, label: 'Years Experience' },
];

/* ================= COUNT UP ================= */
function useCountUp(target: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const duration = 1200;

    const step = (t: number) => {
      if (!startTime) startTime = t;
      const p = Math.min((t - startTime) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target]);

  return count;
}

/* ================= CIRCLE ================= */
function Circle({
  stat,
  className,
}: {
  stat: Stat;
  className: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(stat.value, visible);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`group absolute ${className}`}>
      <div className="relative h-64 w-64 cursor-pointer">
        {/* GOLD RING */}
        <div className="absolute inset-0 rounded-full border border-[#E6B56C]" />

        {/* ORBIT — THIS ONE ROTATES */}
        <div className="absolute inset-0 transition-transform group-hover:animate-orbit-fast">
          <span className="absolute left-1/2 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-[#E6B56C]" />
        </div>

        {/* INNER BLUE */}
        <div className="absolute inset-5 flex animate-bubble items-center justify-center rounded-full bg-[#EAF6F8] text-center">
          <div>
            <p className="text-4xl font-bold text-black">
              {stat.suffix === 'k'
                ? `${Math.floor(count / 1000)}k`
                : `${count}${stat.suffix ?? ''}`}
            </p>
            <p className="mt-1 text-base font-medium text-black">
              {stat.label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= SECTION ================= */
export default function StatsCircles() {
  return (
    <section className="relative bg-white py-28">
      {/* MOBILE */}
      <div className="mx-auto flex max-w-md flex-col items-center gap-12 lg:hidden">
        {stats.map((s, i) => (
          <Circle key={i} stat={s} className="static" />
        ))}
      </div>

      {/* DESKTOP — ABSOLUTE ZIGZAG */}
      <div className="relative mx-auto hidden h-[520px] max-w-6xl lg:block">
        <Circle stat={stats[0]} className="left-[0%] top-[40%]" />
        <Circle stat={stats[1]} className="left-[25%] top-[5%]" />
        <Circle stat={stats[2]} className="left-[50%] top-[45%]" />
        <Circle stat={stats[3]} className="left-[75%] top-[10%]" />
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bubble {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }

        .animate-orbit-fast {
          animation: orbit 2.5s linear infinite;
        }

        .animate-bubble {
          animation: bubble 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
