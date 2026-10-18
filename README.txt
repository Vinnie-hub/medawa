Medawa: online pharmacy and healthcare store (static multi-page site, no build step)
Open index.html in a browser. Internet is only needed for the optional Unsplash product photos (emoji tiles show if offline).

Pages (each its own file, all linked from index.html and the shared header/footer):
 index, shop, product, cart, checkout, orders, account, wishlist, prescription, consult, health-hub, about, contact, help, legal, 404

Shared files:
 css/style.css       all styles, light + dark themes (colour tokens at the top)
 js/theme.js         light/dark mode (follows device setting, toggle remembered)
 js/data.js          products, categories, articles, cart/wishlist/orders state
 js/ui.js            icons, product cards, toast, shared helpers
 js/layout.js        shared header, mobile menu, bottom tab bar, footer, cookie notice
 js/pages/*.js       logic for each dynamic page
Logos (assets/): medawa-logo.webp (header, 2 sizes), medawa-logo-footer.webp (footer), icon-*.png + favicon.ico + apple-touch-icon.png (browser tab / home-screen icons), site.webmanifest.
To swap a logo, replace the file with the same name. Dark mode shows the logo on a white plate automatically.
Fonts: system fonts (Arial/Helvetica), nothing to download.
To change products: edit the P list in js/data.js. Promo code: MEDAWA10.
