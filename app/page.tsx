"use client";

import { useState } from 'react';
import {
  Bell,
  ChevronDown,
  ChevronRight,
  Clock,
  Coins,
  Dices,
  Gamepad2,
  Gift,
  Heart,
  HomeIcon,
  LayoutGrid,
  Menu,
  MessageCircle,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  Spade,
  Star,
  Tag,
  Ticket,
  Trophy,
  Users,
  Wallet,
} from "lucide-react";

type Item = readonly [React.ElementType, string];

const mainNav: Item[] = [
  [HomeIcon, "Home"],
  [Tag, "Promotions"],
  [Trophy, "Challenges"],
  [Gift, "Giveaways"],
];
const activityNav: Item[] = [
  [Heart, "Favorites"],
  [Clock, "Recent"],
  [Gamepad2, "My Game Play"],
];
const gameNav: Item[] = [
  [Star, "Featured"],
  [Sparkles, "New Releases"],
  [Dices, "Slot Games"],
  [Users, "Live Dealers"],
  [LayoutGrid, "Table Games"],
  [Spade, "Blackjack"],
  [Ticket, "Lottery"],
];
const winners = [
  ["01", "Kristin Watson", "#8052", "300", "7,200 Coins", "08 Jul, 2026", "KW"],
  ["02", "Zohang786", "#7347", "200", "7,060 Coins", "01 Jul, 2026", "Z"],
  ["03", "Adewale O.", "#1802", "120", "2,500 Coins", "28 Jun, 2026", "AO"],
];
const liveWinners = [
  ["KW", "Kristin W."],
  ["Z", "Zohang786"],
  ["AO", "Adewale O."],
  ["AF", "Albert F."],
  ["DR", "Dianne R."],
];
const chat = [
  ["KD", "KTT Darling", "Adding 10 more tickets today!", "2m"],
  ["JW", "Jenny Wilson", "More tickets, more chances! ???", "5m"],
  ["AF", "Albert Flores", "Congrats to today's winners 🎉", "12m"],
];

