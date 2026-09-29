export const site = {
  name: 'Nourish Bites',
  tagline: 'Fuel · Share · Grow',
  headline: 'Energy balls & granola bites',
  subhead: 'Handmade bites with oats, nuts, seeds, and real flavor. No mystery powders. No diet-brand voice.',
  instagram: 'https://instagram.com/nourishbites',
  instagramHandle: '@nourishbites',
  // Replace with your real number, country code, no plus or spaces
  whatsappNumber: '923001234567',
  promo: 'Opening offer: two Share Boxes, 10% off. Message us to claim it.',
}

export const whatsappLink = (text) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`

export const flavors = [
  { id: 'cacao-almond', name: 'Dark cacao + almond', type: 'ball', notes: '70% cacao, toasted almond, a pinch of sea salt', popular: true },
  { id: 'pb-oat', name: 'Peanut butter + oat', type: 'ball', notes: 'Natural peanut butter, rolled oats, honey', popular: true },
  { id: 'coconut-vanilla', name: 'Coconut + vanilla', type: 'ball', notes: 'Shredded coconut, vanilla bean, cashew' },
  { id: 'blueberry-cashew', name: 'Blueberry + cashew', type: 'ball', notes: 'Dried blueberry, cashew butter, lemon zest', popular: true },
  { id: 'tahini-sesame', name: 'Tahini + sesame', type: 'ball', notes: 'Toasted sesame, tahini, dark cacao nibs' },
  { id: 'cinnamon-apple', name: 'Cinnamon apple granola', type: 'granola', notes: 'Baked oat clusters, dried apple, cinnamon' },
  { id: 'honey-seed', name: 'Honey seed crunch', type: 'granola', notes: 'Pumpkin seed, sunflower, honey, olive oil' },
  { id: 'cacao-cluster', name: 'Cacao granola cluster', type: 'granola', notes: 'Oat clusters, cacao, hazelnut' },
]

export const boxes = [
  {
    id: 'everyday',
    name: 'Everyday Box',
    kicker: 'The weekday staple',
    blurb: 'A mix you actually finish. Energy balls for the 4pm slump, granola clusters for breakfast.',
    sizes: [
      { id: 's', label: '~450g', pieces: '12 bites', price: 18 },
      { id: 'l', label: '~750g', pieces: '20 bites', price: 28 },
    ],
    defaultFlavors: ['cacao-almond', 'pb-oat', 'cinnamon-apple', 'honey-seed'],
  },
  {
    id: 'share',
    name: 'Share Box',
    kicker: 'Made to disappear',
    blurb: 'The box you put in the middle of the table. More flavors, more arguing over the last cacao ball.',
    sizes: [
      { id: 's', label: '~450g', pieces: '16 bites', price: 20 },
      { id: 'l', label: '~750g', pieces: '24 bites', price: 30 },
    ],
    defaultFlavors: ['cacao-almond', 'pb-oat', 'coconut-vanilla', 'blueberry-cashew', 'cinnamon-apple'],
  },
  {
    id: 'power',
    name: 'Power Box',
    kicker: 'Clean fuel',
    blurb: 'Higher protein, less sugar theater. Built for gym bags and long workdays.',
    sizes: [
      { id: 's', label: '~450g', pieces: '12 bites', price: 20 },
      { id: 'l', label: '~750g', pieces: '20 bites', price: 32 },
    ],
    defaultFlavors: ['pb-oat', 'tahini-sesame', 'honey-seed', 'blueberry-cashew'],
  },
  {
    id: 'custom',
    name: 'Build Your Box',
    kicker: 'You pick the mix',
    blurb: 'Balls, granola, or both. One to six flavors. We pack it the same day.',
    sizes: [
      { id: 's', label: '~450g', pieces: '12–16 bites · 4 flavors', price: 24 },
      { id: 'l', label: '~750g', pieces: '20–24 bites · 6 flavors', price: 34 },
    ],
    custom: true,
  },
]

export const cups = [
  {
    id: 'desk',
    name: 'Desk Cup',
    blurb: 'Three bites. One cup. Survives a meeting.',
    flavors: ['Coconut + vanilla', 'Cinnamon apple granola', 'Peanut butter + oat'],
    size: '~90g · 3 bites',
  },
  {
    id: 'gym',
    name: 'Gym Cup',
    blurb: 'Post-session fuel that is not a protein bar costume.',
    flavors: ['Peanut butter + oat', 'Tahini + sesame', 'Honey seed crunch'],
    size: '~90g · 3 bites',
  },
]

export const favorites = [
  {
    name: 'Dark cacao + almond',
    quote: 'Tastes like a truffle. Does not eat like candy.',
    tag: 'Best seller',
  },
  {
    name: 'Peanut butter + oat',
    quote: 'The one people reorder without thinking.',
    tag: 'Crowd pick',
  },
  {
    name: 'Blueberry + cashew',
    quote: 'Bright, not cloying. Works as breakfast.',
    tag: 'New favorite',
  },
]

export const reviews = [
  { name: 'Ayesha K.', text: 'Ordered a Share Box for the office. It did not last the afternoon. That is the review.' },
  { name: 'Omar R.', text: 'Gym Cup after lifting is the first snack that does not feel like a compromise or a dessert.' },
  { name: 'Sara M.', text: 'Asked for no added refined sugar on two flavors. They actually did it. Rare.' },
  { name: 'Hassan T.', text: 'Packaging is simple. Bites are dense, not dry. Will keep this for Eid trays.' },
]

export const orderSteps = [
  { n: '01', title: 'Pick a box or build one', text: 'Everyday, Share, Power, or a custom mix. Sizes are listed on the cards.' },
  { n: '02', title: 'Message us', text: 'WhatsApp or Instagram. Send the box name, size, and any swaps. We confirm stock the same day.' },
  { n: '03', title: 'We pack. You collect or we deliver.', text: 'Fresh batches. We will tell you pickup windows and delivery areas when you write.' },
]

export const storageNotes = [
  { title: 'Room temp', text: '2–3 days in a sealed tin if your kitchen is cool.' },
  { title: 'Fridge', text: 'Up to 10 days. Energy balls firm up; let them sit 5 minutes before eating.' },
  { title: 'Freezer', text: 'Up to 6 weeks. Thaw in the fridge overnight. Granola stays crunchier than the balls.' },
]
