import { ArrowRight, Clover } from "lucide-react";

const links = ["Home", "Games", "Results", "How It Works", "About"];

const draws = [
  {
    slug: "1-billion",
    name: "1 Billion Draw",
    amount: "₦1 BILLION",
    ticket: "₦500",
    ball: "1",
    theme: "from-[#ffda18] via-[#ffd52b] to-[#ffb900]",
  },
  {
    slug: "85-million",
    name: "85 Million Draw",
    amount: "₦85 MILLION",
    ticket: "₦300",
    ball: "85",
    theme: "from-[#65de27] via-[#a7ec4b] to-[#57ce2a]",
  },
  {
    slug: "55-million",
    name: "55 Million Draw",
    amount: "₦55 MILLION",
    ticket: "₦200",
    ball: "55",
    theme: "from-[#ffad14] via-[#ffc13a] to-[#ff9e00]",
  },
  {
    slug: "600-thousand",
    name: "600 Thousand Draw",
    amount: "₦600,000",
    ticket: "₦100",
    ball: "600K",
    theme: "from-[#61d72b] via-[#a9ed4c] to-[#55ca2c]",
  },
  {
    slug: "150-thousand",
    name: "150 Thousand Draw",
    amount: "₦150,000",
    ticket: "₦100",
    ball: "150K",
    theme: "from-[#ffe33a] via-[#ffec6b] to-[#ffd31b]",
  },
  {
    slug: "60-thousand",
    name: "60 Thousand Draw",
    amount: "₦60,000",
    ticket: "₦100",
    ball: "60K",
    theme: "from-[#62d92d] via-[#b2ef57] to-[#54ca32]",
  },
];

