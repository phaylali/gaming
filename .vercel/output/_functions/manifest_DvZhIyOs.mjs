import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_DKTmtTZ_.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"admin/index.html","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/admin","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-decap-cms-oauth/src/admin.astro","pathname":"/admin","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"privacy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"styleguide/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/styleguide","isIndex":false,"type":"page","pattern":"^\\/styleguide\\/?$","segments":[[{"content":"styleguide","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/styleguide.astro","pathname":"/styleguide","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/oauth/callback","pattern":"^\\/oauth\\/callback$","segments":[[{"content":"oauth","dynamic":false,"spread":false}],[{"content":"callback","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-decap-cms-oauth/src/oauth/callback.ts","pathname":"/oauth/callback","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/oauth","pattern":"^\\/oauth$","segments":[[{"content":"oauth","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-decap-cms-oauth/src/oauth/index.ts","pathname":"/oauth","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://gaming.omniversify.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/elfai/Documents/Apps/gaming/node_modules/astro-decap-cms-oauth/src/admin.astro",{"propagation":"none","containsHead":true}],["C:/Users/elfai/Documents/Apps/gaming/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/elfai/Documents/Apps/gaming/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/elfai/Documents/Apps/gaming/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/elfai/Documents/Apps/gaming/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/elfai/Documents/Apps/gaming/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/elfai/Documents/Apps/gaming/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/elfai/Documents/Apps/gaming/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["C:/Users/elfai/Documents/Apps/gaming/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["C:/Users/elfai/Documents/Apps/gaming/src/pages/styleguide.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/elfai/Documents/Apps/gaming/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_Diw-NGTM.mjs","/node_modules/astro-decap-cms-oauth/src/oauth/index.ts":"chunks/pages/index_CMz1ZtDi.mjs","\u0000@astrojs-manifest":"manifest_DvZhIyOs.mjs","C:/Users/elfai/Documents/Apps/gaming/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CBPTEw7S.mjs","\u0000@astro-page:node_modules/astro-decap-cms-oauth/src/admin@_@astro":"chunks/admin_BgI-TMag.mjs","\u0000@astro-page:node_modules/astro-decap-cms-oauth/src/oauth/callback@_@ts":"chunks/callback_0JSie6-1.mjs","\u0000@astro-page:node_modules/astro-decap-cms-oauth/src/oauth/index@_@ts":"chunks/index_B0WJ0ZXU.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_C0IO_Y-x.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_CDxBoa52.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_DyTUhbWa.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._DJNgzWa1.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_Bc0xNZov.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"chunks/privacy_DrJk9cR6.mjs","\u0000@astro-page:src/pages/projects@_@astro":"chunks/projects_DiaqgduD.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_BjGtbdJ6.mjs","\u0000@astro-page:src/pages/styleguide@_@astro":"chunks/styleguide_CsEAqurR.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DuJApK8p.mjs","C:/Users/elfai/Documents/Apps/gaming/src/content/blog/creation_of_the_website.md?astroContentCollectionEntry=true":"chunks/creation_of_the_website_CywIic5_.mjs","C:/Users/elfai/Documents/Apps/gaming/src/content/blog/jojo_morocco_vs_burkina_faso.md?astroContentCollectionEntry=true":"chunks/jojo_morocco_vs_burkina_faso_DWcqBt1Y.mjs","C:/Users/elfai/Documents/Apps/gaming/src/content/blog/more_jojo_lot_of_work.md?astroContentCollectionEntry=true":"chunks/more_jojo_lot_of_work_DA4CcJX_.mjs","C:/Users/elfai/Documents/Apps/gaming/src/content/blog/testt.md?astroContentCollectionEntry=true":"chunks/testt_DbVfFsn7.mjs","C:/Users/elfai/Documents/Apps/gaming/src/content/blog/creation_of_the_website.md?astroPropagatedAssets":"chunks/creation_of_the_website_CYKLsIQX.mjs","C:/Users/elfai/Documents/Apps/gaming/src/content/blog/jojo_morocco_vs_burkina_faso.md?astroPropagatedAssets":"chunks/jojo_morocco_vs_burkina_faso_By5tcJnS.mjs","C:/Users/elfai/Documents/Apps/gaming/src/content/blog/more_jojo_lot_of_work.md?astroPropagatedAssets":"chunks/more_jojo_lot_of_work_CU7W28uk.mjs","C:/Users/elfai/Documents/Apps/gaming/src/content/blog/testt.md?astroPropagatedAssets":"chunks/testt_Dr1Hio4a.mjs","C:/Users/elfai/Documents/Apps/gaming/src/content/blog/creation_of_the_website.md":"chunks/creation_of_the_website_vMRuFdc5.mjs","C:/Users/elfai/Documents/Apps/gaming/src/content/blog/jojo_morocco_vs_burkina_faso.md":"chunks/jojo_morocco_vs_burkina_faso_BFyVRI6x.mjs","C:/Users/elfai/Documents/Apps/gaming/src/content/blog/more_jojo_lot_of_work.md":"chunks/more_jojo_lot_of_work_D8IBb_Zd.mjs","C:/Users/elfai/Documents/Apps/gaming/src/content/blog/testt.md":"chunks/testt_NquzFEuY.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.D-J6Cgqt.js","/astro/hoisted.js?q=1":"_astro/hoisted.B_4_2rQF.js","@astrojs/react/client.js":"_astro/client.CwWKiGVO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/inter-latin-500-normal.kWhwEdDH.woff2","/_astro/inter-latin-400-normal.BT1H-PT_.woff2","/_astro/inter-latin-400-normal.Cdi8t5Mu.woff","/_astro/inter-latin-500-normal.D4I8BKCx.woff","/_astro/admin.DuOnkpKx.css","/site.webmanifest","/admin/config.yml","/admin/index.html","/assets/android-chrome-192x192.png","/assets/android-chrome-512x512.png","/assets/apple-touch-icon.png","/assets/favicon-16x16.png","/assets/favicon-32x32.png","/assets/favicon.ico","/assets/favicon.svg","/assets/logo-inverted.svg","/assets/logo.svg","/assets/omniversify_logo.webp","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/images/raiden shogun aqua begging meme.webp","/images/raiden shogun roll safe meme.webp","/images/raiden shogun wheeze meme.webp","/rss/rss.xsl","/_astro/client.CwWKiGVO.js","/_astro/hoisted.B_4_2rQF.js","/_astro/hoisted.D-J6Cgqt.js","/admin/index.html","/404.html","/about/index.html","/blog/index.html","/contact/index.html","/privacy/index.html","/projects/index.html","/rss.xml","/styleguide/index.html","/index.html"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
