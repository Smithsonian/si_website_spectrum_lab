# si_website_spectrum_lab

CfA Spectrum Lab at https://waps.cfa.harvard.edu/microobservatory/spectrum/

The development preview deployment is at https://smithsonian.github.io/si_website_spectrum_lab .

## Developing

### Prerequisites

1. Node 22.9.0 or similar

If you need several Node versions to coexist on your machine, this project has a `.tool-versions` for use with [asdf](https://asdf-vm.com/).

2. Prettier VS Code extension (recommended)
3. Vue VS Code extension (recommended)

### Install

1. Clone the repo.
2. Inside the clone: `npm install`

### Running

1. `npm run dev`

The app is now running at http://localhost:5173/ by default. Code changes will take effect immediately.

## Deploying to GitHub

1. `npm run format` to apply code style. This is not necessary if your IDE formats with Prettier on save.
2. `npm run build` to verify build success. TypeScript errors may appear here that do not appear in development mode.
    1. (Optional) `npm run preview` after building. This will serve the build output on 4173, so you can verify it looks right. This is overkill unless you're making changes to the build process.
3. Commit to the `develop` branch.
4. Push the `develop` branch. After a few minutes your changes will appear at https://smithsonian.github.io/si_website_spectrum_lab .

## Deploying to WAPS

1. Deploy to GitHub first.
2. Ask Vanessa to use her `deploy_scripts` repo to pull and deploy the `develop` branch.
