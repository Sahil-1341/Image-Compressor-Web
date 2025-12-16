# Image-Compressor-Web

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](./)
[![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)](./LICENSE)

A small, client-side web application for compressing images directly in your browser. The project is implemented as a single-page app (no server required) and contains the compression logic, UI script, and styles needed to run locally or host as static files.

Screenshots
-----------

### Home Page
![Home Page](./Webpage%20Image%20compressor.png)


Table of contents
- [What this project does](#what-this-project-does)
- [Why it's useful](#why-its-useful)
- [Key features](#key-features)
- [Get started](#get-started)
  - [Prerequisites](#prerequisites)
  - [Run locally (fast)](#run-locally-fast)
  - [Serve with a static server (recommended for local development)](#serve-with-a-static-server-recommended-for-local-development)
- [Usage](#usage)
- [Project structure](#project-structure)
- [Development notes](#development-notes)
- [Where to get help](#where-to-get-help)
- [Maintainers & contributing](#maintainers--contributing)
- [License](#license)

What this project does
----------------------
IMAGE-COMPRESSOR-Web is a lightweight, browser-based image compressor. It provides a simple UI (index.html) and compression logic (compressor.js) so users can reduce image file sizes without uploading their images to a server.

Why it's useful
---------------
- Compress images locally in the browser — no server required.
- Useful for reducing image size before uploading to websites, sending via email, or optimizing assets for web use.
- Easy to run and integrate as a static page or drop into any static site.

Key features
------------
- Single-page web app (index.html) with UI and controls.
- Compression logic separated in compressor.js.
- Small, dependency-free client-side code (works by opening index.html or serving static files).
- Cross-platform — runs in any modern browser.

Get started
-----------

Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari).
- (Optional) A simple static file server for local development (examples below).

Run locally (fast)
1. Clone the repository:
   ```bash
   git clone https://github.com/Sahil-1341/IMAGE-COMPRESSOR-Web.git
   cd IMAGE-COMPRESSOR-Web
   ```
2. Open the app:
   - Open `index.html` in your browser (double-click or use "Open File" in the browser).
   - Or use a static server (recommended — see next section).

Serve with a static server (recommended for local development)
- Python 3:
  ```bash
  python -m http.server 8000
  ```
  Then open: http://localhost:8000

- Node (http-server):
  ```bash
  npm install -g http-server
  http-server -c-1
  ```
  Then open the printed URL in your browser.

Usage
-----
1. Open the app in your browser (see "Run locally" above).
2. Use the UI in `index.html` to select or drop an image file.
3. Adjust any available quality/size options (if provided by the UI).
4. Run the compression action and download the resulting compressed image.

If you prefer to inspect or modify behavior, check `compressor.js` for the compression algorithms and `script.js` for UI wiring.

Project structure
-----------------
- `index.html` — The single-page UI and entry point.
- `compressor.js` — Compression implementation and utilities.
- `script.js` — UI logic that connects the page controls to the compressor.
- `style.css` — Page styling and layout.

Development notes
-----------------
- This project is designed to run entirely in the browser. There is no server-side component included.
- To extend compression behavior, modify `compressor.js`. To change UI behavior, modify `script.js` and `index.html`.
- Add tests or CI as needed — currently there are no test suites included.

Where to get help
-----------------
- File an issue: https://github.com/Sahil-1341/IMAGE-COMPRESSOR-Web/issues
- For questions about usage or contributions, open an issue and tag it with `question` or `help wanted`.
- For larger discussions consider adding a repository Discussion (enable in repo settings) or linking to additional docs.

Maintainers & contributing
--------------------------
Maintainer:
- Sahil-1341 — repository owner and primary maintainer

Contributing
- Contributions are welcome. Please follow these steps:
  1. Fork the repository.
  2. Create a branch for your change.
  3. Open a pull request describing your change.
- Please see `CONTRIBUTING.md` (if present) for contribution guidelines and code style. If the file is not present, open an issue to discuss larger changes before sending a PR.

License
-------
This project is provided under the terms in the `LICENSE` file. See `LICENSE` for details.

Acknowledgements
----------------
Thanks to contributors and users who help improve the project. Small utilities like this make front-end workflows faster and simpler.
