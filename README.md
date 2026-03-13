# CARISMA Lab Website Template (Jekyll + GitHub Pages)

A reusable Jekyll template for research groups that need:
- a clear institutional homepage
- people profiles
- research project pages
- news posts
- publication listing
- automatic deployment on GitHub Pages

This repository currently contains CARISMA content, but the structure is template-ready and can be adapted for any research group.

## Live site

- Production URL pattern (project site): `https://<org-or-user>.github.io/<repo>/`
- In this repo: `https://iusspavia-carisma.github.io/lab-website/`

## Stack

- Jekyll `~> 4.3`
- Ruby (CI uses Ruby `3.2`)
- GitHub Actions workflow for Pages deploy: [`.github/workflows/jekyll.yml`](.github/workflows/jekyll.yml)

## Quick start

1. Clone the repository.
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Start local server:
   ```bash
   bundle exec jekyll serve
   ```
4. Open:
   ```text
   http://localhost:4000/lab-website/
   ```

If your local Ruby does not match `Gemfile.lock` (for example missing Bundler `2.5.6`), either:
- install the required bundler version, or
- update lockfile/bundler version consistently for your team.

## Deployment model (GitHub Pages)

Deploy is automatic on push to `main` through GitHub Actions.

Workflow:
- Build Jekyll site
- Upload `_site` artifact
- Deploy to GitHub Pages environment

Required repository settings:
1. `Settings` -> `Pages`
2. Source: `GitHub Actions`
3. Ensure Actions are enabled for the repository

## Configuration guide

Main configuration is in [`_config.yml`](_config.yml).

Important keys:
- `url`: full base domain, e.g. `https://example.github.io`
- `baseurl`:
  - `"/repo-name"` for project pages
  - `""` for user/org root pages
- `name`, `description`: generic site metadata
- `seo.title`, `seo.description`: social preview/homepage metadata
- `lab.*`: lab identity, mission text, activities, collaborations, homepage sections
- `navigation`: top menu links
- `social`: footer links

After changing `_config.yml`, restart local Jekyll server.

## Content structure

### Top-level pages

Editable markdown pages:
- [`index.md`](index.md)
- [`about.md`](about.md)
- [`people.md`](people.md)
- [`research.md`](research.md)
- [`publications.md`](publications.md)
- [`education.md`](education.md)
- [`resources.md`](resources.md)
- [`news.md`](news.md)
- [`contact.md`](contact.md)

### Collections

- `_people/` -> profile pages
- `_research/` -> project/research detail pages
- `_news/` -> dated news posts

Layouts:
- [`_layouts/person.html`](_layouts/person.html)
- [`_layouts/research.html`](_layouts/research.html)
- [`_layouts/post.html`](_layouts/post.html)

### Add a person

1. Copy [`_people/_template.md`](_people/_template.md)
2. Rename to `firstname-lastname.md`
3. Fill front matter (`name`, `slug`, `position`, contact links, etc.)
4. Set `published: true` (or remove the line) when ready
5. Optional: add photo in `assets/img/people/` and set `photo`
6. Optional: update [`assets/carisma_people.csv`](assets/carisma_people.csv) for your own tracking

### Add a news post

1. Copy [`_news/_template.md`](_news/_template.md)
2. Rename to `YYYY-MM-DD-short-title.md`
3. Fill `title`, `date`, `author`, body content
4. Set `published: true` (or remove `published: false`)

### Add a research project

1. Add a markdown file in `_research/`
2. Include at least:
   ```yaml
   ---
   title: "Project Name"
   project: true
   ---
   ```
3. Optional fields consumed by layout:
   - `subtitle`
   - `status`
   - `funding`
   - `team` (list)

## Publications workflow

Manual file:
- [`publications.md`](publications.md)

Automated generator:
- script: [`scripts/generate_publications_md.rb`](scripts/generate_publications_md.rb)
- input CSV: [`assets/carisma_pub.csv`](assets/carisma_pub.csv)

Run:
```bash
ruby scripts/generate_publications_md.rb
```

The script rebuilds `publications.md` from CSV rows.

## Branding and assets

- Main stylesheet: [`assets/css/main.css`](assets/css/main.css)
- Shared layout/head metadata: [`_layouts/default.html`](_layouts/default.html)
- Navigation/footer includes:
  - [`_includes/navigation.html`](_includes/navigation.html)
  - [`_includes/footer.html`](_includes/footer.html)
- Hero slider include: [`_includes/hero-slider.html`](_includes/hero-slider.html)
- Images/PDFs: `assets/img/`, `assets/pdf/`

## Reusing this template for a new lab

1. Fork or copy this repository.
2. Replace lab identity fields in `_config.yml`:
   - `lab.name`, `lab.full_name`, `lab.tagline`, contacts, collaborations
3. Replace logo/images in `assets/img/`.
4. Replace people/news/research collections with your content.
5. Update `url` and `baseurl` based on your GitHub Pages target.
6. Push to `main` and verify Pages deployment in Actions.

## Common issues

### Site not updating after push

Check:
1. Actions run succeeded (`Deploy Jekyll site to Pages`)
2. Pages source is `GitHub Actions`
3. You are opening the correct URL with `baseurl`
4. Hard refresh browser cache

### Wrong Telegram/Slack/LinkedIn preview

- Preview uses Open Graph/Twitter metadata in [`_layouts/default.html`](_layouts/default.html), not visible page text.
- After updating metadata, social apps may cache old previews. Test with a temporary query param (example: `?v=2`).

## License

See [`LICENCE.md`](LICENCE.md).
