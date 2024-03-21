/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderHead, h as addAttribute, m as maybeRenderHead, j as renderComponent, k as renderSlot, A as AstroError, l as UnknownContentCollectionError, n as renderUniqueStylesheet, o as renderScriptElement, p as createHeadAndContent, u as unescapeHTML } from './astro_DKTmtTZ_.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import rss from '@astrojs/rss';
import { p as prependForwardSlash } from './astro/assets-service_8rTylBUG.mjs';

const $$Astro$n = createAstro("https://gaming.omniversify.com");
const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Admin;
  return renderTemplate`<html> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="noindex"><link href="/admin/config.yml" type="text/yaml" rel="cms-config-url"><title>Content Manager</title>${renderHead()}</head> <body> <!-- Include the script that builds the page and powers Decap CMS -->  </body> </html>`;
}, "C:/Users/elfai/Documents/Apps/gaming/node_modules/astro-decap-cms-oauth/src/admin.astro", void 0);

const $$file$9 = "C:/Users/elfai/Documents/Apps/gaming/node_modules/astro-decap-cms-oauth/src/admin.astro";
const $$url$9 = undefined;

const admin = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file$9,
  url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$m = createAstro("https://gaming.omniversify.com");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/elfai/Documents/Apps/gaming/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$l = createAstro("https://gaming.omniversify.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Footer;
  var x = /* @__PURE__ */ new Date();
  var year = x.getFullYear.bind(x);
  year();
  const bottomLinks = [
    {
      header: "Social",
      links: [
        {
          name: "Kick",
          href: "https://kick.com/phaylali",
          isExternal: true
        },
        {
          name: "Youtube",
          href: "https://tiktok.com/@phaylali",
          isExternal: true
        },
        {
          name: "Twitch",
          href: "https://twitch.com/phaylali",
          isExternal: true
        },
        {
          name: "Github",
          href: "https://github.com/phaylali/gaming",
          isExternal: true
        },
        {
          name: "X",
          href: "https://twitter.com/omniversify",
          isExternal: true
        }
      ]
    },
    {
      header: "Navigation",
      links: [
        {
          name: "Home",
          href: "/",
          isExternal: false
        },
        {
          name: "Blog",
          href: "/blog",
          isExternal: false
        },
        {
          name: "About",
          href: "/about",
          isExternal: false
        },
        {
          name: "Projects",
          href: "/projects",
          isExternal: false
        },
        {
          name: "Contact",
          href: "/contact",
          isExternal: false
        }
      ]
    },
    {
      header: "Legal",
      links: [
        {
          name: "Privacy",
          href: "/privacy",
          isExternal: false
        },
        {
          name: "404",
          href: "/404",
          isExternal: false
        },
        {
          name: "Styleguide",
          href: "/styleguide",
          isExternal: false
        },
        {
          name: "RSS Feed",
          href: "/rss.xml",
          isExternal: true
        }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="mt-16 bg-primary-500/10 py-8 dark:bg-primary-400/10 lg:mt-20 lg:py-8" aria-labelledby="footer-heading"> <h2 id="footer-heading" class="sr-only">Footer</h2> <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"> <div class="flex flex-col justify-between gap-12 sm:gap-16 lg:flex-row"> <p class="text-sm text-primary-950/70 dark:text-primary-200/70">
© ${year} Omniversify. All rights reserved.
</p> <!-- Bottom links --> <div class="grid max-w-xl flex-1 grid-cols-1 gap-8 sm:grid-cols-3"> ${bottomLinks.map((group) => renderTemplate`<div class="flex flex-col gap-4"> <p class="text-base font-medium">${group.header}</p> <ul role="list" class="flex flex-col gap-3"> ${group.links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="inline-flex items-center gap-1 rounded-md text-base hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-950 dark:focus-visible:outline-primary-200"${addAttribute(link.isExternal ? "_blank" : void 0, "target")}${addAttribute(link.isExternal ? "noopener" : void 0, "rel")}> ${link.name} ${link.isExternal && renderTemplate`<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"> <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path> </svg>`} </a> </li>`)} </ul> </div>`)} </div> </div> </div> </footer>`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/components/layout/Footer.astro", void 0);

const $$Astro$k = createAstro("https://gaming.omniversify.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Header;
  const links = [
    {
      ref: "01",
      name: "Home",
      href: "/"
    },
    {
      ref: "02",
      name: "Blog",
      href: "/blog"
    },
    {
      ref: "03",
      name: "About",
      href: "/about"
    },
    {
      ref: "04",
      name: "Projects",
      href: "/projects"
    },
    {
      ref: "05",
      name: "Contact",
      href: "/contact"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header x-data="{ open: false }" class="transition" :class="{ 'bg-primary-500/10 dark:bg-primary-400/10': open, 'bg-primary-50 dark:bg-primary-950': !(open) }"> <div class="mx-auto flex max-w-2xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8"> <!-- Brand logo --> <div class="flex"> <a href="/" class="focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200 rounded-md focus-visible:outline focus-visible:outline-2"> <span class="sr-only">Omniversify Gaming</span> <img class="h-8 w-auto" width="65" height="40" :src="$store.theme.isDark ? '/assets/logo-inverted.svg' : '/assets/logo.svg'" alt="Omniversify Gaming"> </a> </div> <!-- Actions --> <div class="-mr-2 flex items-center space-x-2 sm:space-x-3"> <!-- Toggle theme mode --> <button type="button" class="text-primary-950 dark:text-primary-200 hover:bg-primary-500/10 dark:hover:bg-primary-400/10 ring-primary-950 inline-flex h-14 w-14 items-center justify-center rounded-full transition focus:outline-none focus-visible:ring-2" x-data @click="$store.theme.toggle()"> <span class="sr-only">Toggle theme mode</span> <svg x-cloak class="h-6 w-6" :class="{ 'hidden': !($store.theme.isDark) }" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path> </svg> <svg x-cloak class="h-6 w-6" :class="{ 'hidden': $store.theme.isDark }" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M10 6C10 10.4183 13.5817 14 18 14C19.4386 14 20.7885 13.6203 21.9549 12.9556C21.4738 18.0302 17.2005 22 12 22C6.47715 22 2 17.5228 2 12C2 6.79948 5.9698 2.52616 11.0444 2.04507C10.3797 3.21152 10 4.56142 10 6ZM4 12C4 16.4183 7.58172 20 12 20C14.9654 20 17.5757 18.3788 18.9571 15.9546C18.6407 15.9848 18.3214 16 18 16C12.4772 16 8 11.5228 8 6C8 5.67863 8.01524 5.35933 8.04536 5.04293C5.62119 6.42426 4 9.03458 4 12ZM18.1642 2.29104L19 2.5V3.5L18.1642 3.70896C17.4476 3.8881 16.8881 4.4476 16.709 5.16417L16.5 6H15.5L15.291 5.16417C15.1119 4.4476 14.5524 3.8881 13.8358 3.70896L13 3.5V2.5L13.8358 2.29104C14.5524 2.1119 15.1119 1.5524 15.291 0.835829L15.5 0H16.5L16.709 0.835829C16.8881 1.5524 17.4476 2.1119 18.1642 2.29104ZM23.1642 7.29104L24 7.5V8.5L23.1642 8.70896C22.4476 8.8881 21.8881 9.4476 21.709 10.1642L21.5 11H20.5L20.291 10.1642C20.1119 9.4476 19.5524 8.8881 18.8358 8.70896L18 8.5V7.5L18.8358 7.29104C19.5524 7.1119 20.1119 6.5524 20.291 5.83583L20.5 5H21.5L21.709 5.83583C21.8881 6.5524 22.4476 7.1119 23.1642 7.29104Z"></path> </svg> </button> <!-- Toggle menu --> <button type="button" class="text-primary-950 dark:text-primary-200 hover:bg-primary-500/10 dark:hover:bg-primary-400/10 ring-primary-950 inline-flex h-14 w-14 items-center justify-center rounded-full transition focus:outline-none focus-visible:ring-2" @click="open = !open" @mousedown="if (open) $event.preventDefault()" aria-controls="website-menu" aria-expanded="false" :aria-expanded="open.toString()"> <span class="sr-only">Toggle menu</span> <svg x-cloak class="h-8 w-8" :class="{ 'hidden': open, 'block': !(open) }" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M19 8H5V10H19V8ZM19 14H5V16H19V14Z"></path> </svg> <svg x-cloak class="h-8 w-8" :class="{ 'block': open, 'hidden': !(open) }" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path> </svg> </button> </div> </div> <!-- Menu content --> <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8" id="website-menu" x-cloak x-show="open" x-collapse x-collapse.duration.500ms> <div class="grid grid-cols-1 gap-16 pb-24 pt-6 lg:grid-cols-2 lg:pt-12"> <div class="bg-primary-500/10 dark:bg-primary-400/10 hidden items-center justify-center rounded-3xl px-6 py-8 lg:flex"> <p class="text-primary-950/70 dark:text-primary-200/70 max-w-sm text-xl italic leading-loose"> <span class="font-medium">Omniversify Gaming</span> </p> </div> <!-- Navigation --> <nav class="divide-primary-900/10 dark:divide-primary-300/10 flex flex-col gap-1 divide-y"> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-primary-950 dark:text-primary-200 group inline-flex py-6 text-3xl font-medium tracking-tight transition focus-visible:outline-none sm:py-8 sm:text-4xl"> <div class="group-focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200 flex flex-1 items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2"> <div class="flex items-center gap-6"> <span class="text-xs">${link.ref}</span> <span class="group-hover:underline">${link.name}</span> </div> <svg class="text-primary-600 dark:text-primary-400 h-6 w-6 sm:h-8 sm:w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"> <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path> </svg> </div> </a>`)} </nav> </div> </div> </header>`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/components/layout/Header.astro", void 0);

const $$Astro$j = createAstro("https://gaming.omniversify.com");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Index$2;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} `;
}, "C:/Users/elfai/Documents/Apps/gaming/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro$i = createAstro("https://gaming.omniversify.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="en" x-cloak x-data :class="{ 'dark': $store.theme.isDark }"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-primary-50 text-primary-950 antialiased transition dark:bg-primary-950 dark:text-primary-200"> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})}   ${renderComponent($$result, "SpeedInsights", $$Index$2, {})} </body></html>`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/layouts/Layout.astro", void 0);

const $$Astro$h = createAstro("https://gaming.omniversify.com");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Page not found. Please check the URL in the address bar and try again.", "title": "Not Found | Omniversify Gaming" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16 sm:py-20"> <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"> <div class="flex flex-col items-start gap-8 sm:gap-10"> <div class="flex flex-col gap-4 sm:gap-6"> <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl"> <div>404</div> <div>Page not found</div> </h1> <p class="text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl">
Please check the URL in the address bar and try again.
</p> </div> <a href="/" class="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
Go back home
</a> </div> </div> </section> ` })}`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/pages/404.astro", void 0);

const $$file$8 = "C:/Users/elfai/Documents/Apps/gaming/src/pages/404.astro";
const $$url$8 = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file$8,
  url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$g = createAstro("https://gaming.omniversify.com");
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Heading;
  return renderTemplate`${maybeRenderHead()}<section class="py-8 sm:py-8"> <div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"> <div class="flex flex-col gap-4 sm:gap-6"> <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">About Us</h1> </div> </div> </section>`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/components/about/Heading.astro", void 0);

const $$Astro$f = createAstro("https://gaming.omniversify.com");
const $$Mission = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Mission;
  const stats = [
    {
      value: "Palworld"
    },
    {
      value: "Genshin Impact"
    },
    {
      value: "Counter Strike 2"
    },
    {
      value: "Rust"
    },
    {
      value: "GTA V"
    },
    {
      value: "Skyrim"
    },
    {
      value: "Farlight 84"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-8 sm:py-8"> <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"> <div class="grid gap-16 lg:grid-cols-2 lg:gap-24"> <img class="mx-auto h-auto w-full max-w-xl rounded-3xl" width="768" height="512" src="/images/raiden shogun roll safe meme.webp" alt="Phaylali, the founder of the omniversify"> <div class="flex flex-col gap-10"> <!-- Mission description --> <div class="space-y-8 sm:space-y-12"> <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Who Are We?</h2> <div class="space-y-6"> <p class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
Greetings Earthlings, We are the gaming division of the Omniversify Project.
</p> </div> </div> <div class="space-y-8 sm:space-y-12"> <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Games & Topics</h2> </div> <!-- Stats --> <dl class="grid grid-cols-1 gap-6 sm:grid-cols-2"> ${stats.map((stat) => renderTemplate`<button onclick=""> <div class="rounded-3xl border border-primary-900/10 p-6 dark:border-primary-300/10"> <dd class="text-2xl font-medium tracking-tight">${stat.value}</dd> </div></button>`)} </dl> </div> </div> </div> </section>`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/components/about/Mission.astro", void 0);

const $$Astro$e = createAstro("https://gaming.omniversify.com");
const $$About$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$About$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Find more about Omniversify Gaming", "title": "About | Omniversify Gaming" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Heading", $$Heading, {})} ${renderComponent($$result2, "Mission", $$Mission, {})} ` })}`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/pages/about.astro", void 0);

const $$file$7 = "C:/Users/elfai/Documents/Apps/gaming/src/pages/about.astro";
const $$url$7 = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About$1,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const SITE_TITLE = "Gaming Blog, News, Tips & Tricks by Omniversify";
const SITE_DESCRIPTION = "We share news, opinions, tips and tricks related to the gaming world";

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://gaming.omniversify.com", "ASSETS_PREFIX": undefined}, {})?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/creation_of_the_website.md": () => import('./creation_of_the_website_CywIic5_.mjs'),"/src/content/blog/jojo_morocco_vs_burkina_faso.md": () => import('./jojo_morocco_vs_burkina_faso_DWcqBt1Y.mjs'),"/src/content/blog/more_jojo_lot_of_work.md": () => import('./more_jojo_lot_of_work_DA4CcJX_.mjs'),"/src/content/blog/testt.md": () => import('./testt_DbVfFsn7.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"creation_of_the_website":"/src/content/blog/creation_of_the_website.md","more_jojo_lot_of_work":"/src/content/blog/more_jojo_lot_of_work.md","jojo_morocco_vs_burkina_faso":"/src/content/blog/jojo_morocco_vs_burkina_faso.md","testt":"/src/content/blog/testt.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/creation_of_the_website.md": () => import('./creation_of_the_website_CYKLsIQX.mjs'),"/src/content/blog/jojo_morocco_vs_burkina_faso.md": () => import('./jojo_morocco_vs_burkina_faso_By5tcJnS.mjs'),"/src/content/blog/more_jojo_lot_of_work.md": () => import('./more_jojo_lot_of_work_CU7W28uk.mjs'),"/src/content/blog/testt.md": () => import('./testt_Dr1Hio4a.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$d = createAstro("https://gaming.omniversify.com");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/components/home/FormattedDate.astro", void 0);

const $$Astro$c = createAstro("https://gaming.omniversify.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SITE_TITLE, "description": SITE_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-5 sm:py-10"> <div class="mx-auto max-w-2xl px-4 sm:px-4 lg:max-w-7xl lg:px-8"> <div class="grid grid-cols-1 flex-col-reverse gap-10 lg:grid-cols-2"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}/`, "href")}> <img width="768" height="512"${addAttribute(post.data.heroImage, "src")} alt="" class="h-auto w-full rounded-3xl"> <div class="flex max-w-none flex-col items-start gap-8 sm:gap-10 py-5"> <div class="flex  flex-col items-start gap-4 sm:gap-4"> <div class="text-3xl font-medium tracking-tight sm:text-4xl lg:text-4xl"> ${post.data.title} </div> <div class="text-md sm:text-md text-primary-950/70 dark:text-primary-200/70">
Created on: ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })} </div> </div> </div> </a>`)} </div> </div> </section> ` })}`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/pages/blog/index.astro", void 0);

const $$file$6 = "C:/Users/elfai/Documents/Apps/gaming/src/pages/blog/index.astro";
const $$url$6 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro("https://gaming.omniversify.com");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-5 sm:py-10"> <div class="mx-auto max-w-2xl px-4 sm:px-4 lg:max-w-7xl lg:px-8"> <div class="flex flex-col gap-10"> <div class="flex flex-col items-start gap-8 sm:gap-10 max-w-none"> <div class="flex  flex-col items-start gap-4 sm:gap-4"> <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl"> ${title} </h1> <p class="text-lg text-primary-950/70 dark:text-primary-200/70 sm:text-xl"> ${description} </p> <h1 class="text-md sm:text-md text-primary-950/70 dark:text-primary-200/70">
Created on: ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": pubDate })} </h1> </div> </div> <img class="h-auto w-full rounded-3xl" width="768" height="512"${addAttribute(heroImage, "src")} alt="Hero picture"> <div class="prose prose-stone prose-xl dark:prose-invert prose-red max-w-none prose-img:rounded-xl"> ${renderSlot($$result2, $$slots["default"])} </div> </div> </div> </section> ` })}`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/layouts/BlogPost.astro", void 0);

const $$Astro$a = createAstro("https://gaming.omniversify.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/pages/blog/[...slug].astro", void 0);

const $$file$5 = "C:/Users/elfai/Documents/Apps/gaming/src/pages/blog/[...slug].astro";
const $$url$5 = "/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file$5,
  getStaticPaths,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro("https://gaming.omniversify.com");
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ContactForm;
  return renderTemplate`${maybeRenderHead()}<section class="py-8 sm:py-8"> <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"> <div class="grid gap-12 lg:grid-cols-2 lg:gap-8"> <div class="flex flex-col gap-4 sm:gap-6"> <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Share with us what you know</h2> <p class="text-primary-950/70 dark:text-primary-200/70 max-w-lg text-lg sm:text-xl">
