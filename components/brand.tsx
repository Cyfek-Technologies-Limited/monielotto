import { cn } from '@/lib/utils'

const ballColors = ['bg-brand-orange', 'bg-brand-green', 'bg-brand-yellow', 'bg-brand-blue']

export function Ball({
  label,
  index = 0,
  className,
}: {
  label: string
  index?: number
  className?: string
}) {
  return (
    <span
      className={cn(
        'relative inline-flex size-10 items-center justify-center rounded-full border-[3px] border-brand-ink shadow-[inset_-4px_-4px_0_rgba(0,0,0,0.15)]',
        ballColors[index % ballColors.length],
        className,
      )}
    >
      <span className="flex size-[62%] items-center justify-center rounded-full bg-white text-sm font-extrabold leading-none text-brand-ink">
        {label}
      </span>
    </span>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-1.5', className)}>
      <span className="relative flex" aria-hidden="true">
        <Ball label="" index={0} className="size-7 border-2" />
        <Ball label="" index={1} className="-ml-3 mt-2.5 size-5 border-2" />
      </span>
      <span className="text-2xl font-extrabold tracking-tight text-brand-ink">
        Naira<span className="text-brand-green">Luck</span>
      </span>
    </span>
  )
}

export function GameMark({
  title,
  subtitle,
  balls,
  size = 'md',
}: {
  title: string
  subtitle?: string
  balls: string[]
  size?: 'md' | 'lg'
}) {
  return (
    <div className="flex items-end gap-1" aria-hidden="true">
      <div className="flex -space-x-2">
        {balls.map((b, i) => (
          <Ball
            key={b + i}
            label={b}
            index={i}
            className={cn(size === 'lg' ? 'size-14' : 'size-11', i % 2 === 1 && 'translate-y-2')}
          />
        ))}
      </div>
      <div className="flex -rotate-3 flex-col items-start">
        <span
          className={cn(
            'whitespace-nowrap rounded-md border-[3px] border-brand-ink bg-brand-ink px-2 font-extrabold uppercase leading-tight text-white',
            size === 'lg' ? 'text-3xl' : 'text-xl',
          )}
        >
          {title}
        </span>
        {subtitle && (
          <span className="-mt-1 ml-3 rounded-sm bg-white px-1.5 text-xs font-extrabold uppercase text-brand-ink ring-2 ring-brand-ink">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  )
}

export function PatternStrip({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn('pattern-strip h-6 w-full -skew-y-1', className)} />
}
