export type GameTone = 'yellow' | 'green' | 'orange' | 'blue' | 'white'

export type Game = {
  id: string
  when: string
  ribbon?: string
  closingInMinutes?: number
  tone: GameTone
  mark: { title: string; subtitle?: string; balls: string[] }
  prize: string
  tagline: string
  price: string
}

export const drawGames: Game[] = [
  {
    id: 'mega-jackpot',
    when: 'This Saturday',
    ribbon: 'Twice weekly',
    tone: 'yellow',
    mark: { title: 'Mega Jackpot', subtitle: 'Naira', balls: ['7', '45'] },
    prize: '₦1 Billion',
    tagline: 'One ticket. One billion reasons to dream.',
    price: '₦500',
  },
  {
    id: 'sunrise-sunset',
    when: 'Tomorrow',
    ribbon: 'Twice daily',
    tone: 'green',
    mark: { title: '7/49', subtitle: 'Sunrise & Sunset', balls: ['7', '49'] },
    prize: '₦72.4M',
    tagline: 'A fresh chance at dawn and at dusk.',
    price: '₦300',
  },
  {
    id: 'daily-five',
    when: 'Tomorrow',
    tone: 'yellow',
    mark: { title: 'Daily 5', subtitle: 'Lottery', balls: ['5', '39'] },
    prize: '₦48.2M',
    tagline: 'Pick five. Change everything.',
    price: '₦200',
  },
  {
    id: 'classic-lotto',
    when: 'Tomorrow',
    tone: 'white',
    mark: { title: 'Classic Lotto', subtitle: 'Direct', balls: ['5', '90'] },
    prize: 'Direct 2 ×240',
    tagline: 'The lotto your parents played.',
    price: '₦5',
  },
  {
    id: 'quick-four',
    when: 'Today',
    tone: 'orange',
    closingInMinutes: 14,
    mark: { title: 'Quick 4', subtitle: 'Hourly', balls: ['4'] },
    prize: '₦500K',
    tagline: 'Feeling lucky this hour?',
    price: '₦100',
  },
  {
    id: 'keno',
    when: 'Today',
    tone: 'green',
    mark: { title: 'Keno', subtitle: 'Pick 1–10', balls: ['1', '2', '3'] },
    prize: '₦150K',
    tagline: 'Choose more numbers, unlock more ways to win.',
    price: '₦100',
  },
  {
    id: 'quick-three',
    when: 'Today',
    tone: 'yellow',
    mark: { title: 'Quick 3', subtitle: 'Hourly', balls: ['3'] },
    prize: '₦50K',
    tagline: 'Three numbers, every single hour.',
    price: '₦100',
  },
]

export const instantGames: Game[] = [
  {
    id: 'scratch-million',
    when: 'Instant',
    tone: 'yellow',
    mark: { title: 'Scratch', subtitle: '1 Million', balls: ['5', '90'] },
    prize: '₦1M',
    tagline: 'Reveal it now. Win it now.',
    price: '₦100',
  },
  {
    id: 'flash-million',
    when: 'Instant',
    tone: 'blue',
    mark: { title: 'Flash Win', subtitle: '1 Million', balls: ['4', '40'] },
    prize: '₦1M',
    tagline: 'Seconds to play, a lifetime to enjoy.',
    price: '₦100',
  },
  {
    id: 'lucky-hundred',
    when: 'Instant',
    tone: 'orange',
    mark: { title: 'Lucky Tap', subtitle: '100,000', balls: ['3', '30'] },
    prize: '₦100K',
    tagline: 'Small stake, quick smiles.',
    price: '₦100',
  },
]

export const winners = [
  { name: 'Ngozi', headline: 'Shop Restocked', amount: '₦750,000', image: '/images/story-1.png' },
  { name: 'Tunde', headline: 'New Wheels', amount: '₦1,200,000', image: '/images/story-2.png' },
  { name: 'Amaka', headline: 'School Fees Sorted', amount: '₦640,000', image: '/images/story-3.png' },
]
