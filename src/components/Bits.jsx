import { useEffect, useState } from 'react'

const WORDS = ['weekday', 'desk', 'gym bag', 'Eid tray']

export default function RotatingWord() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % WORDS.length), 2200)
    return () => clearInterval(id)
  }, [])
  return <span className="rotator" aria-live="polite"><b key={WORDS[i]}>{WORDS[i]}</b></span>
}

export function FlavorMarquee() {
  const line = 'Cacao almond  ·  Peanut oat  ·  Coconut vanilla  ·  Blueberry cashew  ·  Tahini sesame  ·  '
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">{line}{line}</div>
    </div>
  )
}

export function GiftMeter() {
  const [n, setN] = useState(20)
  useEffect(() => {
    const id = setInterval(() => setN((v) => (v >= 100 ? 20 : v + 20)), 1600)
    return () => clearInterval(id)
  }, [])
  return <div className="odo">${n}</div>
}
