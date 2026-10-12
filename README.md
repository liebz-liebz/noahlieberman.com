# noahlieberman.com

Author website for Noah Lieberman, recreating the look of his original site. Plain HTML + CSS — no build step.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home: full-width photo with the name card and "Download my new book for free" button |
| `books.html` | Book covers with FREE BOOK / PAPERBACK / KINDLE buttons |
| `advertisers.html` | How sponsored free books work, past sponsors, enquiry form |
| `bio.html` | Bio with photo |

Shared styles are in `assets/css/style.css`; `assets/js/main.js` handles the contact form.

## Editing content

Spots that still need real content are marked with `<!-- EDIT: ... -->` comments.

- **Photos and covers:** the images in `assets/img/` (`hero.jpg`, `noah.jpg`, `bio.jpg`, and the four covers) were
  cut from screenshots of the old site. Save the original files over them, using the same names, for sharper images.
  `hero.jpg` should stay 2000 × 736 so the name card and button line up (positions are in `style.css`).
- **Links:** paste the Amazon links into the PAPERBACK / KINDLE buttons in `books.html`, and the Europe II link into its
  FREE BOOK button. Europe I already links to its Google Drive file.
- **Email & socials:** `hello@noahlieberman.com` is a placeholder; the Instagram/LinkedIn icons link to `#` for now.

The header and footer are repeated in each page, so nav or footer changes need to be made in all four files.

## Preview locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Hosting

Served by GitHub Pages from the `main` branch. To use noahlieberman.com, add it as the custom domain in
Settings → Pages and point the domain's DNS at GitHub Pages.
