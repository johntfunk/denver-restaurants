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
      url: "https://www.opentable.com/r/beckon-denver",
      chefName: "Duncan Holmes",
      food: "Seasonal, farm-driven Modern European tasting menu at a chef's counter, about 2.5 hours. Recent examples include sunflower risotto with grilled oyster mushroom, seared duck with parsnip and black truffle, and a chocolate finale."
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
      chef: "chef-curiel",
      chefName: "Johnny Curiel",
      food: "Eighteen-course Mexican tasting menu over three hours, built around house-nixtamalized masa and distinctive moles. Examples include a bluefin-tuna flauta with mole rosa, wagyu with mole amarillo and ayocote beans, and champurrado over atole mousse."
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
      chef: "chef-kizaki",
      chefName: "Toshi Kizaki",
      food: "About 20 courses of Edomae omakase, mixing nigiri with kaiseki-style cooked dishes, from raw and cured to seared and dry-aged. Examples include sesame tofu, lightly seared black-throat sea perch, and vinegar-cured gizzard shad."
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
      chef: "chef-odell",
      chefName: "Miles Odell",
      food: "Nightly-changing kaiseki-inspired menu of cooked courses plus a nigiri progression. A recent menu included scallop in leche de tigre, black-truffle chawanmushi with Dungeness crab, sansho-peppercorn lamb, and an 11-piece nigiri set."
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
      chef: "chef-curiel",
      chefName: "Johnny Curiel",
      food: "À la carte contemporary Mexican that changes often, with no desserts. Highlights include camote asado with salsa macha, Hokkaido scallops in tomato butter and serrano ponzu, hamachi with roasted pineapple, and lamb-shank birria."
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
      chef: "chef-curiel",
      chefName: "Johnny Curiel",
      food: "Seafood-forward Mexico City small plates for sharing. Current plates include kanpachi ceviche, uni-and-scallop aguachile with mandarin, a dry-aged toro tostada, and pibil duck on a tlacoyo."
    },
    {
      name: "Tai Tai Japanese",
      hood: "University Hills",
      cuisine: "Sushi",
      stars: 0,
      format: "À la carte",
      price: "About $31 to $50 a head",
      notes: "Lively sushi bar and open kitchen, good for late-night bites.",
      url: "https://www.opentable.com/r/tai-tai-japanese-denver",
      chefName: "Wayne Conwell",
      food: "Casual sushi bar for nigiri, sashimi, specialty rolls, poke, and open-faced hand rolls, with fish broken down in-house. Signatures include toro, uni, snow crab with caviar, and the Diablo and Pink Lady rolls."
    },
    {
      name: "Hell or High Water Tiki",
      hood: "RiNo",
      cuisine: "Tiki cocktail bar",
      stars: 0,
      format: "Bar",
      price: "About $31 to $50 a head",
      notes: "From Nov 20, walk-in only after 8 PM on Fridays and Saturdays.",
      url: "https://www.opentable.com/r/hell-or-high-water-tikidenver",
      food: "A tiki cocktail bar more than a kitchen, with inventive tropical drinks (including a flaming Jungle Bird) and only light snacks. Come for the drinks, not dinner."
    },
    {
      name: "Vin Rouge Wine Bar",
      hood: "Highlands",
      cuisine: "Wine bar",
      stars: 0,
      format: "Bar",
      price: "Under $30 a head",
      notes: "Boutique organic wines, cheese and charcuterie.",
      url: "https://www.opentable.com/r/vin-rouge-wine-bar-and-tasting-room-denver",
      food: "Neighborhood wine bar with light fare: cheese boards (18-month Gouda, triple-cream brie), Il Porcellino salumi, olives, almonds, and chocolate bites."
    },
    {
      name: "Heretík",
      hood: "RiNo",
      cuisine: "Basque and French",
      stars: 0,
      michelin: "Recommended",
      format: "À la carte",
      price: "Pintxos and plates about $8 to $32; half rotisserie chicken $36, whole $68; raw-bar plateau $155",
      notes: "Reserve for the small dining room; bar, 10-seat counter and patio are walk-in. Closed Tuesday. On the NYT's 50 favorite US restaurants of 2026; Michelin Sommelier Award.",
      food: "Basque- and French-inspired pintxos, seafood and rotisserie heritage chicken. Signatures include tuna-tartare deviled eggs, scallops à la plancha, a raw-bar plateau and Basque cheesecake.",
      url: "https://www.opentable.com/r/heretik-denver",
      chefName: "Theo Adley"
    },
    {
      name: "Yuan Wonton",
      hood: "North Park Hill",
      cuisine: "Chinese dumplings",
      stars: 0,
      michelin: "Not in guide",
      format: "À la carte",
      price: "About $31 to $50 a head (OpenTable); dish prices not posted",
      notes: "Lunch Tue to Fri 11 to 3; happy hour with dinner menu Thu and Fri 4 to 6; monthly Friday Canto dinners. Closed weekends. Chef won the 2026 James Beard Best Chef: Mountain.",
      food: "Handmade wontons and dumplings with Chinese, Thai and Cantonese-American riffs plus a rotating daily board. Signatures include chili-oil wontons, Sichuan eggplant dumplings and Tom Kha wontons.",
      url: "https://www.opentable.com/r/yuan-wonton-denver",
      chefName: "Penelope Wong"
    },
    {
      name: "MAKfam",
      hood: "Baker",
      cuisine: "Chinese",
      stars: 0,
      michelin: "Bib Gourmand",
      format: "À la carte",
      price: "Small bites $7.50 to $15; noodle and rice plates $18.50; pork belly ssäm for two $38",
      notes: "Walk-in only, no reservations; dinner often has a text waitlist. Closed Tuesday.",
      food: "Tradition-inspired Chinese cooking from two restaurant-family kids: XO wonton soup, steak-and-egg jian bing, chili-oil and mala noodles, bao and pork belly ssäm.",
      url: "https://www.makfam.com/",
      chefName: "Kenneth Wan and Doris Yuen"
    },
    {
      name: "Restaurant Olivia",
      hood: "Washington Park",
      cuisine: "Italian, handmade pasta",
      stars: 0,
      michelin: "Recommended",
      format: "À la carte",
      price: "Pastas $36 to $38, large plates $34 to $43; pasta tasting $85 pp plus optional $60 wine pairing; 20% service charge",
      notes: "Book on Tock (refundable deposit). Tue to Sat 5 to 9. Tasting menu must be ordered by the whole table.",
      food: "Handmade pasta is the focus, from culurgiones with buffalo ricotta to tagliatelle Bolognese and truffle gemelli, plus Frontier Ranch trout spiedini and venison striploin.",
      url: "https://www.exploretock.com/restaurantolivia/",
      chefName: "Ty Leon"
    },
    {
      name: "Xiquita",
      hood: "Uptown",
      cuisine: "Regional Mexican",
      stars: 0,
      michelin: "Not in guide",
      format: "À la carte",
      price: "Small plates $17 to $26; cochinita pibil or grilled chicken $49",
      notes: "Mon to Sat 4 to 10, closed Sunday. Happy hour Tue to Fri 4 to 6.",
      food: "Nixtamal masa cooking with regional salsas and fillings: duck confit taco with house mole, chorizo-and-potato huarache, banana-leaf cochinita pibil and hamachi crudo.",
      url: "https://www.opentable.com/r/xiquita-denver",
      chefName: "Erasmo Casiano and Rene Gonzalez Mendez"
    },
    {
      name: "Annette",
      hood: "Aurora (Stanley Marketplace)",
      cuisine: "Wood-fired American",
      stars: 0,
      michelin: "Bib Gourmand",
      format: "À la carte",
      price: "Snacks $6 to $12.50; shared plates $17 to $31; pork tenderloin $39, half chicken $41",
      notes: "In Aurora, just outside Denver. Tue to Sun 4:30 to 9, closed Monday. Chef won the 2022 James Beard Best Chef: Mountain.",
      food: "Wood-fired seasonal American from an open kitchen: roast chicken, steak frites, pork tenderloin, chicken liver pâté and ricotta cavatelli, with a strong cocktail list.",
      url: "https://www.opentable.com/r/annette-aurora",
      chefName: "Caroline Glover"
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
    "Nation's Restaurant News",
    "5280 25 Best Restaurants 2026",
    "James Beard Foundation",
    "Eater Denver"
  ]
};
