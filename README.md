# noahlieberman.com

Author website for Noah Lieberman. Plain HTML + CSS — no build step, no framework.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `books.html` | Books, where to buy them, free ebooks, bookstore enquiries |
| `advertisers.html` | Sponsored free-ebook program + enquiry form |
| `bio.html` | Bio |

Shared styles are in `assets/css/style.css`; the small script in `assets/js/main.js` handles the phone menu and the contact form.

## Editing content

Every spot that needs real content is marked with an `<!-- EDIT: ... -->` comment. Search for `EDIT:` to find them all.

- **Photos:** the photos of Noah are stand-ins rebuilt from a screenshot of the old site. To swap in originals,
  save them over `assets/img/hero.jpg` (the wide home-page banner — you on the right side works best, since the
  intro card sits on the left) and `assets/img/noah.jpg` (the portrait used in "About me" and on the Bio page).
- **Book covers:** the covers are placeholders with the real titles. Save each cover in `assets/img/`
  (`god.jpg`, `fantasy.jpg`, `europe1.jpg`, `europe2.jpg`) and replace each placeholder `<div class="cover …">…</div>`
  with the `<img>` tag given in the `EDIT` comment right above it.
- **Buy links:** paste the Amazon URLs into the `href="#"` on the Paperback / Kindle buttons in `books.html`.
- **Free ebooks:** Europe I links to its Google Drive file. For Europe II, paste its link (or put the file in
  `assets/books/`) into the "Download free" buttons on `books.html` and the featured book on `index.html`.
- **Socials:** paste your Instagram and LinkedIn URLs into the icon links (footer of each page, and the Bio page).
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