Share with us news, tips, tricks or any opinion you have.
</p> </div> <form action="#" method="POST" class="mt-3 flex flex-col gap-y-6"> <!-- Full name input --> <div> <label for="full-name" class="sr-only">Full name</label> <input type="text" name="full-name" id="full-name" autocomplete="name" class="hover:ring-primary-600 focus:ring-primary-600 dark:hover:ring-primary-400 dark:focus:ring-primary-400 bg-primary-50 dark:bg-primary-950 ring-primary-900/40 dark:ring-primary-200/40 placeholder:text-primary-950/60 dark:placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2" placeholder="Full name"> </div> <!-- Email input --> <div> <label for="email" class="sr-only">Email</label> <input type="email" name="email" id="email" autocomplete="email" class="hover:ring-primary-600 focus:ring-primary-600 dark:hover:ring-primary-400 dark:focus:ring-primary-400 bg-primary-50 dark:bg-primary-950 ring-primary-900/40 dark:ring-primary-200/40 placeholder:text-primary-950/60 dark:placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2" placeholder="Email"> </div> <!-- Message textarea --> <div> <label for="message" class="sr-only">Message</label> <textarea name="message" id="message" rows="3" class="hover:ring-primary-600 focus:ring-primary-600 dark:hover:ring-primary-400 dark:focus:ring-primary-400 bg-primary-50 dark:bg-primary-950 ring-primary-900/40 dark:ring-primary-200/40 placeholder:text-primary-950/60 dark:placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2" placeholder="Message"></textarea> </div> <div> <button class="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" type="submit">
Submit
</button> </div> </form> </div> </div> </section>`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/components/contact/ContactForm.astro", void 0);

const $$Astro$8 = createAstro("https://gaming.omniversify.com");
const $$ContactInfo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ContactInfo;
  return renderTemplate`${maybeRenderHead()}<section class="py-8 sm:py-8"> <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"> <dl class="grid gap-6 lg:grid-cols-3"> <!-- Email --> <div class="bg-primary-500/10 dark:bg-primary-400/10 rounded-3xl px-6 py-8"> <dt class="sr-only">Email</dt> <dd class="flex h-full flex-col justify-between gap-12"> <svg class="text-primary-600 dark:text-primary-400 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"> <path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"></path> </svg> <p class="text-base font-medium">support@omniversify.com</p> </dd> </div> </dl> </div> </section>`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/components/contact/ContactInfo.astro", void 0);

const $$Astro$7 = createAstro("https://gaming.omniversify.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Contact our team to learn more about how we can help you.", "title": "Contact | Omniversify Gaming" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactInfo", $$ContactInfo, {})} ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} ` })}`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/pages/contact.astro", void 0);

const $$file$4 = "C:/Users/elfai/Documents/Apps/gaming/src/pages/contact.astro";
const $$url$4 = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro("https://gaming.omniversify.com");
const $$Privacy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Privacy;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Our privacy policy will help you understand what information is collected and how it is used.", "title": "Privacy policy | Omniversify Gaming" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8"> <div class="sm:pb:20 flex flex-col gap-4 pb-16 text-center"> <h1 class="text-4xl font-medium tracking-tight sm:text-5xl">Privacy Policy</h1> <p class="text-base">Last update: September 16, 2023</p> </div> <div> <p class="mb-4">
At Omniversify, we are committed to safeguarding your privacy. This Privacy Policy
        outlines how we collect, use, and protect your personal information when you use our
        [website/app/service]. Please take a moment to read through this document to understand our
        practices.
</p> <h2 class="mb-6 mt-12 text-xl font-medium sm:text-2xl">1. Information We Collect</h2> <p class="mb-6">
We may collect the following types of personal information when you interact with our
        website:
</p> <ul class="list-inside list-disc space-y-4"> <li>
Information you provide: When you sign up, create an account, or use certain features, we
          may ask for your name, email address, contact details, and other relevant information.
</li> <li>
Usage data: We may collect data about how you use our website, including but
          not limited to your IP address, browser type, device information, pages visited, and
          interactions with the content.
</li> <li>
Cookies and similar technologies: We use cookies and similar technologies to enhance your
          experience, understand usage patterns, and improve our website.
</li> </ul> <h2 class="mb-6 mt-12 text-xl font-medium sm:text-2xl">2. How We Use Your Information</h2> <p class="mb-4">We may use your personal information for the following purposes:</p> <ul class="list-inside list-disc space-y-4"> <li>
To provide and improve our website: Your information helps us offer a
          personalized and user-friendly experience.
</li> <li>
Communication: We may use your email address or contact details to send you important
          updates, newsletters, and promotional content. You can opt-out of these communications at
          any time.
</li> <li>
Analytics: We use aggregated and anonymized data to analyze user behavior and improve our
          website.
</li> </ul> <h2 class="mb-6 mt-12 text-xl font-medium sm:text-2xl">Contact Us</h2> <p class="mb-4">
If you have any questions or concerns about our Privacy Policy, please contact us at
        support@omniversify.com .
</p> </div> </div> ` })}`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/pages/privacy.astro", void 0);

const $$file$3 = "C:/Users/elfai/Documents/Apps/gaming/src/pages/privacy.astro";
const $$url$3 = "/privacy";

const privacy = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("https://gaming.omniversify.com");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Gaming tools made by Omniversify", "title": "Gaming Tools | Omniversify Gaming" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="py-8 lg:py-10"> <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"> <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">Coming Soon</h1> </div> </header> ` })}`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/pages/projects.astro", void 0);

const $$file$2 = "C:/Users/elfai/Documents/Apps/gaming/src/pages/projects.astro";
const $$url$2 = "/projects";

const projects = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

async function get(context) {
  const posts = await getCollection('blog');


  return rss({
    stylesheet:'/rss/rss.xsl',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}

const rss_xml = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://gaming.omniversify.com");
const $$Styleguide = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Styleguide;
  const colors = [
    {
      name: "white",
      hex: "#ffffff"
    },
    {
      name: "50",
      hex: "#fafaf9"
    },
    {
      name: "100",
      hex: "#f5f5f4"
    },
    {
      name: "200",
      hex: "#e7e5e4"
    },
    {
      name: "300",
      hex: "#d6d3d1"
    },
    {
      name: "400",
      hex: "#a8a29e"
    },
    {
      name: "500",
      hex: "#78716c"
    },
    {
      name: "600",
      hex: "#57534e"
    },
    {
      name: "700",
      hex: "#44403c"
    },
    {
      name: "800",
      hex: "#292524"
    },
    {
      name: "900",
      hex: "#1c1917"
    },
    {
      name: "950",
      hex: "#0c0a09"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Style guide for Stone premium Astro theme", "title": "Styleguide \xB7 Stone" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="py-8 lg:py-8"> <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"> <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">Styleguide</h1> </div> </header> <section class="py-8 sm:py-8"> <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"> <div class="flex flex-col gap-16"> <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Colors</h2> <div class="grid grid-cols-2 gap-12 sm:grid-cols-6"> ${colors.map((color) => renderTemplate`<div class="relative flex"> <div class="flex flex-col gap-2"> <div class="border-primary-900/10 dark:border-primary-300/10 h-16 w-16 rounded-md border"${addAttribute(`background-color: ${color.hex}`, "style")}></div> <div class="text-sm font-medium">${color.name}</div> </div> </div>`)} </div> </div> </div> </section> <section class="py-8 sm:py-8"> <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"> <div class="flex flex-col gap-16"> <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Typography</h2> <div class="flex flex-col gap-16 sm:flex-row"> <div class="flex flex-col gap-8"> <div class="bg-primary-500/10 dark:bg-primary-400/10 flex w-64 flex-col items-center gap-3 rounded-md p-6"> <p class="text-5xl">Aa</p> <p class="text-primary-950/70 dark:text-primary-200/70 text-base">Inter</p> </div> <div class="bg-primary-500/10 dark:bg-primary-400/10 flex w-64 flex-col items-center gap-3 rounded-md p-6"> <p class="text-5xl font-medium">Aa</p> <p class="text-primary-950/70 dark:text-primary-200/70 text-base">Inter Medium</p> </div> </div> <div class="flex flex-col gap-4"> <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">Heading 1</h1> <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Heading 2</h2> <h3 class="text-xl font-medium sm:text-2xl">Heading 3</h3> <p class="text-lg sm:text-xl">Subtitle</p> <p class="text-base font-medium">Bold text</p> <p class="text-base">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
              suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor
              cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
              ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
              perferendis suscipit eaque, iste dolor cupiditate.
</p> </div> </div> </div> </div> </section> ` })}`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/pages/styleguide.astro", void 0);

const $$file$1 = "C:/Users/elfai/Documents/Apps/gaming/src/pages/styleguide.astro";
const $$url$1 = "/styleguide";

const styleguide = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Styleguide,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://gaming.omniversify.com");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section class="py-8 sm:py-8"> <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"> <div class="grid gap-12 lg:grid-cols-3 lg:gap-8"> <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">About</h2> <div class="flex flex-col items-start gap-8 sm:gap-10 lg:col-span-2"> <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
We are the gaming division of the Omniversify Project
</p> <a href="/about" class="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
Read about Omniversify Gaming
</a> </div> </div> </div> </section>`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/components/home/About.astro", void 0);

