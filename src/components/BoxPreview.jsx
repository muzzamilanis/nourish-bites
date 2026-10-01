import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BITES = ['#6b3e24', '#c4a056', '#8a5a32', '#3d4a32', '#a9743f', '#1c3a2e', '#d8ab5e', '#5c4030']

export default function BoxPreview() {
  const [on, setOn] = useState(Array(8).fill(false))
  const [sealed, setSealed] = useState(false)
  const [colors, setColors] = useState(BITES)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setOn(Array(8).fill(true))
      setSealed(true)
      return undefined
    }
    let timers = []
    let alive = true
    const clear = () => { timers.forEach(clearTimeout); timers = [] }

    function cycle(shift = 0) {
      if (!alive) return
      clear()
      setSealed(false)
      setOn(Array(8).fill(false))
      setColors(BITES.map((_, i) => BITES[(i + shift) % BITES.length]))
      BITES.forEach((_, i) => {
        timers.push(setTimeout(() => {
          setOn((curr) => curr.map((v, idx) => (idx === i ? true : v)))
        }, 260 * i))
      })
      timers.push(setTimeout(() => setSealed(true), 260 * 8 + 380))
      timers.push(setTimeout(() => cycle(shift + 3), 260 * 8 + 380 + 2600))
    }
    cycle(0)
    return () => { alive = false; clear() }
  }, [])

  return (
    <div className={`hbx ${sealed ? 'hbx--sealed' : ''}`} aria-hidden="true">
      <div className="kicker" style={{ color: '#e8c98a' }}>Live preview</div>
      <div className="hbx__grid">
        {colors.map((c, i) => (
          <div className={`hbx__cell ${on[i] ? 'is-in' : ''}`} key={`${c}-${i}`}>
            <div className="hbx__bite" style={{ background: `radial-gradient(circle at 40% 35%, #f4efe4, ${c} 72%)` }} />
          </div>
        ))}
      </div>
      <div className="hbx__seal">SEALED</div>
      <Link to="/build" className="btn btn-gold" style={{ marginTop: 14 }}>Build this box</Link>
    </div>
  )
}

export function BuildFab() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector('.hero')
      const boxes = document.getElementById('boxes')
      const pastHero = window.scrollY > ((hero?.offsetHeight || 420) * 0.7)
      let inBoxes = false
      if (boxes) {
        const r = boxes.getBoundingClientRect()
        inBoxes = r.top < window.innerHeight * 0.7 && r.bottom > window.innerHeight * 0.3
      }
      setVisible(pastHero && !inBoxes)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <Link className={`fab-build ${visible ? 'is-visible' : ''}`} to="/build">
      <span aria-hidden="true">▣</span> Build a box
    </Link>
  )
}
