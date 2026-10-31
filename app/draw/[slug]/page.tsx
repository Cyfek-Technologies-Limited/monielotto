"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Crown,
  RefreshCw,
  ShieldCheck,
  Ticket,
  Trash2,
  Trophy,
  Zap,
} from "lucide-react";

const draws: Record<
  string,
  { name: string; jackpot: string; price: string; ball: string; colors: string }
> = {
  "1-billion": {
    name: "1 Billion Draw",
    jackpot: "1 BILLION",
    price: "500",
    ball: "1",
    colors: "from-[#ffe52d] via-[#ffbd15] to-[#ff9809]",
  },
  "85-million": {
    name: "85 Million Draw",
    jackpot: "85 MILLION",
    price: "300",
    ball: "85",
    colors: "from-[#a1e933] via-[#73d72c] to-[#36b957]",
  },
  "55-million": {
    name: "55 Million Draw",
    jackpot: "55 MILLION",
    price: "200",
    ball: "55",
    colors: "from-[#ffd52c] via-[#ffb221] to-[#ff8f0b]",
  },
  "600-thousand": {
    name: "600 Thousand Draw",
    jackpot: "600,000",
    price: "100",
    ball: "600K",
    colors: "from-[#b3ed50] via-[#71d82f] to-[#39b95c]",
  },
  "150-thousand": {
    name: "150 Thousand Draw",
    jackpot: "150,000",
    price: "100",
    ball: "150K",
    colors: "from-[#fff06a] via-[#ffdb27] to-[#ffb91a]",
  },
  "60-thousand": {
    name: "60 Thousand Draw",
    jackpot: "60,000",
    price: "100",
    ball: "60K",
    colors: "from-[#aceb4c] via-[#72d72d] to-[#32b75a]",
  },
};

