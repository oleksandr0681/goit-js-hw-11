# goit-js-hw-11

Homework assignment #11 from the [GoIT](https://goit.global/) JavaScript course. An image search app built with Vite: it queries the [Pixabay API](https://pixabay.com/api/docs/) over HTTP with [axios](https://axios-http.com/) and shows the results in a gallery with a lightbox.

## 📋 About

The user types a search term into the form and the app fetches matching photos from Pixabay:

- **Search form** — the query is trimmed; if the field is empty, an iziToast warning is shown and no request is sent.
- **HTTP request** — `axios.get` requests `https://pixabay.com/api` with the query and the parameters `image_type=photo`, `orientation=horizontal`, and `safesearch=true`. The request is wrapped in a `Promise`.
- **Loader** — a spinner is shown while the request is in progress and hidden afterwards (`.finally()`), and the previous results are cleared before every new search.
- **Gallery** — each result is rendered as a card with the thumbnail and its stats: likes, views, comments, and downloads. The markup is built with `map()` and inserted via `insertAdjacentHTML`.
- **Lightbox** — clicking a thumbnail opens the large image in a SimpleLightbox modal, with the image tags as a caption. The lightbox is refreshed after each new render.
- **Notifications** — iziToast messages are shown when nothing is found for the query, when the field is empty, and when the request fails (the error message is displayed).

## 🛠️ Tech Stack

- Vanilla JavaScript (ES modules, Promises, DOM API)
- HTML5 and CSS3 (modular stylesheets in `src/css`, CSS loader animation)
- [Vite](https://vitejs.dev/) — dev server and bundler
- [axios](https://github.com/axios/axios) — HTTP client
- [SimpleLightbox](https://github.com/andreknieriem/simplelightbox) — image modal
- [iziToast](https://github.com/marcelodolza/iziToast) — toast notifications
- `vite-plugin-html-inject` and `vite-plugin-full-reload` — HTML partials and live reload
- PostCSS (`postcss-sort-media-queries`, mobile-first sorting)
- GitHub Actions — automatic deploy to GitHub Pages

## 📁 Project Structure

```
goit-js-hw-11-main/
├── .github/workflows/
│   └── deploy.yml            # Build and deploy to GitHub Pages
├── src/
│   ├── index.html              # Page markup: form, loader, gallery
│   ├── main.js                   # Form submit handling and app flow
│   ├── js/
│   │   ├── pixabay-api.js         # Pixabay request (axios)
│   │   └── render-functions.js     # Gallery rendering, lightbox, loader helpers
│   ├── css/                         # Page and component styles
│   ├── img/                          # Images and SVG sprite
├── vite.config.js                  # Vite configuration
└── package.json
```

## 🚀 Getting Started

Requires an LTS version of [Node.js](https://nodejs.org/) and an internet connection (the app calls the Pixabay API).

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## 📤 Deployment

The production build is deployed automatically to GitHub Pages (the `gh-pages` branch) on every push to `main`, via the workflow in `.github/workflows/deploy.yml`. The `build` script in `package.json` uses `--base=/goit-js-hw-11/`, which must match the repository name.