const $$Astro$2 = createAstro("https://gaming.omniversify.com");
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Cta;
  return renderTemplate`${maybeRenderHead()}<section class="py-8 sm:py-8"> <div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"> <div class="bg-primary-500/10 dark:bg-primary-400/10 flex flex-col items-center gap-8 rounded-3xl px-5 py-16 sm:gap-10"> <div class="flex flex-col gap-4 sm:gap-6"> <h2 class="mx-auto max-w-sm text-3xl font-medium tracking-tight sm:text-4xl">
Do you have any hidden tips or tricks?
</h2> <p class="text-primary-950/70 dark:text-primary-200/70 mx-auto max-w-2xl text-lg">
If you have any credible news, tips or tricks about games that you want people to know, share it with us and we will shout you out, send us an email
</p> </div> <a href="/contact" class="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
Contact Omniversify Gaming
</a> </div> </div> </section>`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/components/home/Cta.astro", void 0);

const $$Astro$1 = createAstro("https://gaming.omniversify.com");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="py-8 sm:py-8"> <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"> <div class="flex flex-col gap-16"> <div class="flex flex-col items-start gap-8 sm:gap-10"> <div class="flex max-w-xl flex-col items-start gap-4 sm:gap-6"> <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
Gaming Blog by Omniversify
</h1> <p class="text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl">
Gaming news, tips and tricks
</p> </div> <a href="/blog" class="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
Check the Blog
</a> </div> <img class="h-auto w-full rounded-3xl" width="768" height="512" src="/images/raiden shogun roll safe meme.webp" alt="Hero picture"> </div> </div> </section>`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/components/home/Hero.astro", void 0);

const $$Astro = createAstro("https://gaming.omniversify.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Gaming News, Tips and Tricks by Omniversify", "title": "Omniversify Gaming" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "C:/Users/elfai/Documents/Apps/gaming/src/pages/index.astro", void 0);

const $$file = "C:/Users/elfai/Documents/Apps/gaming/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _404 as _, admin as a, about as b, ____slug_ as c, contact as d, projects as e, index as f, index$1 as i, privacy as p, rss_xml as r, styleguide as s };