export default function Home() {
  return (
    <main className="relative isolate min-h-[100svh] overflow-hidden bg-[#f8f6e9] text-[#064331]">
      <header className="absolute inset-y-0 top-0 z-20 mx-auto flex h-[116px] w-full max-w-[1530px] items-center justify-between gap-9 px-10 max-[900px]:h-[88px] max-[900px]:gap-[18px] max-[900px]:px-6 max-[640px]:relative max-[640px]:h-[76px] max-[640px]:bg-[#f8f6e9] max-[640px]:px-[17px]">
        <a
          href="#home"
          aria-label="LuckyTide home"
          className="flex shrink-0 items-center gap-3 text-[clamp(28px,3.3vw,49px)] font-black leading-none tracking-[-2px] text-[#064331] max-[900px]:gap-2 max-[900px]:text-[32px] max-[640px]:gap-1 max-[640px]:text-[27px] max-[640px]:tracking-[-1.5px]"
        >
          <Clover
            size={56}
            strokeWidth={2.7}
            className="shrink-0 fill-[#ffbd1b] text-[#064331] max-[900px]:size-[45px] max-[640px]:size-[38px]"
          />
          <span>MonieLotto</span>
        </a>
        <nav
          aria-label="Main navigation"
          className="flex flex-1 items-center justify-center gap-[clamp(22px,3vw,54px)] max-[900px]:gap-4 max-[640px]:hidden"
        >
          {links.map((link, index) => (
            <a
              key={link}
              href={index === 1 ? "#games" : index === 2 ? "#results" : "#home"}
              className={`relative whitespace-nowrap py-[14px] text-xl font-bold max-[900px]:text-[15px] ${
                index === 0
                  ? "after:absolute after:inset-x-0 after:bottom-[3px] after:h-[5px] after:rounded-full after:bg-[#ffb914]"
                  : ""
              }`}
            >
              {link}
            </a>
          ))}
        </nav>
        <a
          href="#games"
          className="flex h-[58px] min-w-[185px] shrink-0 items-center justify-center gap-[14px] rounded-full bg-[#ffb914] text-xl font-extrabold shadow-[0_5px_0_#d99005] transition duration-300 hover:-translate-y-[3px] hover:scale-[1.03] hover:shadow-[0_8px_0_#d99005] active:scale-95 max-[900px]:h-12 max-[900px]:min-w-[135px] max-[900px]:text-base max-[640px]:h-[43px] max-[640px]:min-w-0 max-[640px]:gap-1.5 max-[640px]:px-4 max-[640px]:text-sm"
        >
          Play Now <ArrowRight size={22} className="max-[640px]:size-[17px]" />
        </a>
      </header>

      <section
        id="home"
        className="mx-auto flex min-h-[100svh] max-w-[1680px] items-center px-[clamp(48px,8.3vw,140px)] pb-[14rem] pt-[145px] max-[900px]:px-[6vw] max-[900px]:pb-20 max-[900px]:pt-[100px]  relative isolate bg-[url('/luckytide-hero.png')] bg-cover bg-center max-[640px]:bg-[url('/tribal-mobile-bg.png')] max-[640px]:bg-[length:100%_100%] max-[640px]:bg-center max-[640px]:min-h-[calc(100svh-76px)] max-[640px]:items-start max-[640px]:px-6 max-[640px]:pb-12 max-[640px]:pt-[38px]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10  bg-[linear-gradient(90deg,rgba(0,35,25,.62)_0%,rgba(0,35,25,.5)_58%,rgba(0,35,25,.28)_100%)] max-[640px]:block"
        />
        <div className="relative z-20 w-[55%] pb-2.5 max-[900px]:w-[58%] max-[640px]:w-full">
          <h1 className="mb-[26px] -ml-2 flex w-fit max-w-full -rotate-2 flex-col text-[clamp(68px,8.2vw,138px)] font-black leading-[.78] tracking-[-.075em] text-[#fffdf1] [paint-order:stroke_fill] [-webkit-text-stroke:5px_#064331] [filter:drop-shadow(0_6px_0_#064331)] max-[900px]:text-[clamp(62px,9vw,92px)] max-[640px]:mb-[15px] max-[640px]:ml-[-3px] max-[640px]:text-[clamp(54px,14vw,78px)] max-[640px]:tracking-[-.08em] max-[640px]:[-webkit-text-stroke:3px_#064331]">
            <span className="whitespace-nowrap">Big Dreams</span>
            <strong className="block whitespace-nowrap pt-[15px] font-black text-[#ffb914] max-[640px]:pt-3">
              Bigger Wins
            </strong>
          </h1>

          <p className="font-bold mt-10 text-white my-10 mb-[15px] text-[clamp(17px,1.55vw,25px)] lg:font-semibold leading-[1.3] max-[900px]:my-5 max-[900px]:mb-[10px] max-[900px]:text-lg max-[640px]:mt-[3rem] max-[640px]:mb-[17px] max-[640px]:max-w-[330px] max-[640px]:text-base">
            Join thousands of players and stand a chance
            <br className="max-[640px]:hidden" /> to win amazing prizes.
            It&apos;s simple, fun and
            <br className="max-[640px]:hidden" /> could be your lucky day!
          </p>
          <div className="flex items-center gap-10 max-[640px]:gap-[23px]">
            <a
              href="#games"
              className="flex h-[73px] min-w-[220px] -rotate-3 items-center justify-center gap-[14px] rounded-[44px] border-[5px] border-[#064331] bg-[#ffb914] text-2xl font-extrabold shadow-[0_6px_0_#064331] transition duration-300 hover:-translate-y-[3px] hover:scale-[1.03] hover:shadow-[0_9px_0_#064331] active:scale-95 max-[900px]:h-[62px] max-[900px]:min-w-[180px] max-[900px]:text-xl max-[640px]:h-[54px] max-[640px]:min-w-[160px] max-[640px]:gap-2 max-[640px]:border-[3px] max-[640px]:text-lg"
            >
              Play Now{" "}
              <ArrowRight size={24} className="max-[640px]:size-[19px]" />
            </a>
            <a
              href="#games"
              className="text-white  border-b-[3px] border-[#147248] px-0 py-[7px] text-xl font-extrabold max-[640px]:text-base"
            >
              View Games
            </a>
          </div>
        </div>
      </section>
      <section
        id="games"
        className="relative isolate overflow-hidden bg-[#faf8eb] px-5 py-16 text-[#064331] sm:px-8 sm:py-20 lg:px-12"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-32 -z-10 size-[360px] rounded-full bg-gradient-to-br from-[#1a9b51] via-[#b7d848] to-[#ffcf1e]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-8 -z-10 h-40 w-64 bg-[radial-gradient(#f6cf42_1.5px,transparent_1.5px)] bg-[size:15px_15px] opacity-60"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-28 -z-10 size-[390px] rounded-full bg-gradient-to-tl from-[#168849] via-[#ffd328] to-transparent"
        />
        <div className="mx-auto max-w-[1450px]">
          <div className="mx-auto mb-9 max-w-4xl text-center sm:mb-10">
            <span className="relative inline-flex items-center rounded-full bg-gradient-to-r from-[#12a342] to-[#006b36] px-8 py-2 text-lg font-extrabold italic text-white shadow-[0_4px_0_#07552f] sm:text-2xl">
              <i
                aria-hidden="true"
                className="absolute -left-10 text-3xl not-italic text-[#ffc400]"
              >
                ✦
              </i>
              Our Draws
              <i
                aria-hidden="true"
                className="absolute -right-10 text-3xl not-italic text-[#ffc400]"
              >
                ✦
              </i>
            </span>
            <h2 className="mt-4 text-4xl font-black italic leading-tight tracking-tight text-[#064331] sm:text-5xl lg:text-6xl">
              Pick a Draw, Win Big!
            </h2>
            <div className="mx-auto mt-1 h-1.5 w-28 -rotate-2 rounded-full bg-[#ffca05]" />
            <p className="mt-3 text-base font-semibold text-[#174a38] sm:text-lg lg:text-xl">
              Choose from our exciting draws and get a ticket for your chance to
              win amazing prizes.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {draws.map((draw) => (
              <article
                key={draw.name}
                className={`group relative isolate min-h-[270px] overflow-hidden rounded-[26px] border-2 border-white/80 bg-gradient-to-br ${draw.theme} p-5 shadow-[0_5px_0_#d2b32a55] transition duration-200 hover:-translate-y-1 hover:shadow-xl sm:min-h-[290px] sm:p-6`}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]"
                />
                <span className="inline-flex rounded-full bg-[#064331] px-4 py-1.5 text-sm font-extrabold text-white shadow-sm sm:text-base">
                  {draw.name}
                </span>
                <span className="absolute right-4 top-4 grid size-[76px] place-items-center rounded-full border-[5px] border-white/80 bg-gradient-to-br from-white via-[#e9f3df] to-[#91c94a] text-xl font-black text-[#064331] shadow-[0_8px_16px_#194b2638] sm:right-5 sm:top-5 sm:size-[86px] sm:text-2xl">
                  {draw.ball}
                </span>
                <div className="relative z-10 mt-4 pr-10 text-center sm:mt-5">
                  <h3 className="text-[clamp(2rem,5vw,3.35rem)] font-black leading-[.92] tracking-[-.055em] text-white [paint-order:stroke_fill] [-webkit-text-stroke:2px_#064331] [filter:drop-shadow(0_4px_0_#064331)]">
                    {draw.amount}
                    <span className="mt-1 block text-[#ffcb08]">JACKPOT</span>
                  </h3>
                </div>
                <div className="relative z-10 mx-auto mt-4 flex max-w-[290px] items-center justify-center gap-2 rounded-full bg-[#fff9d8] px-4 py-2 text-base font-extrabold text-[#064331] shadow-sm sm:mt-5 sm:text-lg">
                  <span
                    aria-hidden="true"
                    className="grid size-7 rotate-[-25deg] place-items-center rounded-md bg-[#075b38] text-sm text-white"
                  >
                    ✦
                  </span>
                  Ticket:{" "}
                  <strong className="text-[#08753e]">{draw.ticket}</strong>
                </div>
                <a
                  href={`/draw/${draw.slug}`}
                  className="relative z-10 mx-auto mt-2 flex min-h-12 max-w-[290px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00643c] to-[#00452f] px-5 text-lg font-extrabold text-white shadow-[0_4px_0_#003d2c] transition duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-95 sm:min-h-[54px] sm:text-xl"
                >
                  Play Now <ArrowRight size={20} />
                </a>
                <div
                  aria-hidden="true"
                  className="absolute -bottom-12 -left-7 -z-10 h-20 w-[120%] -rotate-3 rounded-[50%] border-t-[15px] border-[#087a42]/80 bg-[#00603a]/90"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t-[6px] border-[#ffbf18] bg-[#063d2e] px-5 pb-6 pt-9 text-[#f8f4df] sm:px-8 sm:pt-11">
        <div className="mx-auto grid max-w-[1450px] gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-12">
          <div>
            <a href="#home" className="inline-flex items-center gap-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
              <Clover className="fill-[#ffbd1b] text-[#ffbd1b]" size={34} />
              Monie<span className="-ml-2 text-[#ffca26]">Lotto</span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#d7e4d9]">Pick your numbers, join a draw, and make room for a little luck.</p>
          </div>
          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-extrabold uppercase tracking-widest text-[#ffca26]">Explore</h2>
            <div className="mt-3 grid gap-2 text-sm text-[#e1ecdf]">
              <a className="transition hover:text-[#ffca26]" href="#home">Home</a>
              <a className="transition hover:text-[#ffca26]" href="#games">Draw Games</a>
              <a className="transition hover:text-[#ffca26]" href="#games">How to Play</a>
            </div>
          </nav>
          <div id="responsible-play">
            <h2 className="text-sm font-extrabold uppercase tracking-widest text-[#ffca26]">Play responsibly</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#d7e4d9]">Set a limit, take your time, and keep the fun in every draw.</p>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-[1450px] flex-col gap-2 border-t border-white/15 pt-4 text-xs text-[#c1d2c5] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 MonieLotto. All rights reserved.</span>
          <span>Choose 5 numbers from 1–50 · Play for fun</span>
        </div>
      </footer>
    </main>
  );
}
