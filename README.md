# noahlieberman.com

Author website for Noah Lieberman. Plain HTML + CSS | no build step, no framework.

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

- **Photos:** `assets/img/hero.jpg` is the wide home-page banner (keep yourself on the right side; the intro card
  sits on the left), `assets/img/noah.jpg` is the banner on phones, and `assets/img/monkey.jpg` is used in "About me"
  and on the Bio page. Save new photos over these files to swap them.
- **Book covers:** `assets/img/god.jpg`, `fantasy.jpg`, `europe1.jpg`, `europe2.jpg` (cut from screenshots of the old
  site; save the original cover files over them for sharper images).
- **Links:** Amazon, Google Drive (free ebooks), email and social links live in `books.html`, `index.html` and the
  shared header/footer | search for the URL to change one.
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
