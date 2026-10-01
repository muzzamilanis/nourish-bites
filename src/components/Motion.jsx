import { useEffect } from 'react'

export default function Motion() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const gsap = window.gsap
    const Lenis = window.Lenis
    const intro = document.getElementById('intro')

    if (reduced || !gsap || !Lenis || !window.ScrollTrigger) {
      if (intro) intro.hidden = true
      return undefined
    }

    gsap.registerPlugin(window.ScrollTrigger)
    document.documentElement.classList.add('has-motion')

    const lenis = new Lenis({ lerp: 0.2, smoothWheel: true, wheelMultiplier: 1 })
    lenis.on('scroll', window.ScrollTrigger.update)
    const tick = (t) => lenis.raf(t * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    const seen = sessionStorage.getItem('nbIntroSeen')
    if (!seen && intro) {
      intro.hidden = false
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          intro.hidden = true
          sessionStorage.setItem('nbIntroSeen', '1')
        },
      })
      tl.to('.intro__seal', { scale: 1.25, duration: 0.25, ease: 'back.out(3)' }, 0.3)
        .to('.intro__seal', { y: 60, scale: 0, opacity: 0, rotation: 40, duration: 0.5 }, '+=0.1')
        .to('.intro__lid', { rotationX: -165, y: -28, duration: 0.9, ease: 'power2.inOut' }, '<0.05')
        .to('.intro__logo', { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.7)' }, '-=0.45')
        .to('.intro__tag', { opacity: 1, letterSpacing: '0.42em', duration: 0.6 }, '-=0.4')
        .to('.intro__stage', { scale: 1.12, duration: 0.5, ease: 'power2.in' }, '+=0.45')
        .to(intro, { opacity: 0, duration: 0.55 }, '<')
      intro.querySelector('.intro__skip')?.addEventListener('click', () => {
        tl.kill()
        gsap.to(intro, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            intro.hidden = true
            sessionStorage.setItem('nbIntroSeen', '1')
          },
        })
      })
    } else if (intro) {
      intro.hidden = true
    }

    gsap.from('.seal', { scale: 0.72, autoAlpha: 0, duration: 0.8, ease: 'back.out(1.6)', delay: seen ? 0.05 : 1.6 })
    gsap.from('.hero .eyebrow, .hero h1, .hero .lede, .hero .actions', {
      y: 22,
      autoAlpha: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
      delay: seen ? 0.15 : 1.75,
    })
    gsap.to('.seal', {
      yPercent: 26,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    })

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      })
    })

    const nav = document.querySelector('.nav')
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      window.ScrollTrigger.getAll().forEach((t) => t.kill())
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="intro" id="intro" hidden>
      <div className="intro__stage">
        <div className="intro__box">
          <div className="intro__base" />
          <div className="intro__logo" />
          <div className="intro__lid"><div className="intro__seal" /></div>
        </div>
        <p className="intro__tag">REAL FOOD · SMALL BITES</p>
      </div>
      <button className="intro__skip" type="button">Skip</button>
    </div>
  )
}
