# HairU Salon Website

This repository contains the source code for the **HairU Salon** marketing website, designed with a luxurious dark theme and built to deploy easily on [GitHub Pages](https://pages.github.com/).

## Features

- Responsive layout optimized for both desktop and mobile visitors
- Sticky navigation menu linking to Home, Services, Testimonials, Contact, and Directions sections
- Dark, modern aesthetic with accent highlights for premium branding
- Accessible contact form configured for [Formspree](https://formspree.io/) submissions
- Embedded Google Maps directions plus helpful travel tips

## Getting Started

1. Clone or download this repository.
2. Open `index.html` in your browser to preview locally.
3. To host on GitHub Pages, push the repository to GitHub and enable Pages in your repository settings (using the `main` branch or a `/docs` folder).

## Customization

- Update images and copy in `index.html` to match your salon's branding.
- Adjust colors, typography, and spacing inside `assets/css/styles.css`.
- Replace contact details and the Formspree endpoint with your own information.

## Client Imagery Assets

The homepage is styled to showcase real client transformations using background images. To keep this repository lightweight, the
`assets/images/clients/` folder is intentionally committed empty (aside from a `.gitkeep` placeholder). Add your own salon
photography to that folder and the hero banner plus gallery cards will automatically pick up the files because each block
references descriptive filenames via CSS custom properties.

### Working with images in Git

- Place optimized PNG or JPG photos inside `assets/images/clients/` so the HTML and CSS references keep working.
- When you are ready to publish, commit the updated images in the same branch as your markup and style changes so the live site renders the photography. (During code review you can keep the directory empty if you prefer not to share client imagery publicly.)
- No special setup (like Git LFS) is required; Git can version-track PNGs directly. Just make sure your editor stages the files before committing.

### Troubleshooting binary file errors when opening a PR

If your Git client reports an error about binary files while you are trying to raise a pull request, follow these steps:

1. **Verify the files are staged.** Run `git status` and confirm the PNGs under `assets/images/clients/` appear under "Changes to be committed". If they do not, add them explicitly with `git add assets/images/clients/*.png`.
2. **Ensure Git treats the assets as binary.** This repository includes a `.gitattributes` file that marks common image formats as binary. Pull the latest changes or copy the file into your branch before committing.
3. **Recreate the commit if necessary.** Should the error persist, run `git reset HEAD~` to undo the problematic commit, stage the images again, and commit with a fresh message such as `git commit -m "Add client imagery"`.
4. **Push and open the PR.** Once the commit succeeds locally, push your branch and open the pull request. Because the images are already tracked in Git, no extra upload step in the PR UI is required.

Following the checklist above typically resolves binary-asset warnings that occur when the images were never staged or when a branch was missing the `.gitattributes` metadata.

## License

This project is released under the MIT License. See [LICENSE](LICENSE) for details.
