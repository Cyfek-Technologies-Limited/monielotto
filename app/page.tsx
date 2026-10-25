import { GameSection } from '@/components/game-card'
import { Hero } from '@/components/hero'
import { PromoCarousel } from '@/components/promo-carousel'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Winners } from '@/components/winners'
import { drawGames, instantGames } from '@/lib/games'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PromoCarousel />
        <GameSection id="draw-games" title="Draw Games" games={drawGames} />
        <GameSection id="instant-games" title="Instant Games" games={instantGames} />
        <Winners />
      </main>
      <SiteFooter />
    </>
  )
}