function NavGroup({ items, active }: { items: Item[]; active?: string }) {
  return (
    <>
      {items.map(([Icon, label]) => (
        <a
          key={label}
          href={label === "Lottery" ? "#buy" : "#"}
          className={`group flex min-h-9 items-center gap-3 rounded-lg px-3 text-[12px] font-medium transition hover:bg-white/[0.06] hover:text-white ${
            label === active
              ? "border border-violet-400/20 bg-violet-500/15 text-white"
              : "text-[#a2a2be]"
          }`}
        >
          <Icon size={16} strokeWidth={1.8} />
          <span>{label}</span>
          {label === "Promotions" && (
            <span className="ml-auto rounded bg-violet-500 px-1.5 py-0.5 text-[9px] text-white">
              3
            </span>
          )}
        </a>
      ))}
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 px-3 text-[9px] font-extrabold tracking-[1.5px] text-[#72738f]">
      {children}
    </p>
  );
}

export default function Home() {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [notice, setNotice] = useState("");
  const [ticketPurchased, setTicketPurchased] = useState(false);
  const toggleNumber = (n: number) => { setNotice(""); setTicketPurchased(false); setSelectedNumbers((xs) => xs.includes(n) ? xs.filter((x) => x !== n) : xs.length < 5 ? [...xs, n].sort((a,b) => a-b) : xs); };
  const buyTicket = () => { if (selectedNumbers.length !== 5) { setNotice("Choose five numbers to continue."); return; } setTicketPurchased(true); setNotice("Your ticket is ready for the next draw!"); };
  return (
    <div className="min-h-screen bg-[#080916] text-[#f7f6ff] font-sans">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[210px_minmax(0,1fr)] xl:grid-cols-[226px_minmax(0,1fr)]">
        <aside className="sticky top-0 z-20 hidden h-screen flex-col gap-5 overflow-y-auto border-r border-violet-200/[0.08] bg-gradient-to-b from-[#0e0d20] to-[#090a17] px-4 py-5 md:flex">
          <a
            href="#"
            className="flex items-center gap-2.5 px-1 text-base font-extrabold tracking-wide"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-violet-400 to-violet-700 shadow-[0_0_24px_#8754ff45]">
              <Dices size={22} />
            </span>
            Monie<span className="-ml-2 text-violet-300">Lotto</span>
          </a>
          <div className="flex items-center gap-2.5 rounded-xl border border-violet-200/10 bg-gradient-to-r from-[#191630] to-[#111226] p-3">
            <span className="grid size-9 place-items-center rounded-full bg-violet-950 text-xl">
              JD
            </span>
            <span className="min-w-0 flex-1">
              <b className="block text-xs">John Doe</b>
              <small className="mt-1 flex items-center gap-1 text-[9px] text-amber-300">
                <ShieldCheck size={11} /> VIP Gold Member
              </small>
            </span>
            <ChevronRight size={15} className="text-[#898ba9]" />
          </div>
          <div>
            <SectionLabel>MAIN MENU</SectionLabel>
            <nav className="grid gap-1">
              <NavGroup items={mainNav} active="Home" />
            </nav>
          </div>
          <div>
            <SectionLabel>MY ACTIVITY</SectionLabel>
            <nav className="grid gap-1">
              <NavGroup items={activityNav} />
            </nav>
          </div>
          <div>
            <SectionLabel>EXPLORE GAMES</SectionLabel>
            <nav className="grid gap-1">
              <NavGroup items={gameNav} active="Lottery" />
            </nav>
          </div>
          <div className="mt-auto rounded-xl border border-fuchsia-300/10 bg-[radial-gradient(circle_at_100%_0%,#b548ff20,transparent_60%),#131126] p-4">
            <span className="mb-3 grid size-8 place-items-center rounded-lg bg-violet-400/15 text-violet-200">
              <Sparkles size={18} />
            </span>
            <b className="text-xs">Feeling lucky?</b>
            <p className="my-2 text-[10px] leading-relaxed text-[#898ba9]">
              Discover today&apos;s exciting rewards and special draws.
            </p>
            <a
              href="#buy"
              className="flex items-center text-[10px] font-bold text-violet-300"
            >
              Play now <ChevronRight size={14} />
            </a>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 border-t border-violet-200/10 pt-3 text-[11px] text-[#9a9ab3]"
          >
            <Settings size={16} />
            Settings
          </a>
        </aside>

        <div className="min-w-0">
          <header className="sticky top-0 z-10 flex min-h-[66px] items-center justify-between gap-3 border-b border-violet-200/[0.08] bg-[#0b0b19ed] px-4 backdrop-blur-xl sm:px-6 xl:px-8">
            <button
              className="grid size-9 place-items-center rounded-lg border border-violet-200/10 bg-[#151529] text-white md:hidden"
              aria-label="Open menu"
            >
              <Menu size={19} />
            </button>
            <label className="hidden h-9 w-[min(330px,35%)] items-center gap-2 rounded-lg border border-white/[0.08] bg-[#141427] px-3 text-[#81829f] sm:flex">
              <Search size={15} />
              <input
                placeholder="Search games, promotions..."
                className="min-w-0 flex-1 bg-transparent text-[11px] text-white outline-none placeholder:text-[#777892]"
              />
              <kbd className="rounded border border-white/10 px-1 text-[9px]">
                ? K
              </kbd>
            </label>
            <div className="ml-auto flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#151529] px-2.5 py-2 text-[10px] font-bold sm:px-3">
                <i className="size-3.5 rounded-full border border-amber-100 bg-[radial-gradient(circle_at_32%_28%,#fff2a0,#ffc52e_50%,#d9890b)]" />
                8,840
              </span>
              <span className="hidden items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#151529] px-3 py-2 text-[10px] font-bold sm:flex">
                <i className="size-3.5 rounded-full border border-pink-200 bg-[radial-gradient(circle_at_32%_28%,#ffd3ed,#f653b5_50%,#b820a4)]" />
                100.00
              </span>
              <button className="flex items-center gap-1.5 rounded-full border border-violet-300/40 bg-gradient-to-r from-violet-700 to-purple-500 px-3 py-2.5 text-[9px] font-extrabold tracking-wide text-white">
                <Wallet size={14} /> WALLET
              </button>
              <button
                className="relative hidden size-9 place-items-center rounded-lg border border-white/[0.08] bg-[#151529] text-[#b7b5d1] sm:grid"
                aria-label="Notifications"
              >
                <Bell size={16} />
                <i className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-pink-400" />
              </button>
              <button className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-[#151529] p-1 pr-2 text-[10px] sm:flex">
                <span className="grid size-7 place-items-center rounded-full bg-violet-950 text-base">
                  JD
                </span>
                Use***80fb
                <ChevronDown size={12} />
              </button>
            </div>
          </header>

          <main className="mx-auto flex w-full max-w-[1600px] flex-col gap-5 p-4 sm:p-6 xl:px-8">
            <section className="relative isolate -mx-4 -mt-4 -mb-5 flex min-h-[680px] aspect-auto items-start overflow-hidden bg-transparent sm:mx-0 sm:my-0 sm:aspect-[2.45/1] sm:min-h-[370px] sm:items-center sm:rounded-2xl sm:border sm:border-violet-300/15 sm:bg-[#09072c] sm:bg-cover sm:bg-center sm:shadow-[0_16px_50px_#00000018] xl:min-h-[410px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 hidden bg-cover bg-center sm:block"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#08072bf5 0%,#0b0737e8 25%,#100847a8 43%,#17094a25 65%,transparent 100%),linear-gradient(0deg,#0906215c,transparent 27%),url('/lottery-hero.png')",
                }}
              />
              <img
                src="/images/lottery-cat-machine.png"
                alt="A dressed-up ginger cat presenting a purple lottery machine filled with numbered balls"
                fetchPriority="high"
                className="absolute  bottom-38 left-1/2 z-0 w-[105%] max-w-none -translate-x-1/2 sm:hidden"
              />
              <div className="relative  z-10 w-full px-5 pt-9 pb-[300px] sm:max-w-[600px] sm:px-10 sm:py-10 xl:px-14">
                <h1 className="hidden lg:block text-balance text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-1.7px] text-white drop-shadow-[0_2px_22px_#08072c99]">
                  MonieLotto —<br className="hidden lg-block" />
                  <span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
                    Your chance to win big
                  </span>
                </h1>

                <h1 className="lg:hidden text-balance text-center text-[clamp(2.3rem,5vw,4.5rem)] font-extrabold leading-[1.08] tracking-[-1.7px] text-white drop-shadow-[0_2px_22px_#08072c99]">
                  <span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
                    Win Big With MonieLotto
                  </span>
                </h1>
                <p className="hidden lg:block mt-4 max-w-[370px] text-xs leading-7 text-violet-100/90 sm:text-[13px]">
                  Your next big win could be one ticket away. Join the draw,
                  test your luck, and unlock exciting rewards.
                </p>
                <div className="mt-5 lg:justify-start justify-center flex flex-wrap items-center gap-x-5 gap-y-3">
                  <a
                    href="#buy"
                    className="inline-flex min-h-10 items-center gap-3 rounded-full border border-white bg-gradient-to-r from-white to-violet-100 px-5 text-[10px] font-extrabold tracking-wide text-[#17102a] shadow-[0_0_22px_#b69bff28] transition hover:-translate-y-0.5 hover:bg-violet-200"
                  >
                    GET YOUR TICKETS <ChevronRight size={15} />
                  </a>
                  <a
                    href="#winners"
                    className="text-[10px] font-semibold text-violet-100 hover:text-white"
                  >
                    View previous winners
                  </a>
                </div>
              </div>
            </section>

            <section className="grid gap-3 rounded-2xl border border-violet-200/10 bg-[#111226] p-3 sm:grid-cols-2 xl:grid-cols-[1.25fr_1fr_1fr_1fr] xl:items-center xl:p-4">
              <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#191630] to-[#111226] p-3">
                <span className="grid size-10 place-items-center rounded-full bg-amber-400/10 text-xl">
                  ??
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-xs font-bold">
                    John Doe{" "}
                    <span className="flex items-center gap-1 rounded bg-amber-400/10 px-1.5 py-1 text-[8px] text-amber-300">
                      <Trophy size={10} /> GOLD VIP
                    </span>
                  </div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400" />
                  </div>
                  <div className="mt-1 flex justify-between text-[8px] text-[#898ba9]">
                    <span>205 tickets purchased</span>
                    <span>Level 4 · Level 5</span>
                  </div>
                </div>
              </div>
              <Stat
                icon={Ticket}
                title="Your Tickets"
                value="205"
                trend="+12%"
                tone="violet"
              />
              <Stat
                icon={Coins}
                title="Total Tickets"
                value="1,000,025"
                tone="amber"
              />
              <Stat
                icon={Trophy}
                title="Win Chance"
                value="0.0015%"
                tone="green"
              />
            </section>

            <section className="rounded-2xl border border-violet-200/10 bg-[#111226] p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm font-bold">Live Winners</h2>
                  <p className="mt-1 text-[10px] text-[#898ba9]">
                    See who&apos;s winning right now
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-1 text-[9px] font-bold text-emerald-300">
                    <i className="size-1.5 rounded-full bg-emerald-300" />
                    LIVE
                  </span>
                  <button className="rounded-md bg-violet-400/15 px-2.5 py-1.5 text-[9px] text-violet-100">
                    This week
                  </button>
                  <button className="hidden rounded-md px-2 py-1.5 text-[9px] text-[#898ba9] sm:block">
                    24 hours
                  </button>
                </div>
              </div>
              <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-5">
                {liveWinners.map(([avatar, name], index) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 rounded-xl border border-violet-200/[0.06] bg-[#171832] p-2.5"
                  >
                    <span className="grid size-8 place-items-center rounded-lg bg-violet-950 text-[10px] font-bold">
                      {avatar}
                    </span>
                    <div className="min-w-0 flex-1">
                      <small className="block truncate text-[9px] text-[#898ba9]">
                        {name}
                      </small>
                      <strong className="mt-1 flex items-center gap-1 text-[10px]">
                        <i className="size-2.5 rounded-full bg-[radial-gradient(circle_at_32%_28%,#fff2a0,#ffc52e_50%,#d9890b)]" />
                        +{(index + 1) * 1200} Coins
                      </strong>
                    </div>
                    <span className="text-emerald-300">?</span>
                  </div>
                ))}
              </div>
            </section>

            <div
              id="buy"
              className="grid scroll-mt-20 gap-4 xl:grid-cols-[1.1fr_.9fr]"
            >
              <section className="rounded-2xl border border-violet-200/10 bg-gradient-to-br from-[#17162e] to-[#111226] p-4 sm:p-6">
                <div className="mb-5 flex items-start justify-between">
                  <div>
                    <span className="text-[9px] font-extrabold tracking-[1.6px] text-violet-300">
                      JOIN THE DRAW
                    </span>
                    <h2 className="mt-1 text-base font-bold">
                      Choose your numbers
                    </h2>
                    <p className="mt-1 text-[10px] text-[#898ba9]">
                      Pick 5 numbers from 1 to 50 for your ticket.
                    </p>
                  </div>
                  <span className="grid size-10 place-items-center rounded-xl bg-violet-400/15 text-violet-200">
                    <Ticket size={21} />
                  </span>
                </div>
                <div className="mb-2 flex justify-between text-[10px] font-semibold"><span>Your picks</span><span>{selectedNumbers.length} of 5 selected</span></div>
                <div className="mb-3 flex min-h-10 flex-wrap items-center gap-2 rounded-lg border border-violet-200/10 bg-[#0d0e20] p-2">{selectedNumbers.length ? selectedNumbers.map((n) => <span key={n} className="grid size-7 place-items-center rounded-full bg-violet-500 text-[10px] font-bold">{n}</span>) : <span className="text-[10px] text-[#777892]">Select five numbers below</span>}</div>
                <div className="grid grid-cols-5 gap-2 sm:grid-cols-10" aria-label="Choose five numbers">{Array.from({ length: 50 }, (_, i) => i + 1).map((n) => <button key={n} type="button" aria-pressed={selectedNumbers.includes(n)} onClick={() => toggleNumber(n)} className={`aspect-square rounded-full border text-[10px] font-bold ${selectedNumbers.includes(n) ? "border-violet-300 bg-violet-600 text-white" : "border-violet-200/10 bg-[#0d0e20] text-violet-100/75"}`}>{n}</button>)}</div>
                <div className="my-4 border-b border-violet-200/10 pb-4 text-[10px]"><p className="flex justify-between text-[#898ba9]">Price per ticket <b className="text-white">100 Coins</b></p></div>
                <button type="button" onClick={buyTicket} className="mt-1 flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 text-xs font-extrabold"><Ticket size={16} />{ticketPurchased ? "Ticket purchased" : "Guess it · Buy ticket"}<ChevronRight size={16} /></button>
                {notice && <p role="status" className="mt-3 text-center text-[10px] text-emerald-300">{notice}{ticketPurchased && <span className="block">Numbers: {selectedNumbers.join(" · ")}</span>}</p>}                <p className="mt-3 text-center text-[9px] text-[#898ba9]">
                  <span className="text-emerald-300">?</span> One ticket · 5 numbers · 100 Coins
                </p>
              </section>

              <aside className="flex min-h-[330px] flex-col rounded-2xl border border-violet-200/10 bg-[#111226] p-4 sm:p-5">
                <div className="flex items-center justify-between border-b border-violet-200/[0.08] pb-3">
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1.5 rounded-lg bg-violet-400/15 px-2.5 py-2 text-[10px] font-bold text-white">
                      <MessageCircle size={14} />
                      Chat Room
                    </button>
                    <button className="flex items-center gap-1.5 rounded-lg px-2 py-2 text-[10px] text-[#898ba9]">
                      <Bell size={14} />
                      Notifications
                    </button>
                  </div>
                  <button aria-label="Chat settings" className="text-[#898ba9]">
                    <Settings size={15} />
                  </button>
                </div>
                <div className="flex justify-between py-3 text-[9px] text-[#898ba9]">
                  <span className="flex items-center gap-1.5">
                    <i className="size-1.5 rounded-full bg-emerald-300" />
                    25 players online
                  </span>
                  <span>Community chat</span>
                </div>
                <div className="grid flex-1 content-start gap-2">
                  {chat.map(([avatar, name, message, time]) => (
                    <div
                      key={name}
                      className="flex gap-2.5 rounded-xl bg-[#171832] p-3"
                    >
                      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-violet-950 text-[10px] font-bold">
                        {avatar}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex justify-between gap-2 text-[10px]">
                          <b>{name}</b>
                          <small className="text-[#898ba9]">{time}</small>
                        </div>
                        <p className="mt-1 text-[10px] leading-relaxed text-[#a2a2be]">
                          {message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex h-10 items-center gap-2 rounded-lg border border-violet-200/10 bg-[#0d0e20] px-3">
                  <input
                    placeholder="Send a message..."
                    aria-label="Send a message"
                    className="min-w-0 flex-1 bg-transparent text-[10px] outline-none placeholder:text-[#777892]"
                  />
                  <button aria-label="Send message" className="text-violet-300">
                    <Send size={15} />
                  </button>
                </div>
              </aside>
            </div>

            <section
              id="winners"
              className="scroll-mt-20 rounded-2xl border border-violet-200/10 bg-[#111226] p-4 sm:p-5"
            >
              <div className="mb-4 flex items-end justify-between gap-3">
                <div>
                  <span className="text-[9px] font-extrabold tracking-[1.6px] text-violet-300">
                    THE LUCKY ONES
                  </span>
                  <h2 className="mt-1 text-base font-bold">Previous Winners</h2>
                  <p className="mt-1 text-[10px] text-[#898ba9]">
                    Celebrate the latest winners and their rewards.
                  </p>
                </div>
                <a
                  href="#winners"
                  className="flex shrink-0 items-center text-[9px] font-semibold text-violet-300 hover:text-white"
                >
                  View all <ChevronRight size={14} />
                </a>
              </div>
              <div className="overflow-x-auto">
                <div className="min-w-[650px]">
                  <div className="grid grid-cols-[.4fr_1.5fr_1fr_1fr_1.3fr_1fr] gap-2 border-b border-violet-200/10 px-2 py-3 text-center text-[8px] font-bold tracking-wide text-[#72738f]">
                    <span>RANK</span>
                    <span>WINNER</span>
                    <span>WINNING TICKET</span>
                    <span>TOTAL TICKETS</span>
                    <span>PRIZE</span>
                    <span>DATE</span>
                  </div>
                  {winners.map(
                    ([rank, name, ticket, total, prize, date, avatar]) => (
                      <div
                        key={rank}
                        className="grid grid-cols-[.4fr_1.5fr_1fr_1fr_1.3fr_1fr] items-center gap-2 border-b border-violet-200/[0.06] px-2 py-3 text-center text-[9px] text-violet-100/80"
                      >
                        <span
                          className={`font-bold ${
                            rank === "01" ? "text-amber-300" : "text-[#898ba9]"
                          }`}
                        >
                          {rank}
                        </span>
                        <span className="flex items-center gap-2 text-left">
                          <i className="grid size-7 shrink-0 place-items-center rounded-full bg-violet-950 text-[9px] font-bold not-italic">
                            {avatar}
                          </i>
                          <b className="truncate">{name}</b>
                        </span>
                        <span>{ticket}</span>
                        <span>{total}</span>
                        <span className="font-semibold text-emerald-300">
                          {prize}
                        </span>
                        <span className="text-[#898ba9]">{date}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </section>
            <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-violet-200/[0.08] pt-4 text-[9px] text-[#898ba9]">
              <span>© 2026 MonieLotto. Play responsibly.</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white">
                  Terms
                </a>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
                <a href="#" className="hover:text-white">
                  Help &amp; Support
                </a>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  title,
  value,
  trend,
  tone,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  trend?: string;
  tone: "violet" | "amber" | "green";
}) {
  const tones = {
    violet: "bg-violet-400/10 text-violet-300",
    amber: "bg-amber-300/10 text-amber-300",
    green: "bg-emerald-300/10 text-emerald-300",
  };
  return (
    <div className="flex items-center gap-3 rounded-xl border border-violet-200/[0.06] bg-[#171832] p-3">
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-xl ${tones[tone]}`}
      >
        <Icon size={19} />
      </span>
      <span className="min-w-0 flex-1">
        <small className="block text-[9px] text-[#898ba9]">{title}</small>
        <strong
          className={`mt-1 block truncate text-sm ${
            tone === "green" ? "text-emerald-300" : "text-white"
          }`}
        >
          {value}
        </strong>
      </span>
      {trend && (
        <small className="rounded-md bg-emerald-300/10 px-1.5 py-1 text-[8px] font-bold text-emerald-300">
          {trend}
        </small>
      )}
    </div>
  );
}