export default function DrawPage() {
  const { slug } = useParams<{ slug: string }>();
  const draw = draws[slug] ?? draws["1-billion"];
  const [selected, setSelected] = useState<number[]>([]);
  const [status, setStatus] = useState("");
  const toggle = (number: number) => {
    setStatus("");
    setSelected((current) =>
      current.includes(number)
        ? current.filter((item) => item !== number)
        : current.length < 5
        ? [...current, number].sort((a, b) => a - b)
        : current
    );
  };
  const quickPick = () => {
    const picks = new Set<number>();
    while (picks.size < 5) picks.add(Math.floor(Math.random() * 50) + 1);
    setSelected([...picks].sort((a, b) => a - b));
    setStatus("");
  };
  const buyTicket = () =>
    setStatus(
      selected.length === 5
        ? `Your ${draw.name} picks are ready: ${selected
            .map((n) => String(n).padStart(2, "0"))
            .join(" · ")}`
        : "Choose five numbers to continue."
    );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#faf8eb] px-4 py-7 text-[#073e30] sm:px-7 sm:py-9 lg:px-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-32 -z-0 size-[360px] rounded-full bg-gradient-to-br from-[#179748] via-[#d1dc42] to-[#ffce22]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 -z-0 h-48 w-52 bg-[radial-gradient(#f5c832_1.5px,transparent_1.5px)] bg-[size:15px_15px] opacity-60"
      />
      <div className="relative z-10 mx-auto max-w-[1460px]">
        <a
          href="/#games"
          className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-[#07553b] shadow-sm transition hover:bg-white"
        >
          <ArrowLeft size={17} />
          All draws
        </a>
        <header className="mx-auto mb-8 mt-5 max-w-4xl text-center sm:mb-10">
          <span className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#13a342] to-[#006739] px-7 py-2 text-lg font-extrabold italic text-white shadow-[0_4px_0_#07552f] sm:text-xl">
            <span className="text-xl text-[#ffcf16]">✦</span>Our Draws
            <span className="text-xl text-[#ffcf16]">✦</span>
          </span>
          <h1 className="mt-4 text-4xl font-black italic leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Pick Your Numbers &amp; Win Big!
          </h1>
          <p className="mt-2 text-base font-semibold sm:text-lg">
            Choose your lucky numbers and join our next draw. Who knows? It
            could be you!
          </p>
          <div className="mx-auto mt-3 h-1.5 w-32 -rotate-2 rounded-full bg-[#ffc400]" />
        </header>
        <div className="grid gap-6 lg:grid-cols-[1.04fr_.96fr] lg:gap-8">
          <section
            className={`relative isolate flex h-[300px] flex-col overflow-hidden rounded-[30px] bg-gradient-to-br ${draw.colors} p-5 shadow-[0_10px_0_#d8b44145] sm:p-8`}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 opacity-25 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:5px_5px]"
            />
            <div className="flex items-start justify-between gap-4"></div>
            <div className="my-auto py-8 text-center">
              <Crown
                className="mx-auto mb-1 h-12 w-12 fill-[#ffcf16] text-[#08613e] drop-shadow"
                strokeWidth={2.2}
              />
              <p className="text-[4.2rem] font-black leading-[.9] tracking-[-.07em] text-white [paint-order:stroke_fill] [-webkit-text-stroke:3px_#075236] [filter:drop-shadow(0_7px_0_#075236)]">{`\u20a6${draw.jackpot}`}</p>
              <h2 className="mt-1 text-[4.2rem] font-black leading-none tracking-[-.04em] text-[#ffce08] [paint-order:stroke_fill] [-webkit-text-stroke:3px_#075236] [filter:drop-shadow(0_6px_0_#075236)]">
                JACKPOT
              </h2>
            </div>

            <p className="mt-5 text-center text-xl font-black italic text-white drop-shadow sm:text-2xl">
              Dream Bigger. Play Today!
            </p>
            <div
              aria-hidden="true"
              className="absolute -bottom-12 -left-5 -z-10 h-20 w-[110%] -rotate-3 rounded-[50%] border-t-[15px] border-[#087a42]/80 bg-[#00603a]/90"
            />
          </section>
          <section className="overflow-hidden rounded-[30px] border border-[#e5dfc7] bg-white/95 shadow-[0_10px_0_#e7d9b855]">
            <div className="flex items-center gap-3 rounded-br-[40px] bg-gradient-to-r from-[#006a3e] to-[#008144] px-5 py-4 text-white sm:px-7">
              <Ticket className="-rotate-12 text-[#ffd21c]" size={34} />
              <h2 className="text-xl font-black sm:text-2xl">
                Pick Your Numbers
              </h2>
            </div>
            <div className="p-4 sm:p-6 lg:p-7">
              <div className="mb-4 flex items-center justify-between gap-2 text-sm font-bold sm:mb-5 sm:text-base">
                <span>Choose 5 numbers from 1 to 50</span>
                <span className="rounded-full bg-[#eaf6df] px-3 py-1 text-[#087443]">
                  {selected.length}/5
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2 sm:grid-cols-10 sm:gap-2.5">
                {Array.from({ length: 50 }, (_, i) => i + 1).map((number) => {
                  const active = selected.includes(number);
                  return (
                    <button
                      key={number}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggle(number)}
                      className={`aspect-square rounded-full border-2 text-sm font-extrabold transition hover:-translate-y-0.5 hover:border-[#12804b] sm:text-base ${
                        active
                          ? "border-[#05733f] bg-[#078248] text-white shadow-[0_3px_0_#004c31]"
                          : "border-[#0b5039]/70 bg-white text-[#083e30] hover:bg-[#eff9e5]"
                      }`}
                    >
                      {number}
                    </button>
                  );
                })}
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={quickPick}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#94c57c] bg-[#f5f8e8] px-3 font-extrabold text-[#087643] transition hover:bg-[#e8f3d8]"
                >
                  <RefreshCw size={18} />
                  Quick Pick
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelected([]);
                    setStatus("");
                  }}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#94b99b] bg-white px-3 font-extrabold text-[#073e30] transition hover:bg-[#f3f7ef]"
                >
                  <Trash2 size={18} />
                  Clear
                </button>
              </div>
              <button
                type="button"
                onClick={buyTicket}
                className="mt-5 flex min-h-[62px] w-full items-center justify-center gap-3 rounded-full border-b-[6px] border-[#075236] bg-gradient-to-b from-[#ffdb18] to-[#ffb400] px-5 text-xl font-black text-[#073e30] shadow-md transition hover:brightness-105 active:translate-y-1 active:border-b-2 sm:text-2xl"
              >
                Buy Ticket <ArrowRight size={25} />
              </button>
              {status && (
                <p
                  role="status"
                  className={`mt-4 rounded-xl px-3 py-2 text-center text-sm font-bold ${
                    selected.length === 5
                      ? "bg-[#e8f6df] text-[#075c39]"
                      : "bg-amber-50 text-amber-800"
                  }`}
                >
                  {selected.length === 5 && (
                    <Check className="mr-1 inline" size={16} />
                  )}
                  {status}
                </p>
              )}
              <p className="mt-3 text-center text-xs text-[#617567]">
                Ticket price: <b>{`\u20a6${draw.price}`}</b> · Your 5 picks make
                up one entry.
              </p>
            </div>
          </section>
        </div>
        {/* <section
          aria-label="Why play with us"
          className="mt-8 grid gap-4 rounded-[26px] border border-[#9ed37d] bg-gradient-to-r from-[#e6f8c8] via-[#f2f9d4] to-[#d7f1b4] p-5 sm:grid-cols-3 sm:gap-2 sm:px-8 sm:py-6"
        >
          <div className="flex items-center justify-center gap-3 sm:border-r sm:border-[#9bc98a]">
            <ShieldCheck className="size-10 shrink-0 text-[#087443] sm:size-12" />
            <span>
              <b className="block text-lg font-black">Secure &amp; Fair</b>
              <small>Trusted and transparent draws</small>
            </span>
          </div>
          <div className="flex items-center justify-center gap-3 sm:border-r sm:border-[#9bc98a]">
            <Zap className="size-10 shrink-0 fill-[#ffcf16] text-[#087443] sm:size-12" />
            <span>
              <b className="block text-lg font-black">Instant Results</b>
              <small>Check your numbers quickly</small>
            </span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Trophy className="size-10 shrink-0 fill-[#ffcf16] text-[#087443] sm:size-12" />
            <span>
              <b className="block text-lg font-black">Big Wins</b>
              <small>Life-changing prizes</small>
            </span>
          </div>
        </section> */}
      </div>
    </main>
  );
}
