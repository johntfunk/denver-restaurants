# Denver Restaurant Tracker

John Funk's shortlist of standout Denver restaurants: Michelin status, what dinner costs, and how to get a table. The site is static HTML, CSS, and JavaScript with no build step.

**Live site:** https://johntfunk.github.io/denver-restaurants/

## Update the list

Edit [`data/restaurants.js`](data/restaurants.js) and commit. [`app.js`](app.js) renders the page from `window.TRACKER` in that file. A normal list change does not require a markup edit.

Each restaurant:

| Field | Meaning |
| --- | --- |
| `name` | Display name. Linked to `url`. |
| `hood` | Neighborhood, shown under the name. |
| `cuisine` | Shown under the name. |
| `stars` | `1` draws a custom red star badge (`#C8102E`). `0` shows "Not in guide". This is not the Michelin logo. |
| `format` | `Tasting menu`, `À la carte`, or `Bar`. The Tasting menus filter matches `Tasting menu`. |
| `price` | Cost line. |
| `notes` | Good-to-know text. |
| `url` | Restaurant page. |
| `chef` | Optional profile id: `chef-curiel`, `chef-kizaki`, or `chef-odell`. Rows with a matching chef link to that profile. |

The summary counts and the All / Michelin stars / Tasting menus filters are computed from `restaurants`. `metrics.tastingDetail` is the tasting-menu price range shown under the tasting-menu count. `metrics.starredDetail` is the line under the one-star count (currently `2026 guide`).

Chef profiles live in `chefs`. The `id` must match a restaurant's `chef` value so the "See chef profile below" link lands on that section. `reading` is the further-reading cards. `sources` is the footer list.

`updated` and `updatedISO` set the "Last updated" line. The same date is also written in `index.html` so it still shows if JavaScript does not run.

## How the page loads

`index.html` loads `data/restaurants.js`, then `app.js`. GitHub Pages serves those files from the repository root (`.nojekyll` keeps Jekyll from processing the site). The header, summary, and metric cards are in the HTML so the page is not blank if the script fails. With JavaScript on, the script replaces the metrics with counts from the data file and draws the table, chef profiles, further reading, and sources.

Light and dark colors follow `prefers-color-scheme`.
