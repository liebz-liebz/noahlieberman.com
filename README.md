# noahlieberman.com

Author website for Noah Lieberman. Plain HTML + CSS — no build step, no framework.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `books.html` | Books, where to buy them, free ebooks, bookstore enquiries |
| `advertisers.html` | Sponsored free-ebook program + enquiry form |
| `bio.html` | Bio |

Shared styles are in `assets/css/style.css`; the small script in `assets/js/main.js` handles the contact form.

## Editing content

Every spot that needs real content is marked with an `<!-- EDIT: ... -->` comment. Search for `EDIT:` to find them all.

- **Photos:** put your photos in `assets/img/`, then:
  - **Home hero (desktop):** in `assets/css/style.css`, change `hero-placeholder.svg` to your wide photo
    (e.g. `hero.jpg`). A landscape shot with you on the right side works best — the name card and button sit on the left.
  - **Home hero (phones):** in the same file, change `portrait-placeholder.svg` to a portrait crop (e.g. `noah.jpg`).
  - **"Hi, I'm Noah" on the home page and the Bio page:** change `src="assets/img/portrait-placeholder.svg"`
    in `index.html` and `bio.html`.
- **Book covers:** the coloured covers are placeholders. Put cover images in `assets/img/` and replace a placeholder
  `<div class="cover cover--1">…</div>` with `<img class="cover" src="assets/img/my-cover.jpg" alt="Title cover">`.
- **Buy links:** paste Amazon / Kindle URLs into the `href="#"` on each button in `books.html` (and the featured
  book's "Buy on Amazon" button in `index.html`).
- **Adding a book:** copy an `<article class="book">…</article>` block in `books.html` and edit it.
- **Free ebooks:** put the file in `assets/books/` (e.g. `assets/books/free-book.pdf`) and point the download buttons at it.
- **Socials:** paste your Instagram and LinkedIn URLs into the icon links (header and footer of each page).
- **Email:** the site uses `hello@noahlieberman.com` as a placeholder — find and replace it with your real address.
- **Colours / fonts:** change the variables at the top of `assets/css/style.css`.

The header and footer are repeated in each page, so a change to the nav or footer needs to be made in all four files.

## Contact form

The sponsorship enquiry form opens the visitor's email app with their details pre-filled (no server needed). To collect
submissions directly instead, give the `<form>` an `action="..."` pointing at a service like [Formspree](https://formspree.io).

## Preview locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Hosting & domain

Any static host works. Easy free options:

- **GitHub Pages:** repo Settings → Pages → deploy from the `main` branch. Then add `noahlieberman.com` as the custom domain.
- **Netlify / Cloudflare Pages:** connect this repo, leave the build command empty, publish directory `/`.

Each host gives you the DNS records to add at your domain registrar to point `noahlieberman.com` at the site.
