import { useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { site, boxes, flavors, whatsappLink } from '../data/site'

export default function BuildBox() {
  const [params] = useSearchParams()
  const preset = params.get('box') || 'custom'
  const startBox = boxes.find((b) => b.id === preset) || boxes[3]

  const [boxId, setBoxId] = useState(startBox.id)
  const box = boxes.find((b) => b.id === boxId) || startBox
  const [sizeId, setSizeId] = useState(box.sizes[0].id)
  const [picked, setPicked] = useState(box.defaultFlavors || [])

  const size = box.sizes.find((s) => s.id === sizeId) || box.sizes[0]
  const maxFlavors = sizeId === 'l' ? 6 : 4

  const selected = useMemo(
    () => flavors.filter((f) => picked.includes(f.id)),
    [picked],
  )

  function chooseBox(id) {
    const next = boxes.find((b) => b.id === id)
    setBoxId(id)
    setSizeId(next.sizes[0].id)
    setPicked(next.defaultFlavors ? [...next.defaultFlavors] : [])
  }

  function toggleFlavor(id) {
    setPicked((curr) => {
      if (curr.includes(id)) return curr.filter((x) => x !== id)
      if (curr.length >= maxFlavors) return curr
      return [...curr, id]
    })
  }

  const message = [
    `Hi ${site.name}!`,
    `I want a ${box.name} (${size.label}, ${size.pieces}, $${size.price.toFixed(2)}).`,
    selected.length
      ? `Flavors: ${selected.map((f) => f.name).join(', ')}.`
      : 'Please recommend flavors.',
  ].join('\n')

  return (
    <>
      <Navbar />
      <main className="builder wrap">
        <p><Link to="/">← Back</Link></p>
        <h1>Build a box</h1>
        <p className="lede" style={{ margin: 0 }}>
          Pick the box, size, and flavors. The last step is still WhatsApp — this page only writes the message for you.
        </p>

        <div className="builder-grid">
          <div>
            <h3>1. Box</h3>
            <div className="option-grid">
              {boxes.map((b) => (
                <button key={b.id} className={`option ${b.id === boxId ? 'active' : ''}`} onClick={() => chooseBox(b.id)}>
                  <b>{b.name}</b>
                  <div>{b.kicker}</div>
                </button>
              ))}
            </div>

            <h3 style={{ marginTop: 28 }}>2. Size</h3>
            <div className="option-grid">
              {box.sizes.map((s) => (
                <button key={s.id} className={`option ${s.id === sizeId ? 'active' : ''}`} onClick={() => setSizeId(s.id)}>
                  <b>{s.label}</b> · {s.pieces} · ${s.price.toFixed(2)}
                </button>
              ))}
            </div>

            <h3 style={{ marginTop: 28 }}>3. Flavors ({picked.length}/{maxFlavors})</h3>
            <div className="flavor-pick">
              {flavors.map((f) => (
                <label key={f.id}>
                  <input
                    type="checkbox"
                    checked={picked.includes(f.id)}
                    onChange={() => toggleFlavor(f.id)}
                  />
                  <span>
                    <b>{f.name}</b>
                    <div style={{ color: 'var(--muted)', fontSize: 13 }}>{f.notes}</div>
                  </span>
                </label>
              ))}
            </div>
            {picked.length >= maxFlavors && (
              <p className="warn">That size tops out at {maxFlavors} flavors. Uncheck one to swap.</p>
            )}
          </div>

          <aside className="summary">
            <h3>Your box</h3>
            <p>{box.name} · {size.label}</p>
            <p>${size.price.toFixed(2)} · {size.pieces}</p>
            <ul>
              {selected.map((f) => <li key={f.id}>{f.name}</li>)}
            </ul>
            {selected.length === 0 && <p>No flavors selected yet.</p>}
            <a className="btn btn-gold" href={whatsappLink(message)} target="_blank" rel="noreferrer" style={{ width: '100%', marginTop: 16 }}>
              Send on WhatsApp
            </a>
          </aside>
        </div>
      </main>
    </>
  )
}
