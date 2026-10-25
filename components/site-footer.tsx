import { ChevronDown, Mail, MessageCircle, Phone, Send } from 'lucide-react'
import Link from 'next/link'
import { Ball, PatternStrip } from './brand'

const groups = [
  { title: 'About us', links: ['Our story', 'Good causes', 'Careers', 'Press'] },
  { title: 'Support', links: ['Help centre', 'How to play', 'Claim a prize', 'Contact us'] },
]

const socials = [
  { label: 'Telegram', icon: Send },
  { label: 'Live chat', icon: MessageCircle },
  { label: 'Email us', icon: Mail },
  { label: 'Call us', icon: Phone },
]

export function SiteFooter() {
  return (
    <footer className="mt-16">
      <PatternStrip />
      <div className="bg-brand-ink pb-8 pt-10 text-white">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-center text-3xl font-bold">Play Responsibly</h2>
          <p className="mt-6 text-xl font-semibold leading-snug">
            Set a budget. Take a break when you need one. Our tools are here to keep you in control.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Link href="#" className="rounded-md border-2 border-white px-3 py-1 text-sm font-bold">
              Gambling Support
            </Link>
            <span className="flex size-9 items-center justify-center rounded-full border-2 border-brand-orange text-sm font-extrabold text-brand-orange">
              18+
            </span>
          </div>
          <p className="mt-4 text-center text-xs">
            Demo site. Not affiliated with any licensed lottery operator.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            {groups.map((g) => (
              <details key={g.title} className="group rounded-md border-2 border-white">
                <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2 text-sm font-bold">
                  {g.title}
                  <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <ul className="px-3 pb-3">
                  {g.links.map((l) => (
                    <li key={l}>
                      <Link href="#" className="block py-1 text-sm hover:text-brand-lime">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
            <Link href="#" className="rounded-md border-2 border-white py-2 text-center text-sm font-bold">
              Install the app
            </Link>
          </div>

          <ul className="mt-6 flex justify-center gap-5">
            {socials.map(({ label, icon: Icon }) => (
              <li key={label}>
                <Link href="#" aria-label={label} className="hover:text-brand-lime">
                  <Icon className="size-6" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t-2 border-dotted border-white/60 pt-6 text-center">
            <div className="flex justify-center" aria-hidden="true">
              <Ball label="" index={0} className="size-7 border-2" />
              <Ball label="" index={1} className="-ml-3 mt-2.5 size-5 border-2" />
            </div>
            <p className="mt-3 text-xs">
              {'© '}
              {new Date().getFullYear()} NairaLuck. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
