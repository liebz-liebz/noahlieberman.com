# noahlieberman.com

Author website for Noah Lieberman. Plain HTML + CSS — no build step, no framework.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `books.html` | Books, where to buy them, free ebooks, bookstore enquiries |
| `advertisers.html` | Sponsored free-ebook program + enquiry form |
| `about.html` | Bio |

Shared styles are in `assets/css/style.css`; the small script in `assets/js/main.js` handles the mobile menu and the contact form.

## Editing content

Every spot that needs real content is marked with an `<!-- EDIT: ... -->` comment. Search for `EDIT:` to find them all.

- **Book covers:** the coloured covers are placeholders. Put cover images in `assets/img/` and replace a placeholder
  `<div class="cover cover--1">…</div>` with `<img class="cover" src="assets/img/my-cover.jpg" alt="Title cover">`.
- **Buy links:** paste Amazon / Kindle / Audible URLs into the `href="#"` on each button in `books.html`.
- **Adding a book:** copy an `<article class="book">…</article>` block in `books.html` and edit it.
- **Free ebooks:** put the file in `assets/books/` (e.g. `assets/books/free-book.pdf`) and point the download button at it.
- **Photo:** replace the `NL` placeholder with `<img class="portrait" src="assets/img/noah.jpg" alt="Noah Lieberman">`.
- **Email:** the site uses `hello@noahlieberman.com` as a placeholder — find and replace it with your real address.
- **Colours / fonts:** change the variables at the top of `assets/css/style.css`.

The header and footer are repeated in each page, so a change to the nav or footer needs to be made in all four files.

## Advertiser form

The enquiry form opens the visitor's email app with their details pre-filled (no server needed). To collect submissions
directly instead, point the form at a service like [Formspree](https://formspree.io) or use
[Netlify Forms](https://docs.netlify.com/forms/setup/).

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
