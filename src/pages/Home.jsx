import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { site, boxes, cups, favorites, reviews, orderSteps, storageNotes, flavors, whatsappLink } from '../data/site'

export default function Home() {
  return (
    <>
      <div className="promo">{site.promo}</div>
      <Navbar />

      <section className="hero">
        <div className="wrap">
          <div className="seal">
            <div>
              <img src="/logo.svg" alt="" width="36" height="36" style={{ margin: '0 auto 4px' }} />
              <small>{site.tagline}</small>
            </div>
          </div>
          <div className="eyebrow">{site.tagline}</div>
          <h1>
            {site.headline}
            <em>Bites you can finish without bargaining with yourself.</em>
          </h1>
          <p className="lede">{site.subhead}</p>
          <div className="actions">
            <a className="btn btn-gold" href="#boxes">See the boxes</a>
            <a className="btn btn-ghost" href={whatsappLink(`Hi ${site.name}! I want to order.`)} target="_blank" rel="noreferrer">
              Order now
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="story">
        <div className="wrap story">
          <article className="story-card">
            <header>
              <p>Why we exist</p>
              <h3>Snack time is usually a bad trade.</h3>
            </header>
            <div className="story-visual" aria-hidden="true" />
          </article>
          <div className="story-copy">
            <h2>Our story</h2>
            <p>
              Most “healthy bites” are either candy with better typography or cardboard with a seed on top.
              Nourish Bites started as a small-batch kitchen making energy balls and granola clusters
              we would actually pack for ourselves.
            </p>
            <p>
              Oats, nuts, seeds, cacao, fruit, honey when it earns its place. <strong>You choose the mix.</strong>
              We pack it the same day and keep the conversation on WhatsApp — same as a neighborhood kitchen, not a catalog.
            </p>
            <p>
              The page structure is borrowed from a clean food-brand layout on purpose. The menu is not stuffed dates.
              If a flavor does not earn a reorder, it leaves the list.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt" id="boxes">
        <div className="wrap">
          <div className="section-head">
            <h2>Four ways to fill the tin</h2>
            <p>Every box is packed to order. Prices are placeholders until you lock your recipe costs.</p>
          </div>
          <div className="grid-2">
            {boxes.map((box) => (
              <article className="card" key={box.id}>
                <div className="kicker">{box.kicker}</div>
                <h3>{box.name}</h3>
                <p>{box.blurb}</p>
                <div className="price-row">
                  {box.sizes.map((s) => (
                    <div key={s.id}>
                      <b>{s.label}</b> · {s.pieces} · ${s.price.toFixed(2)}
                    </div>
                  ))}
                </div>
                {box.defaultFlavors && (
                  <ul className="flavor-list">
                    {box.defaultFlavors.map((id) => {
                      const f = flavors.find((x) => x.id === id)
                      return <li key={id}>{f?.name}</li>
                    })}
                  </ul>
                )}
                <Link className="btn btn-dark" to={box.custom ? '/build' : `/build?box=${box.id}`}>
                  {box.custom ? 'Build my box' : 'Order this box'}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="cups">
        <div className="wrap">
          <div className="section-head">
            <h2>Grab-and-go cups</h2>
            <p>Three bites. One cup. Desk, gym, school bag. Bulk orders exist — ask.</p>
          </div>
          <div className="grid-2">
            {cups.map((cup) => (
              <article className="card" key={cup.id}>
                <div className="kicker">{cup.size}</div>
                <h3>{cup.name}</h3>
                <p>{cup.blurb}</p>
                <ul className="flavor-list">
                  {cup.flavors.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a
                  className="btn btn-ghost"
                  href={whatsappLink(`Hi ${site.name}! I want to ask about ${cup.name} cups.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ask about this cup
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" id="menu">
        <div className="wrap">
          <div className="section-head">
            <h2>Crowd favorites</h2>
            <p>These three pull most of the reorders. Treat that as a signal, not a personality.</p>
          </div>
          <div className="grid-3">
            {favorites.map((f) => (
              <article className="fav" key={f.name}>
                <span className="tag">{f.tag}</span>
                <h3>{f.name}</h3>
                <p>{f.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="wrap">
          <div className="section-head">
            <h2>From the thread</h2>
            <p>Placeholder quotes until you paste real DMs. Fake five-star walls are worse than no reviews.</p>
          </div>
          <div className="grid-2">
            {reviews.map((r) => (
              <blockquote className="review" key={r.name}>
                <p>“{r.text}”</p>
                <footer>— {r.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" id="order">
        <div className="wrap">
          <div className="section-head">
            <h2>How to order</h2>
            <p>No cart. No account. Message, confirm, pack.</p>
          </div>
          <div className="steps">
            {orderSteps.map((s) => (
              <article className="step" key={s.n}>
                <div className="n">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="storage">
        <div className="wrap">
          <div className="section-head">
            <h2>Keep them decent</h2>
            <p>Honey and nut butters do not love a hot car. Neither do you.</p>
          </div>
          <div className="grid-3">
            {storageNotes.map((n) => (
              <article className="note" key={n.title}>
                <h3>{n.title}</h3>
                <p>{n.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" id="gifts">
        <div className="wrap gift-row">
          <div>
            <div className="section-head" style={{ margin: '0 0 20px', textAlign: 'left' }}>
              <h2>Gift cards</h2>
              <p>Send a $20–$100 note. They pick the box. You skip guessing flavors.</p>
            </div>
            <a className="btn btn-dark" href={whatsappLink(`Hi ${site.name}! I want a gift card.`)} target="_blank" rel="noreferrer">
              Ask for a gift card
            </a>
          </div>
          <div className="gift-visual" aria-hidden="true" />
        </div>
      </section>

      <section className="cta-band">
        <h2>Ready when you are</h2>
        <p>Send the box name and size. If you want a custom mix, use the builder first so the message is not a novel.</p>
        <div className="actions">
          <Link className="btn btn-gold" to="/build">Build a box</Link>
          <a className="btn btn-ghost" style={{ borderColor: '#f4efe4', color: '#f4efe4' }} href={whatsappLink(`Hi ${site.name}! I want to order a box.`)} target="_blank" rel="noreferrer">
            Message us
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div>© {new Date().getFullYear()} {site.name}</div>
          <div>
            Instagram <a href={site.instagram} target="_blank" rel="noreferrer">{site.instagramHandle}</a>
          </div>
          <div>Replace the WhatsApp number in <code>src/data/site.js</code></div>
        </div>
      </footer>
    </>
  )
}
