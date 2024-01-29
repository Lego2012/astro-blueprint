# [Astro Icon](https://www.astroicon.dev/)

## [Astro Icon 1.0 NPM](https://www.npmjs.com/package/astro-icon)

Astro Icon is ready to use, with zero additional configuration. The included `Icon` component allows you to inline `svgs` directly into your HTML.

By default, Astro Icon supports custom local `svg` icons. They are optimized with [svgo](https://github.com/svg/svgo) automatically with no extra build step. See "[A Pretty Good SVG Icon System](https://css-tricks.com/pretty-good-svg-icon-system/#just-include-the-icons-inline)" from CSS Tricks.

Astro Icon also supports [Iconify](https://iconify.design/) icon sets out-of-the-box.

The `Icon` component allows these custom properties:

~~~js
interface Props extends HTMLAttributes<"svg"> {
  /**
   * References a specific Icon
   */
  name: string;
  title?: string;
  size?: number;
  width?: number;
  height?: number;
}
~~~

The `Icon` also accepts any global HTML attributes and `aria` attributes. They will be forwarded to the rendered `<svg>` element.

Styling your icons is straightforward. Any styles can be targeted to the `[data-icon]` attribute selector. If you want to target a specific icon, you may target it by name using `[data-icon="filename"]`.

Astro Icon can be used with other frameworks utilizing the `slot` element.

# [Date FNS Library](https://date-fns.org)

See James Quick Astro Tutorial "Build Modern Websites with Astro (Premium)", Video "03_03-Configuring Content Collections with Zod"

# [12 Modern CSS One-Line Upgrades](https://moderncss.dev/12-modern-css-one-line-upgrades/)

Sometimes, improving your application CSS just takes a one-line upgrade or enhancement! Learn about 12 properties to start incorporating into your projects, and enjoy reducing technical debt, removing JavaScript, and scoring easy wins for user experience.

# [Astro Font](https://github.com/rishi-raj-jain/astro-font)

# [Astro SEO](https://github.com/jonasmerlin/astro-seo#readme)

# [Astro Navbar](https://github.com/surjithctly/astro-navbar#readme)

# [Astro Icon](https://github.com/natemoo-re/astro-icon#readme)

# [Astro Tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)

# [Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

# [Astro Robots](https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme)

# [Accessible Astro Components](https://github.com/markteekman/accessible-astro-components#Pagination)

# [Astro Heroicons](https://github.com/seanmcp/astro-heroicons#readme)

# [Astro Blog](https://github.com/futurethemes/astro-blog)

# [Typed.JS](https://github.com/mattboldt/typed.js)
