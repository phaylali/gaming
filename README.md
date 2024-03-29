
# Omniversify Gaming:

We are a blog that shares news, tips and tricks

## Stone: Astro Theme (Modified by Omniversify to include additional Markdown blogging features)

Stone is a free and open-source Astro theme specially designed for Business, Marketing, SaaS and Startup websites. 

## Key Features:

- **Built with Tailwind CSS & Alpine.js**
- **5+ Pages**
- **15+ Sections**
- Clean & Modern Design
- Fully Responsive
- Dark & Light Mode
- Fast & Performant
- Super Lightweight
- View Transitions (experimental)
- **Prettier** Code Formatter
- **Google Fonts**
- **Remix Icons**
- Free Updates
- Supports Blogging using MD and MDX format files
- Supports Editing Markdown blog posts via PagesCMS 
- Features a very nice and clean RSS feed

## Getting Started

### Requirements

- Basic knowledge of Astro, HTML and CSS.
- Text editor (We recommend Visual Studio Code)
- Node.js 18 or higher.


### Install dependencies

Navigate to your project folder and install its dependencies:

```
yarn install
```
or 
```
bun install
```

NOTE: bun is not stable on Windows yet, preferably use yarn 4.

or if you're running linux arch and having problems with sharp, try the following:
```
npm install --ignore-scripts=false --foreground-scripts sharp
```
You can use Bun too but there is a problem where the above code doesn't work since Bun doesn't support Sharp yet, but it is expected to be added soon.
but that problem is only with the installation , you can run this project with Bun faster than NPM.

To install Pages CMS for markdown editing, go to the website and set up your account there, feel free to modify the config page to suit your needs

https://app.pagescms.org/


### Start

Once the installation is done, you can now run your app:

```
yarn dev
```
or
```
bun dev
```

This runs the app in development mode. Open http://localhost:8080 to view it in the browser.

### Build

```
yarn build
```
or 
```
bun build
```

This builds the app for production to the `./dist/` folder.

## Project Structure

Inside the project, you'll see the following folders and files:

```
/
├── public/
│   ├── assets/  (assets like favicons and what the website needs)
│   ├── fonts/   (add fonts here if you want a different font)
│   ├── images/  (images that are going to be used by blog posts)
│   ├── rss/     (autogenerate, no need to modify it)
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│       ├── BlogPost.astro  (standard layout for blog posts)
│       ├── Layout.astro    (standard layout for pages, a theme basically)
│   ├── pages/
│   └── consts.ts
├── .prettierrc
├── .pages.yml              (the config file for PagesCMS)
├── astro.config.mjs
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.cjs
└── tsconfig.json
```

- `public/*` - Any static assets (images, fonts, icons, ...)
- `src/*` - Project source code (components, pages, ...)
- `src/components/*` - Reusable Astro components used to build pages.
- `src/layouts/*` - Astro components that define the UI structure shared by one or more pages..
- `src/pages/*` - Astro components used to create new pages on your site. Each page is exposed as a route based on its file name.
- `src/content/*` - Blog posts made in MD, you can use MDX as well.
- `.prettierrc` - Prettier configuration file.
- `astro.config.mjs` - Astro configuration file.
- `package.json` - File used by JavaScript package managers to manage your dependencies. It also defines the scripts that are commonly used to run Astro.
- `tailwind.config.cjs` - Tailwind configuration file. The theme section is where you define your color palette and fonts.
- `tsconfig.json` - TypeScript configuration file.

## Deployment

Ready to build and deploy your site? Follow the [official documentation](https://docs.astro.build/en/guides/deploy/).

## Support

If you have any questions or suggestions do not hesitate to contact me.

## License

This project is licensed under the terms of the MIT license.

[![ReadMeSupportPalestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-project.svg)](https://donate.unrwa.org/-landing-page/en_EN)