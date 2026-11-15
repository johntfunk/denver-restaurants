/* Denver Restaurant Tracker data.
   Edit this file to update the site. app.js renders it; see README.md. */
window.TRACKER = {
  title: "Denver Restaurant Tracker",
  summary:
    "John's shortlist of standout Denver restaurants, with Michelin status, what dinner really costs, and how to get a table. Status as of Nov 15, 2026.",
  updated: "November 15, 2026",
  updatedISO: "2026-11-15",
  metrics: {
    starredDetail: "2026 guide",
    tastingDetail: "$175 to $250 per person"
  },
  restaurants: [
    {
      name: "Beckon",
      hood: "RiNo",
      cuisine: "Seasonal American",
      stars: 1,
      format: "Tasting menu",
      price: "$215 pp, prepaid, plus service charge and tax",
      notes: "About 2.5 hours; chef's counter (1 to 4 guests) or dining room.",
      url: "https://www.opentable.com/r/beckon-denver"
    },
    {
      name: "Milpero",
      hood: "Globeville",
      cuisine: "Mexican",
      stars: 1,
      format: "Tasting menu",
      price: "$250 pp before tax and tip",
      notes:
        "18 courses, 8 guests per seating, 4 nights a week. Each month's tables open at 8 AM MT on the 1st of the month before.",
      url: "https://www.opentable.com/r/maize-denver",
      chef: "chef-curiel"
    },
    {
      name: "Kizaki",
      hood: "Platt Park",
      cuisine: "Edomae sushi",
      stars: 1,
      format: "Tasting menu",
      price: "$250 pp plus service fee and tax",
      notes: "About 20 courses; seatings at 5:00 and 8:00 PM, counter or table.",
      url: "https://www.opentable.com/r/kizaki-denver",
      chef: "chef-kizaki"
    },
    {
      name: "The Counter at Odell's",
      hood: "West Highland",
      cuisine: "Kaiseki-inspired Japanese",
      stars: 0,
      format: "Tasting menu",
      price: "$175 pp, optional $85 drink pairing",
      notes: "10-seat counter on weekends; menu changes nightly; no vegetarian or vegan.",
      url: "https://www.opentable.com/r/the-counter-at-odells-denver",
      chef: "chef-odell"
    },
    {
      name: "Alma Fonda Fina",
      hood: "LoHi",
      cuisine: "Contemporary Mexican",
      stars: 1,
      format: "À la carte",
      price: "Mains about $39 to $49",
      notes: "28-seat dining room plus an 8-seat chef's counter.",
      url: "https://www.opentable.com/r/alma-fonda-fina-denver",
      chef: "chef-curiel"
    },
    {
      name: "Mezcaleria Alma",
      hood: "LoHi",
      cuisine: "Mexico City small plates",
      stars: 1,
      format: "À la carte",
      price: "Small plates about $20 to $24",
      notes: "Big mezcal list; 10-seat chef's counter.",
      url: "https://www.opentable.com/r/mezcaleria-alma-denver",
      chef: "chef-curiel"
    },
    {
      name: "Tai Tai Japanese",
      hood: "University Hills",
      cuisine: "Sushi",
      stars: 0,
      format: "À la carte",
      price: "About $31 to $50 a head",
      notes: "Lively sushi bar and open kitchen, good for late-night bites.",
      url: "https://www.opentable.com/r/tai-tai-japanese-denver"
    },
    {
      name: "Hell or High Water Tiki",
      hood: "RiNo",
      cuisine: "Tiki cocktail bar",
      stars: 0,
      format: "Bar",
      price: "About $31 to $50 a head",
      notes: "From Nov 20, walk-in only after 8 PM on Fridays and Saturdays.",
      url: "https://www.opentable.com/r/hell-or-high-water-tikidenver"
    },
    {
      name: "Vin Rouge Wine Bar",
      hood: "Highlands",
      cuisine: "Wine bar",
      stars: 0,
      format: "Bar",
      price: "Under $30 a head",
      notes: "Boutique organic wines, cheese and charcuterie.",
      url: "https://www.opentable.com/r/vin-rouge-wine-bar-and-tasting-room-denver"
    }
  ],
  chefs: [
    {
      id: "chef-curiel",
      heading: "Milpero, Alma Fonda Fina and Mezcaleria Alma: Chef Johnny Curiel",
      paragraphs: [
        "Johnny Curiel grew up in Guadalajara in a family of chefs; his father ran a live-fire restaurant cooking whole goats and lambs, and Johnny started out there washing dishes. He came to Colorado as a kid, settling first in Breckenridge, moved to Denver around 20, then spent about three years with Richard Sandoval (rising to chef de cuisine) and later cooked for Troy Guard at Guard + Grace, Los Chingones, and Mr. Tuna, followed by a stretch consulting on Mexican restaurants around the country. He says he has made more than 120 research trips back to Mexico.",
        "He and his wife Kasie opened Alma Fonda Fina in LoHi in December 2023 (\"Alma\" is also his mother's name). It won Colorado's only Michelin star in 2024, and Curiel took the guide's Young Chef Award. Mezcaleria Alma next door earned a star in 2025, and Milpero, their 18-course corn-centered tasting counter in Globeville, won the state's only new star in 2026 after just four months open. The couple also run Cozobi Fonda Fina in Boulder (a Bib Gourmand) and Alteño at the Clayton Hotel."
      ],
      properties: [
        { label: "Michelin", value: "Three one-star restaurants, plus a Bib Gourmand in Boulder" },
        { label: "First opening", value: "Alma Fonda Fina, December 2023" },
        { label: "Book via", value: "OpenTable" }
      ]
    },
    {
      id: "chef-kizaki",
      heading: "Kizaki: Chef Toshi Kizaki",
      paragraphs: [
        "Toshi Kizaki and his brother Yasu opened Sushi Den on South Pearl Street on Christmas Eve 1984, back when Denver had almost no serious sushi. They built a trading company that flies fish from the Nagahama market near their hometown on Kyushu, and later added Izakaya Den and Ototo on the same block, a stretch locals call Den Corner.",
        "Now in his seventies, Toshi opened Kizaki in April 2025 as the capstone of his career: a nine-seat Siberian elm counter plus two six-seat rooms inside Denchu, a greenhouse-like building a few doors down from Sushi Den. Michelin calls it \"a new echelon of omakase\" for Denver and gave it a star; Toshi makes the nigiri himself."
      ],
      properties: [
        { label: "Address", value: "1551 S. Pearl St." },
        { label: "Opened", value: "April 11, 2025 (launched at $225; now $250)" },
        { label: "Book via", value: "OpenTable" }
      ]
    },
    {
      id: "chef-odell",
      heading: "The Counter at Odell's: Chef Miles Odell",
      paragraphs: [
        "Miles Odell is a New Jersey native who trained at the French Culinary Institute, then cooked at Nobu, Masa, and Bouley, where he learned Japanese technique under Isao Yamada. He was one of 15 chefs worldwide picked for Japan's Culinary Ambassador Program and spent a few years in Kyoto, including at the three-Michelin-star kaiseki restaurant Gion Sasaki.",
        "He came to Colorado as a private chef in Aspen, built a following with Japanese bentos at Denver farmers markets, then opened Odell's Bagel in the old Denver Bread Co. space. On weekend nights it turns into a 10-seat kaiseki-style counter: cold, steamed, grilled, and charcoal courses, then six to eight nigiri, with a menu that changes weekly and a no-waste philosophy he calls mottainai."
      ],
      properties: [
        { label: "Address", value: "3200 Irving St. (inside Odell's Bagel)" },
        { label: "Opened", value: "March 28, 2025" },
        { label: "Book via", value: "OpenTable" }
      ]
    }
  ],
  reading: [
    {
      title: "Meet the Denver chef who opened 3 Michelin star restaurants in 3 years",
      site: "The Colorado Sun",
      href: "https://coloradosun.com/2026/09/21/meet-the-denver-chef-who-opened-three-michelin-restaurants/"
    },
    {
      title: "Kizaki in the MICHELIN Guide",
      site: "guide.michelin.com",
      href: "https://guide.michelin.com/us/en/colorado/denver_1261491/restaurant/kizaki"
    },
    {
      title: "Sushi Den founder opens omakase concept on South Pearl",
      site: "Westword",
      href: "https://www.westword.com/food-drink/sushi-den-founder-opens-omakase-concept-on-south-pearl-street-24256539/"
    },
    {
      title: "The Counter at Odell's: Japanese kaiseki in Denver",
      site: "New Denizen",
      href: "https://newdenizen.com/counter-odells-denver/"
    },
    {
      title: "Odell's launches tasting-menu dinners",
      site: "Westword",
      href: "https://www.westword.com/food-drink/west-highland-bagel-shop-odells-launches-tasting-menu-dinner-23997051/"
    }
  ],
  sources: [
    "OpenTable Diners' Choice, Denver Best Overall",
    "MICHELIN Guide USA 2026",
    "Denver Westword",
    "New Denizen",
    "The Denver Post",
    "Nation's Restaurant News"
  ]
};
