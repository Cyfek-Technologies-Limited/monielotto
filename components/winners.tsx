import Image from 'next/image'
import Link from 'next/link'
import { winners } from '@/lib/games'

export function Winners() {
  return (
    <section id="winners" aria-labelledby="winners-title" className="mx-auto mt-12 max-w-xl px-4">
      <div className="flex items-center justify-between">
        <h2 id="winners-title" className="text-xl font-bold">
          Winners
        </h2>
        <Link href="#" className="rounded-md border-2 border-brand-ink px-2 text-sm font-bold">
          See all
        </Link>
      </div>
      <ul className="no-scrollbar mt-3 flex snap-x gap-3 overflow-x-auto pb-2">
        {winners.map((w) => (
          <li
            key={w.name}
            className="relative h-48 w-44 shrink-0 snap-start overflow-hidden rounded-lg border-[3px] border-brand-ink"
          >
            <Image src={w.image} alt="" fill sizes="176px" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-1 bg-gradient-to-t from-brand-ink/80 to-transparent p-2 pt-10">
              <span className="rounded bg-brand-yellow px-1.5 font-extrabold">{w.headline}</span>
              <span className="rounded bg-white px-1.5 text-sm font-bold">{w.amount}</span>
              <Link
                href="#"
                className="self-end rounded-md border-2 border-brand-ink bg-white px-2 text-xs font-bold"
              >
                Read {w.name}&apos;s story
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
