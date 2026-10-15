# ValidusCast — website

Static website for **ValidusCast**, hosted on GitHub Pages at **https://validuscast.github.io**.
Plain HTML/CSS/JS — no build step, no framework.

## Publish on GitHub Pages

1. Sign in to GitHub as **validuscast**.
2. Create a new **public** repository named exactly **`validuscast.github.io`**
   (the name must be `<username>.github.io` — with a dot, not `@`).
3. Upload **the contents** of this folder (so `index.html` sits at the top level of the repo,
   not inside a sub-folder). Easiest: *Add file → Upload files*, drag everything in, *Commit*.
4. Go to **Settings → Pages**. Under *Build and deployment* choose
   *Source: Deploy from a branch*, *Branch: `main` / `(root)`*, then *Save*.
5. After a minute or two the site is live at **https://validuscast.github.io**.

## Contact form → validuscast@gmail.com

GitHub Pages cannot send e-mail by itself, so the form uses the free service
[FormSubmit](https://formsubmit.co).

- **One-time activation:** after the site is live, send yourself a test message from the
  contact page. FormSubmit will e-mail **validuscast@gmail.com** an activation link —
  click **Activate Form**. From then on every message arrives in that inbox
  (check *Spam* the first time).
- Optional: FormSubmit also sends a random alias string. Replace `validuscast@gmail.com`
  with it in `assets/js/contact.js` and in the `<form action>` in `contact.html`
  to keep the address out of the page source.

## Add a new blog post

1. Copy `blog/_template.html` → `blog/your-post-name.html`.
2. Edit everything marked ✏️ (title, sub-heading, author, date, text).
   The template shows how to add headings, sub-headings, **images**, **videos**,
   **YouTube embeds**, tables, quotes, callouts and equations — all left-aligned.
3. Put images in `assets/img/blog/` and videos (`.mp4`, ideally < 20 MB) in `assets/video/`.
4. In `blogs.html`, copy one `<a class="post-card">…</a>` block to the top of the
   *Writing* list and point it at your new file.

## Add YouTube videos

Open `assets/js/youtube.js` and add one line per video to `VIDEOS`:

```js
{ id: 'XXXXXXXXXXX', title: 'Video title', date: 'Nov 2026', duration: '6:12' },
```

The `id` is the part after `watch?v=` in the YouTube link. Thumbnails load automatically.
While the list is empty, three "Coming soon" cards link to the channel.

## Structure

```
index.html          Home — full-screen simulation video + tagline (no scroll)
about.html          Vision, mission, achievements
demo.html           Demo in progress (no scroll)
blogs.html          1) Written blogs  2) YouTube videos
contact.html        FNO thermal field | contact card (no scroll on desktop)
blog/               Blog posts + _template.html
assets/css/         style.css (site), blog.css (articles)
assets/js/          main.js, contact.js, youtube.js
assets/img/         logo, favicon, simulation imagery, blog figures
assets/video/       hero-pour.mp4, fno-field.mp4
.nojekyll           Tells GitHub Pages to serve files as-is
```

## Colours and type

- Background `#000000`, text `#ffffff`.
- Simulation imagery and accents use ParaView **Cool to Warm**:
  `#3b4cc0` (0.23137, 0.29804, 0.75294) → `#dddddd` (0.865) → `#b40426` (0.70588, 0.01569, 0.14902).
- Fonts: **Inter Tight** (headings, navigation) and **Inter** (body), from Google Fonts.

## About the imagery

- `hero-pour.mp4` — a 2D particle-based simulation of a gravity pour into a turbine-blade
  investment shell, with heat loss to the shell, rendered in Cool to Warm. It is a
  visualisation for the website, not a validated process simulation.
- `fno-field.mp4` — temperature field predicted by a small 2D Fourier Neural Operator trained on
  conduction–solidification solutions of random casting shapes, evaluated on an unseen
  engine-flange geometry at 3× the training resolution (≈4 % relative L2 error vs. the solver
  at training resolution).
- Section-break images and blog covers — finite-volume conduction–solidification solutions.
- Blog figures marked “Source” are from the LM6-CastBench paper.
