# noahlieberman.com

Author website for Noah Lieberman. Plain HTML + CSS — no build step, no framework.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `books.html` | Books, where to buy them, free ebooks, bookstore enquiries |
| `advertisers.html` | "Partner With Me": sponsored free-ebook program, audience stats, enquiry form |
| `about.html` | Bio |

Shared styles are in `assets/css/style.css`; the small script in `assets/js/main.js` handles the mobile menu and the forms.

## Editing content

Every spot that needs real content is marked with an `<!-- EDIT: ... -->` comment. Search for `EDIT:` to find them all.

- **Book covers:** the coloured covers are placeholders. Put cover images in `assets/img/` and replace a placeholder
  `<div class="cover cover--1">…</div>` with `<img class="cover" src="assets/img/my-cover.jpg" alt="Title cover">`.
- **Buy links:** paste Amazon / Kindle / Audible URLs into the `href="#"` on each button in `books.html`.
- **Adding a book:** copy an `<article class="book">…</article>` block in `books.html` and edit it.
- **Free ebooks:** put the file in `assets/books/` (e.g. `assets/books/free-book.pdf`) and point the download button at it.
- **Your photo:** drop it in `assets/img/` (e.g. `noah.jpg`, portrait orientation works best) and change
  `src="assets/img/photo-placeholder.svg"` to `src="assets/img/noah.jpg"` on the home and about pages.
- **Socials:** paste your profile URLs into the social icon links (header of each page's footer, home hero, about page).
- **Stats:** the `XX` / `XXK+` numbers on the home and partner pages are placeholders for your real numbers.
- **Email:** the site uses `hello@noahlieberman.com` as a placeholder — find and replace it with your real address.
- **Colours / fonts:** change the variables at the top of `assets/css/style.css`.

The header and footer are repeated in each page, so a change to the nav or footer needs to be made in all four files.

## Forms

The sponsorship enquiry form and the newsletter signup open the visitor's email app with their details pre-filled (no server needed). To collect submissions
directly instead, give the `<form>` an `action="..."` pointing at a service — your newsletter provider
(Beehiiv, Substack, ConvertKit) for the signup, or [Formspree](https://formspree.io) for the enquiry form.

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
