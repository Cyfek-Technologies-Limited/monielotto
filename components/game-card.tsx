import Link from 'next/link'
import type { Game, GameTone } from '@/lib/games'
import { cn } from '@/lib/utils'
import { GameMark } from './brand'
import { Countdown } from './countdown'

const toneStyles: Record<GameTone, { card: string; button: string }> = {
  yellow: { card: 'from-brand-yellow', button: 'bg-brand-yellow' },
  green: { card: 'from-brand-green', button: 'bg-brand-green' },
  orange: { card: 'from-brand-orange', button: 'bg-brand-orange' },
  blue: { card: 'from-brand-blue', button: 'bg-brand-blue' },
  white: { card: 'from-white', button: 'bg-brand-yellow' },
}

export function GameCard({ game }: { game: Game }) {
  const tone = toneStyles[game.tone]
  return (
    <article
      className={cn(
        'relative flex flex-col rounded-lg bg-gradient-to-b to-white p-4 shadow-[0_6px_18px_rgba(11,59,51,0.08)]',
        tone.card,
      )}
    >
      <span className="self-start rounded border border-brand-ink bg-white/60 px-1 text-[10px] font-bold">
        {game.when}
      </span>
      {game.ribbon && (
        <span className="absolute -right-1 top-2 rotate-12 rounded border-2 border-white bg-brand-green px-1.5 text-center text-[10px] font-extrabold uppercase leading-tight text-white">
          {game.ribbon}
        </span>
      )}
      {game.closingInMinutes && <Countdown minutes={game.closingInMinutes} />}

      <div className="mt-3 min-h-16">
        <GameMark {...game.mark} />
      </div>
      <h3 className="mt-4 text-2xl font-extrabold leading-none">{game.prize}</h3>
      <p className="mt-2 flex-1 font-bold leading-snug">{game.tagline}</p>
      <Link
        href="#"
        className={cn(
          'mt-4 rounded-md border-2 border-brand-ink py-0.5 text-center text-sm font-bold shadow-[0_3px_0_var(--color-brand-ink)] transition-transform active:translate-y-0.5 active:shadow-none',
          tone.button,
        )}
      >
        Play for {game.price}
        <span className="sr-only"> – {game.mark.title}</span>
      </Link>
    </article>
  )
}

export function GameSection({ id, title, games }: { id: string; title: string; games: Game[] }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto mt-12 max-w-xl px-4">
      <h2 id={`${id}-title`} className="text-xl font-bold">
        {title}
      </h2>
      <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>
    </section>
  )
}
